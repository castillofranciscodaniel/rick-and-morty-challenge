import {Module} from '@nestjs/common';
import {ChallengeResponseController} from './challenge-response.controller';
import {UseCasesModule} from "../../application/use-cases/use-cases.module";
import {DataInMemoryModule} from "../services/data-in-memory/data-in-memory.module";

@Module({
    controllers: [ChallengeResponseController],
    imports: [UseCasesModule, DataInMemoryModule]
})
export class RestWebModule {
}
