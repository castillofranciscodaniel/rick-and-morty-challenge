import {Controller, Get, HttpException, Scope} from '@nestjs/common';
import {catchError, map, Observable, throwError} from "rxjs";
import {
    CountTheLetterCInNameCharacterUseCaseService
} from "../../application/use-cases/count-the-letter-c-in-name-character-use-case.service";
import {CountResult} from "../../application/dto/count-result";
import {Character} from "../../domain/models/character";
import {Pagination} from "../../infraestructure/dto/pagination";

@Controller({
    path: "/",
    scope: Scope.REQUEST
})
export class ChallengeResponseController {

    constructor(private readonly countTheLetterCInNameCharacterUseCaseService: CountTheLetterCInNameCharacterUseCaseService) {
    }

    @Get('/challengeResult')
    async handleNextChatSchedule(): Promise<CountResult> {

        const result = await this.countTheLetterCInNameCharacterUseCaseService.handler()
        return result
    }

}
