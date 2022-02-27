import { Module } from '@nestjs/common';
import { UsescaseModule } from './usescase/usescase.module';

@Module({
  imports: [UsescaseModule]
})
export class AppicationModule {}
