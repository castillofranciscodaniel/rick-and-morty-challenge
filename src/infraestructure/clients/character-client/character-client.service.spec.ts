import {Test, TestingModule} from '@nestjs/testing';
import {CharacterClientService} from './character-client.service';
import {HttpModule, HttpService} from "nestjs-http-promise";
import {newCharacterPage1} from "../../../json-to-test";
import {AxiosResponse} from "axios";
import {Character} from "../../../domain/models/character";
import {Pagination} from "../../dto/pagination";

describe('CharacterClientService', () => {
    let service: CharacterClientService;
    let httpService: HttpService

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CharacterClientService],
            imports: [HttpModule]
        }).compile();

        httpService = module.get<HttpService>(HttpService);
        service = module.get<CharacterClientService>(CharacterClientService);
    });

    it('should be return a character pagination', async () => {

        const response: AxiosResponse<Pagination<Character>> = {
            data: newCharacterPage1(),
            headers: {},
            config: {url: 'http://localhost:3000/mockUrl'},
            status: 200,
            statusText: 'OK',
        };


        jest.spyOn(httpService, 'get').mockImplementation(async () => {
            return Promise.resolve(response)
        });

        expect(await service.findAll(1)).toMatchObject(newCharacterPage1());
    });

    it('should be throw a exception', async () => {


        jest.spyOn(httpService, 'get').mockImplementation(async () => {
            return Promise.reject("any http error")
        });

        expect(service.findAll(1)).resolves.toThrowError();
    });
});
