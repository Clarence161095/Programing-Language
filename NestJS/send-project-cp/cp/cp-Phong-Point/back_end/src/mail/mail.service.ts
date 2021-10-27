import { User } from 'src/decorators/user.decorator';
import { SendMailDto } from './dto/send-mail';
import { MailerService } from '@nestjs-modules/mailer';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
//For Cron
import { Cron } from '@nestjs/schedule';
import { Queue } from 'bull';
import { CronJob } from 'cron';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    //For Queue
    @InjectQueue('mailsend')
    private mailQueue: Queue,
  ) {}

  async verifyEmailAddress(to: string, link: string) {
    const url = link;
    await this.mailerService.sendMail({
      to: to,
      from: '"Support Team" <support@example.com>', // override default from
      subject: 'Please confirm your email address',
      template: './verify-email.hbs', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        url,
      },
      attachments: [
        {
          filename: 'logo.png',
          path: './src/images/logo.png',
          cid: 'logo', //same cid value as in the html img src
        },
      ],
    });
  }

  // (STR) PhongTHD
  // @Cron('*/5 * * * * *', {
  //   name: 'sendmail',
  //   timeZone: 'Asia/Ho_Chi_Minh'
  // })
  // handleCron() {
  //   console.log('Called when the current second is 5');
  // }
  async sendConfirmationEmail(sendMailDto: SendMailDto): Promise<boolean> {
    try {
      console.log('push confirmation queue');
      this.mailQueue.add('confirmation', sendMailDto,);
      return true;
    } catch (err) {
      console.log('Error queueing confirmation email to User');
      return false;
    }
  }

  public sendMail(sendMailDto: any) {
    const { to, from, subject, text, html } = sendMailDto;
    console.log('========sendMail=============');
    this.mailerService
      .sendMail({
        // to: to,
        // from: from,
        // subject: subject,
        // text: text,
        // html: '<b>' + html + '</b>', // HTML body content
        to : 'phongtrinh1995@gmail.com',
        from : '"Support Team" <support@example.com>',
        subject: 'Test send mail',
        text: 'Hello job queue',
        html: '<b> Welcome to Napa </b>',
      })
      .then((success) => {
        // console.log(success, 'Mail sent successfully');
        return success;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async cancelAllScheduledEmails() {
    try {
      console.log('push cancelMail queue');

      this.mailQueue.add('cancelMail');
      return true;
    } catch (err) {
      console.log('Error queueing cancel email to User');
      return false;
    }
  }
  // (END) PhongTHD
}