import {Module} from '@nestjs/common';
import {ClientsModule} from "./infraestructure/clients/clients.module";
import {InfrastructureModule} from './infraestructure/infrastructure-module';
import {ApplicationModule} from './application/application.module';
import {DataInMemoryModule} from './infraestructure/services/data-in-memory/data-in-memory.module';

@Module({
    imports: [ClientsModule, InfrastructureModule, ApplicationModule, DataInMemoryModule],
    controllers: [],
})
export class AppModule {
}
