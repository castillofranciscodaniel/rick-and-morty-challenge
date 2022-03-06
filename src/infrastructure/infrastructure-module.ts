import {Module} from '@nestjs/common';
import {ClientsModule} from "./clients/clients.module";
import {RestWebModule} from "./rest-web/rest-web.module";
import {AdaptersModule} from "./adapters/adapters.module";

@Module({
    imports: [RestWebModule, AdaptersModule],
    exports: [AdaptersModule],
})

export class InfrastructureModule {
}
