import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req): any {
    return { message: 'Logged in!'};
  }

  @Get('protected')
  @UseGuards(AuthenticatedGuard)
  getHello(@Request() req): string {
    return req.user;
  }
}
