import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ClientsModule} from "./adapters/clients/clients.module";
import { AdaptersModule } from './adapters/adapters.module';
import { DomainModule } from './domain/domain.module';
import { PortModule } from './port/port.module';

@Module({
  imports: [ClientsModule, AdaptersModule, DomainModule, PortModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
