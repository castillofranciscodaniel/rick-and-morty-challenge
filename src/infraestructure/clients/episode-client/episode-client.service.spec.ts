import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeClientService } from './episode-client.service';
import {HttpModule, HttpService} from "nestjs-http-promise";
import {AxiosResponse} from "axios";
import {newEpisodePage1} from "../../../json-to-test";
import {Pagination} from "../../dto/pagination";
import {Episode} from "../../../domain/models/episode";

describe('EpisodeClientService', () => {
  let service: EpisodeClientService;
  let httpService: HttpService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EpisodeClientService],
      imports: [HttpModule]
    }).compile();

    httpService = module.get<HttpService>(HttpService);
    service = module.get<EpisodeClientService>(EpisodeClientService);
  });

  it('should be return a episodes pagination', async () => {

    const response: AxiosResponse<Pagination<Episode>> = {
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
