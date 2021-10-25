import { ScheduleMailController } from './schedule-mail.controller';
import { TaskSendMailSchema } from './schema/schedule-mail.schema';
import { UserModule } from 'src/user/user.module';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleMailService } from './schedule-mail.service';
import { MailModule } from 'src/mail/mail.module';
import { BullModule } from '@nestjs/bull';
import { MailProcessor } from './processor';
@Module({
  imports: [
    MailModule,
    BullModule.registerQueue({ name: "mail-queue" }),
    forwardRef(() => UserModule),
    MongooseModule.forFeature([
      { name: 'task-schedule-mail', schema: TaskSendMailSchema },
    ]),
  ],
  controllers: [ScheduleMailController],
  providers: [ScheduleMailService, MailProcessor],
  exports: [],
})
export class ScheduleMailModule {}