import {Test, TestingModule} from '@nestjs/testing';
import {ChallengeResponseController} from './challenge-response.controller';
import {UseCasesModule} from "../../application/use-cases/use-cases.module";
import {AppModule} from "../../app.module";
import {HttpModule, HttpService} from "nestjs-http-promise";
import {INestApplication} from "@nestjs/common";
import {
    newCharacterPage1,
    newCharacterPage2,
    newEpisodePage1,
    newEpisodePage2,
    newExerciseCResultCharCounter,
    newLocationPage1,
    newLocationPage2
} from "../../../test/json-to-test";
import {IEpisodeRepository} from "../../domain/adapters/IEpisodeRepository";
import {ILocationRepository} from "../../domain/adapters/ILocationRepository";
import {ICharacterRepository} from "../../domain/adapters/ICharacterRepository";

const request = require('supertest');


describe('ChallengeResponseController', () => {

    let app: INestApplication;
    let httpService: HttpService;

    let episodeClientService: IEpisodeRepository
    let locationClientService: ILocationRepository
    let characterClientService: ICharacterRepository

    beforeAll(async () => {
        const testAppModule: TestingModule = await Test.createTestingModule({
            imports: [AppModule, HttpModule, UseCasesModule]
        }).compile();

        app = testAppModule.createNestApplication();
        httpService = testAppModule.get<HttpService>(HttpService);


        episodeClientService = app.get<IEpisodeRepository>(IEpisodeRepository);
        locationClientService = app.get<ILocationRepository>(ILocationRepository);
        characterClientService = app.get<ICharacterRepository>(ICharacterRepository);

        await app.init();
    });

    it('should be return an ExerciseResult', async () => {
        jest.spyOn(locationClientService, 'findAll').mockImplementation((page?: number) => {
            if (page === 1) {
                return newLocationPage1().results;
            }
            return newLocationPage2().results;
        });

        jest.spyOn(characterClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return newCharacterPage1().results;
            }
            return newCharacterPage2().results;
        });

        jest.spyOn(episodeClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return newEpisodePage1().results;
            }
            return newEpisodePage2().results;
        });

        const response = await request(app.getHttpServer()).get("")
            .expect(200);

        expect(response.body[0]).toMatchObject(newExerciseCResultCharCounter());
        expect(response.body).toHaveLength(2);


    });

    it('should be return an 500 error', async () => {
        jest.spyOn(locationClientService, 'findAll').mockImplementation((page: number) => {
            throw new Error('400 error');
            return newLocationPage2().results;
        });

        jest.spyOn(characterClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return newCharacterPage1().results;
            }
            return newCharacterPage2().results;
        });

        jest.spyOn(episodeClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return newEpisodePage1().results;
            }
            return newEpisodePage2().results;
        });

        const response = await request(app.getHttpServer()).get("");

        expect(response.statusCode).toBe(500);


    });

});


