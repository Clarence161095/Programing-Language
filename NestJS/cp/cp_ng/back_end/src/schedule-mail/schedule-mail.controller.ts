import { Cron } from '@nestjs/schedule';
import JwtAccessAuthGuard from 'src/auth/guards/jwt-access-auth.guard';
import { CreateScheduleMailDto } from './dto/create-schedule-mail.dto';
import { User, UserDto } from '../decorators/user.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ScheduleMailService } from './schedule-mail.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('schedule-mail')
@Controller('schedule-mail')
export class ScheduleMailController {
  constructor(private readonly scheduleMailService: ScheduleMailService) { }

  @Post('create')
  @UseGuards(JwtAccessAuthGuard)
  create(
    @User() user: UserDto,
    @Body() createScheduleMailDto: CreateScheduleMailDto) {
    return this.scheduleMailService.create(user.userId, createScheduleMailDto);
  }

  @Post('sendmail/:id')
  @UseGuards(JwtAccessAuthGuard)
  async sendMail(
    @Param('id') id: string) {
    this.scheduleMailService.sendMail(id);
    return true;
  }

  @Post('/startScheduleMail/:id')
  @UseGuards(JwtAccessAuthGuard)
  async scheduleSendMail(
    @Param('id') id: string
  ) {
    return this.scheduleMailService.scheduleMail(id);
  }

  @Cron('*/5 * * * *')
  autoSendMail() {
    const toUser = ""
    const content = ""
    const subject = ""
    
    const mail = {
      toUser,
      content,
      subject
    }
    return this.scheduleMailService.scheduleSendMail(mail);
  }

}


