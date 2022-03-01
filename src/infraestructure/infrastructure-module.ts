import {Module} from '@nestjs/common';
import {ClientsModule} from "./clients/clients.module";
import {DataInMemoryModule} from "./services/data-in-memory/data-in-memory.module";

@Module({
    imports: [ClientsModule, DataInMemoryModule],
    exports: [ClientsModule, DataInMemoryModule],
})

export class InfrastructureModule {
}
