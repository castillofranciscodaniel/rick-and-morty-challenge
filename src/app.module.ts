import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ClientsModule} from "./infraestructure/clients/clients.module";
import { InfrastructureModule } from './infraestructure/infrastructure-module';
import { PortModule } from './port/port.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [ClientsModule, InfrastructureModule, PortModule, ApplicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
