import {Test, TestingModule} from '@nestjs/testing';
import {CharacterClientService} from './character-client.service';
import {HttpModule, HttpService} from "nestjs-http-promise";
import {newEpisodePage1, newEpisodePage2} from "../../../json-to-test";
import {AxiosResponse} from "axios";

describe('CharacterClientService', () => {
    let service: CharacterClientService;
    let httpService: HttpService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CharacterClientService],
            imports: [HttpModule]
        }).compile();

        httpService = module.get<HttpService>(HttpService);
        service = module.get<CharacterClientService>(CharacterClientService);
    });

    it('should be return a character pagination', async () => {

        const response: AxiosResponse<any> = {
            data: newEpisodePage1(),
            headers: {},
            config: {url: 'http://localhost:3000/mockUrl'},
            status: 200,
            statusText: 'OK',
        };


        jest.spyOn(httpService, 'get').mockImplementation(async () => {
            return Promise.resolve(response)
        });

        expect(await service.findAll(1)).toMatchObject(newEpisodePage1());
    });

    it('should be throw a exception', async () => {


        jest.spyOn(httpService, 'get').mockImplementation(async () => {
            return Promise.reject("any http error")
        });

        expect(service.findAll(1)).resolves.toThrowError();
    });
});
