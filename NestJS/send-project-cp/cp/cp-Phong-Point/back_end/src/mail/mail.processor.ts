import { SchedulerRegistry } from '@nestjs/schedule';
import { MailService } from 'src/mail/mail.service';
import { Logger } from '@nestjs/common';
import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Job } from 'bull';

@Processor('mailsend')
export class MailProcessor {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private readonly mailService: MailService) {}

  @OnQueueActive()
  onActive(job: Job) {
    // console.log(
    //   `Processor:@OnQueueActive - Processing job ${job.id} of type ${
    //     job.name
    //   }. Data: ${JSON.stringify(job.data)}`,
    // );
  }

  @OnQueueCompleted()
  onComplete(job: Job) {
    // console.log(
    //   `Processor:@OnQueueCompleted - Completed job ${job.id} of type ${job.name}.`,
    // );
  }

  @OnQueueFailed()
  onError(job: Job<any>, error) {
    // console.log(
    //   `Processor:@OnQueueFailed - Failed job ${job.id} of type ${job.name}: ${error.message}`,
    //   error.stack,
    // );
  }

  @Process({
    name: 'confirmation',
    concurrency: 2,
  })
  async sendWelcomeEmail(job: Job<any>): Promise<any> {
    console.log('Procesor:@Process - Sending confirmation email.');

    try {
      await this.mailService.sendMail(job.data);
    } catch (error) {
      this.logger.error('Failed to send confirmation email.', error.stack);
    }
  }
}
