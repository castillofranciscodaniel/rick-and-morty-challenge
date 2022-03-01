import {Test, TestingModule} from '@nestjs/testing';
import {ChallengeResponseController} from './challenge-response.controller';
import {CountResult, ExerciseResult} from "../../application/dto/count-result";
import {UseCasesModule} from "../../application/use-cases/use-cases.module";
import {AppModule} from "../../app.module";
import {HttpModule, HttpService} from "nestjs-http-promise";
import {INestApplication} from "@nestjs/common";
import {LocationClientService} from "../clients/location-client/location-client.service";
import {CharacterClientService} from "../clients/character-client/character-client.service";
import {EpisodeClientService} from "../clients/episode-client/episode-client.service";
import {
    newCharacterPage1,
    newCharacterPage2,
    newEpisodePage1, newEpisodePage2, newExerciseCResultCharCounter,
    newLocationPage1,
    newLocationPage2
} from "../../../test/json-to-test";

const request = require('supertest');


describe('ChallengeResponseController', () => {

    let app: INestApplication;
    let httpService: HttpService;


    let locationClientService: LocationClientService
    let characterClientService: CharacterClientService
    let episodeClientService: EpisodeClientService

    beforeAll(async () => {
        const testAppModule: TestingModule = await Test.createTestingModule({
            imports: [AppModule, HttpModule, UseCasesModule]
        }).compile();

        app = testAppModule.createNestApplication();
        httpService = testAppModule.get<HttpService>(HttpService);


        episodeClientService = app.get<EpisodeClientService>(EpisodeClientService);
        locationClientService = app.get<LocationClientService>(LocationClientService);
        characterClientService = app.get<CharacterClientService>(CharacterClientService);

        await app.init();
    });

    it('should be return an ExerciseResult', async () => {
        jest.spyOn(locationClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newLocationPage1())
            }
            return Promise.resolve(newLocationPage2())
        });

        jest.spyOn(characterClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newCharacterPage1())
            }
            return Promise.resolve(newCharacterPage2())
        });

        jest.spyOn(episodeClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newEpisodePage1());
            }
            return Promise.resolve(newEpisodePage2());
        });

        const response = await request(app.getHttpServer()).get("");

        expect(response.body[0]).toMatchObject(newExerciseCResultCharCounter());
        expect(response.body).toHaveLength(2);
        expect(response.statusCode).toBe(200);


    });

    it('should be return an 500 error', async () => {
        jest.spyOn(locationClientService, 'findAll').mockImplementation((page: number) => {
           throw new Error('400 error')
            return Promise.resolve(newLocationPage2())
        });

        jest.spyOn(characterClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newCharacterPage1())
            }
            return Promise.resolve(newCharacterPage2())
        });

        jest.spyOn(episodeClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newEpisodePage1());
            }
            return Promise.resolve(newEpisodePage2());
        });

        const response = await request(app.getHttpServer()).get("");

        expect(response.statusCode).toBe(500);


    });

});


