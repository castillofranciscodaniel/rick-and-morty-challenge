import {Module} from '@nestjs/common';
import {ClientsModule} from "./infrastructure/clients/clients.module";
import {InfrastructureModule} from './infrastructure/infrastructure-module';
import {ApplicationModule} from './application/application.module';
import {DataInMemoryModule} from './infrastructure/services/data-in-memory/data-in-memory.module';
import {ConfigModule} from '@nestjs/config';

@Module({
    imports: [ClientsModule, InfrastructureModule, ApplicationModule, DataInMemoryModule, ConfigModule.forRoot()],
    controllers: [],
})
export class AppModule {

}
