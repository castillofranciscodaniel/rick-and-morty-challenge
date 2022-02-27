import { Module } from '@nestjs/common';
import { RestWebModule } from './rest-web/rest-web.module';

@Module({
  imports: [RestWebModule]
})
export class PortModule {}
