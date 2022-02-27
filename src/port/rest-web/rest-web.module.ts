import {Module} from '@nestjs/common';
import {ChallengeResponseController} from './challenge-response.controller';
import {UseCasesModule} from "../../application/use-cases/use-cases.module";

@Module({
    controllers: [ChallengeResponseController],
    imports: [UseCasesModule]
})
export class RestWebModule {
}
