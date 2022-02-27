import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ClientsModule} from "./infraestructure/clients/clients.module";
import { InfrastructureModule } from './infraestructure/infrastructureModule';
import { DomainModule } from './domain/domain.module';
import { PortModule } from './port/port.module';
import { AppicationModule } from './appication/appication.module';

@Module({
  imports: [ClientsModule, InfrastructureModule, DomainModule, PortModule, AppicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
