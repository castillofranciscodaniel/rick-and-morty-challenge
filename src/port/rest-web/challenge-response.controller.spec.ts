import {Test, TestingModule} from '@nestjs/testing';
import {ChallengeResponseController} from './challenge-response.controller';
import {CountResult, ExerciseResult} from "../../application/dto/count-result";
import {CounterExerciseUseCaseService} from "../../application/use-cases/counter-exercise-use-case.service";
import {UseCasesModule} from "../../application/use-cases/use-cases.module";

let counterExerciseUseCaseService: CounterExerciseUseCaseService;

const request = require('supertest');


describe('ChallengeResponseController', () => {
    let controller: ChallengeResponseController;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [UseCasesModule],
            controllers: [ChallengeResponseController],
        }).compile();

        counterExerciseUseCaseService = module.get<CounterExerciseUseCaseService>(CounterExerciseUseCaseService);

    });

    it('should be return an ExerciseResult', async () => {
        const response = await request(module.getHttpServer()).get("/challengeResult");

        expect(response.body).toMatchObject(newExerciseCResultCharCounter);
        expect(response.body).toHaveLength(1);
        expect(response.statusCode).toBe(200);
        // Testing a single element in the array
        // expect(response.body).toEqual(expect.arrayContaining(['Earth']));



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
