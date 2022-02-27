import {Module} from '@nestjs/common';
import {ClientsModule} from "./clients/clients.module";
import {DomainModule} from "../domain/domain.module";

@Module({
    imports: [ClientsModule, DomainModule],
    exports: [ClientsModule]
})

export class AdaptersModule {
}
