import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from './logger/logger.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { MailModule } from './mail/mail.module';
import { UploadModule } from './upload/upload.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { BullModule } from '@nestjs/bull';
import { CouponModule } from './coupon/coupon.module';
import { StoreModule } from './store/store.module';
import { PointModule } from './point/point.module';
//For Cron
import { ScheduleModule } from '@nestjs/schedule'

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
      }
    ),
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
      limiter: {max: 2, duration: 10000 }
    }),
    MongooseModule.forRootAsync( {
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: 'mongodb://db' ,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }),
      inject: [ConfigService],
    }),
    AutomapperModule.forRoot({
      options: [{ name: 'classMapper', pluginInitializer: classes }],
      singular: true,
    }),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot(),
    MailModule,
    LoggerModule,
    AuthModule,
    UserModule,
    UploadModule,
    CouponModule,
    StoreModule,
    PointModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
