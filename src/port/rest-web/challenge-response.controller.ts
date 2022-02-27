import {Controller, Get, HttpException, Scope} from '@nestjs/common';
import {catchError, map, Observable, throwError} from "rxjs";
import {
    CountTheLetterCInNameCharacterUseCaseService
} from "../../application/use-cases/count-the-letter-c-in-name-character-use-case.service";

@Controller({
    path: "/",
    scope: Scope.REQUEST
})
export class ChallengeResponseController {

    constructor(private readonly countTheLetterCInNameCharacterUseCaseService: CountTheLetterCInNameCharacterUseCaseService) {
    }

    @Get('/challengeResult')
    handleNextChatSchedule(): Observable<any> {

        return this.countTheLetterCInNameCharacterUseCaseService.handler().pipe(
            map((result) => {
                return result;
            }),
            catchError(error => {
                const resultError = {message: error.message, stack: error.stack};
                return throwError(() => new HttpException(resultError, 400));
            }),
        );
    }

}
