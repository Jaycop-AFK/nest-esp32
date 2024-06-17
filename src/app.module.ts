import { Module } from '@nestjs/common';
import { Esp32Service } from './esp32.service';
import { Esp32Controller } from './esp32.controller';

@Module({
  imports: [],
  controllers: [Esp32Controller],
  providers: [Esp32Service],
})
export class AppModule {}
