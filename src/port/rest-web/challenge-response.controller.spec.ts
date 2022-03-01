import {Test, TestingModule} from '@nestjs/testing';
import {ChallengeResponseController} from './challenge-response.controller';
import {CountResult, ExerciseResult} from "../../application/dto/count-result";
import {
    CounterExerciseUseCaseService
} from "../../application/use-cases/counter-exercise-use-case/counter-exercise-use-case.service";
import {UseCasesModule} from "../../application/use-cases/use-cases.module";
import {AppModule} from "../../app.module";
import {HttpModule, HttpService} from "nestjs-http-promise";
import {INestApplication} from "@nestjs/common";
import {DataInMemoryService} from "../../infraestructure/services/data-in-memory/data-in-memory.service";

let counterExerciseUseCaseService: CounterExerciseUseCaseService;

const request = require('supertest');


describe('ChallengeResponseController', () => {

    let app: INestApplication;
    let httpService: HttpService;
    let dataInMemory: DataInMemoryService

    beforeAll(async () => {
        const testAppModule: TestingModule = await Test.createTestingModule({
            imports: [AppModule, HttpModule, UseCasesModule]
        }).compile();

        app = testAppModule.createNestApplication();
        httpService = testAppModule.get<HttpService>(HttpService);
        await app.init();
    });

    it('should be return an ExerciseResult', async () => {
        await dataInMemory.load()
        const response = await request(app.getHttpServer()).get("/challengeResult");

        expect(response.body[0]).toMatchObject(newExerciseCResultCharCounter());
        expect(response.body).toHaveLength(1);
        expect(response.statusCode).toBe(200);


    });

});

function newExerciseCResultCharCounter(): ExerciseResult<CountResult> {
    return {
        "exercise_name": "Char counter",
        "in_time": true,
        "results": [
            {
                "count": 494,
                "char": "c",
                "resource": "character"
            },
            {
                "count": 82,
                "char": "l",
                "resource": "location"
            },
            {
                "count": 88,
                "char": "e",
                "resource": "episode"
            }
        ]
    }
}
