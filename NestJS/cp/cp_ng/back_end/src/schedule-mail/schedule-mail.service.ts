import { ScheduleStatus } from './enum/schedule.mail.enum';
import { CronJob } from 'cron';
import { UserService } from 'src/user/user.service';
import { CreateScheduleMailDto } from './dto/create-schedule-mail.dto';
import { TaskSendMailDocument } from './schema/schedule-mail.schema';
import { Injectable, forwardRef, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
import { Queue } from 'bull';
import { MailService } from 'src/mail/mail.service';
import { InjectQueue } from '@nestjs/bull';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { isValidCron } from 'cron-validator'


@Injectable()
export class ScheduleMailService {
  constructor(
    @InjectModel('task-schedule-mail')
    private readonly scheduleMailModel: Model<TaskSendMailDocument>,
    @InjectQueue('mail-queue') private mailQueue: Queue,
    @Inject(forwardRef(() => MailService))
    private mailService: MailService,
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    private scheduleRegistry: SchedulerRegistry,
  ) { }

  listMail = [];

  async create(userId: string, createScheduleMailDto: CreateScheduleMailDto) {
    try {
      const user = await this.userService.findById(userId);
      const newMail = new this.scheduleMailModel({
        ...createScheduleMailDto,
        status: 'start',
        createdBy: user._id,
        updatedBy: user._id
      })
      const mailFromDB = await newMail.save();
      return mailFromDB.toJSON();

    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateStatusTaskSendMail(id: string, status: string) {
    try {
      return this.scheduleMailModel.findByIdAndUpdate(id, { status }, { new: true })
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async scheduleSendMail(mail: any) {
     return await this.mailService.sendMail(mail.toUser, mail.subject, mail.content)
  }

  async sendMail(id: string) {
    const mail = await this.scheduleMailModel.findById(id);
    await this.mailQueue.add('task-send-mail', mail);
  }

  
  async scheduleMail(id: string) {
    const mail = await this.scheduleMailModel.findById(id);
    if (mail.statusJob !== ScheduleStatus.Start) {

      if (!isValidCron(mail.sendDate, { seconds: true })) {
        throw new HttpException('Please input sendDate flow format cron!', HttpStatus.BAD_REQUEST);
      }

      await this.scheduleMailModel.findByIdAndUpdate(id, { statusJob: ScheduleStatus.Start })
      const job = new CronJob(mail.sendDate, async () => {
        this.listMail.push(mail);
      });


      this.scheduleRegistry.addCronJob(`${id}`, job);
      job.start();
    }
    return { status: 'finish' }
  }

  @Cron("* * * * *")
  autoSendMail() {
    const MAX_MAIL_NUMBER = 2;

    if (this.listMail.length < MAX_MAIL_NUMBER && this.listMail.length > 0) {
      for (let i = 0; i < this.listMail.length; i++) {
        // this.mailQueue.add('task-send-mail', this.listMail[i]);
        this.listMail.splice(0, 1)
      }
    } else {
      for (let i = 0; i < MAX_MAIL_NUMBER; i++) {
        // this.mailQueue.add('task-send-mail', this.listMail[0]);
        this.listMail.splice(0, 1)
      }
    }
  }

}
