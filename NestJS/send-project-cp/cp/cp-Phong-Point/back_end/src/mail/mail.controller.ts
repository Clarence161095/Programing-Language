import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post, Logger, Param } from '@nestjs/common';
import { MailService } from './mail.service';
import { SendMailDto } from './dto/send-mail';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@ApiTags('scheduleMail')
@Controller('scheduleMail')
export class MailController {
  private readonly logger = new Logger(this.constructor.name);
  constructor(
    private readonly mailService: MailService,
    private schedulerRegistry: SchedulerRegistry
  ){}

  @Post('/sendmail/:idEmail')
  async sendMailToUser(
    @Param('idEmail') idEmail: string,
    @Body() sendMailDto: SendMailDto) {
    // this.schedulerRegistry.getCronJob('sendmail');
    console.log('Send Mail');
    //const date = new Date(sendMailDto.dateSend);
    const jobTask = new CronJob('5,35 * * * * *', () => {
      try {
        this.mailService.sendConfirmationEmail(sendMailDto);
      } catch (error) {
        this.logger.error('Failed to send confirmation email.', error.stack);
      }
      console.log('Scheduled Mail');
    });
    // this.schedulerRegistry.addCronJob(`${Date.now()}-${sendMailDto.subject}`, jobTask);
    this.schedulerRegistry.addCronJob(`${Date.now()}`, jobTask);
    jobTask.start();
  }

  @Post('/cancelMail/:idEmail')
  async cancelScheduledEmail(
    @Param('idEmail') idEmail: string,
  ) {
    console.log('cancel schedule email');
    try {
      const job = this.schedulerRegistry.getCronJob(idEmail)
      if(!job) {
        this.logger.error('Failed! No mail to cancel');
      } 
      return job.stop();
    } catch (error) {
      this.logger.error('Failed', error.stack);
      throw new error;
    }
  }

  @Post('/cancelMail')
  async cancelAllScheduledEmails(
  ) {
    console.log('cancel all schedule emails');
    return  this.schedulerRegistry.getCronJobs().forEach((job) => {
      job.stop();
    });
  }
}
