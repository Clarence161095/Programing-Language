import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from '@nestjs/bull'
import { Job } from 'bull'
import { ScheduleMailService } from './schedule-mail.service'
import { MailService } from 'src/mail/mail.service';


@Processor('mail-queue')
export class MailProcessor {
  constructor(
    private readonly mailService: MailService,
    private readonly ScheduleMailService: ScheduleMailService,

  ) { }

  @OnQueueActive()
  async onActive(job: Job) {
    const mail: any = job.data
    await this.ScheduleMailService.updateStatusTaskSendMail(mail._id, 'pendding')
  }

  @OnQueueCompleted()
  async onComplete(job: Job, result: any) {
    const mail: any = job.data
    await this.ScheduleMailService.updateStatusTaskSendMail(mail._id, 'completed')
  }

  @OnQueueFailed()
  async onError(job: Job<any>, error: any) {
    const mail: any = job.data
    await this.ScheduleMailService.updateStatusTaskSendMail(mail._id, 'fail')
  }

  @Process({
    name: 'task-send-mail',
    concurrency: 2
  })
  async sendWelcomeEmail(job: Job<unknown>) {
    const mail: any = job.data

    try {
      const result = await this.mailService.sendMail(mail.toUser, mail.subject, mail.content)
      return result
    } catch (error) {
      throw error
    }
  }

}
