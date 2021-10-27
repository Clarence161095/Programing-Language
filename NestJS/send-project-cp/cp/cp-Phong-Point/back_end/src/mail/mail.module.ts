import { BullModule } from '@nestjs/bull';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailProcessor } from './mail.processor';
@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule], // import module if not enabled globally
      useFactory: async (config: ConfigService) => ({
        // transport: config.get("MAIL_TRANSPORT"),
        // or
        transport: {
          host: 'smtp.gmail.com', //config.get('MAIL_HOST'),
          port: 587,
          secure: false,
          auth: {
            user: 'nghianguyenhackathon@gmail.com',
            pass: 'Huunghia8896@123',
          },
        },
        defaults: {
          from: `"No Reply" <nghianguyenhackathon@gmail.com>`,
        },
        template: {
          dir: __dirname + '/templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
    //(STR) PhongTHD send mail
    BullModule.registerQueueAsync({
      name: 'mailsend', // mail queue name
    }),
    //(END) PhongTHD send mail
  ],
  controllers: [MailController],
  providers: [MailService, MailProcessor],
  exports: [MailService],
})
export class MailModule {}
