import {Module} from '@nestjs/common';
import {DataInMemoryService} from "./data-in-memory.service";
import {ClientsModule} from "../clients/clients.module";

@Module({
    providers: [DataInMemoryService],
    exports: [DataInMemoryService],
    imports: [ClientsModule]
})
export class DataInMemoryModule {
}
