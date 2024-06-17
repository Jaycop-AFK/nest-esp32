import { Controller, Get } from '@nestjs/common';
import { Esp32Service } from './esp32.service';

@Controller('esp32')
export class Esp32Controller {
  constructor(private readonly esp32Service: Esp32Service) {}

  @Get('hello')
  async getHello(): Promise<string> {
    return await this.esp32Service.getHello();
  }
}
