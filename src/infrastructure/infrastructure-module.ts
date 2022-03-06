import {Module} from '@nestjs/common';
import {ClientsModule} from "./clients/clients.module";
import {DataInMemoryModule} from "./data-in-memory/data-in-memory.module";
import {RestWebModule} from "./rest-web/rest-web.module";

@Module({
    imports: [ClientsModule, DataInMemoryModule, RestWebModule],
    exports: [ClientsModule, DataInMemoryModule],
})

export class InfrastructureModule {
}
