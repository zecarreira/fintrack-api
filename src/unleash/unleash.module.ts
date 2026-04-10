import { Module } from '@nestjs/common';
import { UnleashService } from './unleash.service';

@Module({
  providers: [UnleashService],
  exports: [UnleashService],
})
export class UnleashModule {}
