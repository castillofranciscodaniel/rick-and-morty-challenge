import {Module} from '@nestjs/common';
import {ClientsModule} from "./clients/clients.module";
import {DomainModule} from "../domain/domain.module";
import {CustomHttpService} from "./clients/custom.http.service";

@Module({
    imports: [ClientsModule, DomainModule],
    exports: [ClientsModule],
})

export class InfrastructureModule {
}
