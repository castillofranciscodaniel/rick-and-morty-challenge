import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ClientsModule} from "./infraestructure/clients/clients.module";
import { InfrastructureModule } from './infraestructure/infrastructure-module';
import { PortModule } from './port/port.module';
import { ApplicationModule } from './application/application.module';
import { DataInMemoryService } from './infraestructure/services/data-in-memory/data-in-memory.service';
import { DataInMemoryModule } from './infraestructure/services/data-in-memory/data-in-memory.module';

@Module({
  imports: [ClientsModule, InfrastructureModule, PortModule, ApplicationModule, DataInMemoryModule],
  controllers: [AppController],
  providers: [AppService, DataInMemoryService],
})
export class AppModule {}
