import { Controller, Get } from '@nestjs/common';

@Controller('/health')
export class HealthController {
  constructor() {}

  @Get()
  getHello(): Object {
    return {
        status: 'UP',
    }
  }
}
