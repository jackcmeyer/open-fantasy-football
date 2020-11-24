import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor() {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getInfo(): Object {
    return {
      name: 'open-fantasy-football',
      time: new Date(Date.now()).toISOString(),
      version: '0.1.0',
    };
  }
}
