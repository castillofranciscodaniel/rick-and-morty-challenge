import { Test, TestingModule } from '@nestjs/testing';
import { LocationClientService } from './location-client.service';
import {HttpModule, HttpService} from "nestjs-http-promise";
import {AxiosResponse} from "axios";
import {Pagination} from "../../dto/pagination";
import {Episode} from "../../../domain/models/episode";
import {newEpisodePage1, newLocationPage1} from "../../../json-to-test";
import {Location} from "../../../domain/models/location";

describe('LocationClientService', () => {
  let service: LocationClientService;
  let httpService: HttpService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationClientService],
      imports: [HttpModule]
    }).compile();


    httpService = module.get<HttpService>(HttpService);
    service = module.get<LocationClientService>(LocationClientService);
  });

  it('should be return a locations pagination', async () => {

    const response: AxiosResponse<Pagination<Location>> = {
      data: newLocationPage1(),
      headers: {},
      config: {url: 'http://localhost:3000/mockUrl'},
      status: 200,
      statusText: 'OK',
    };


    jest.spyOn(httpService, 'get').mockImplementation(async () => {
      return Promise.resolve(response)
    });

    expect(await service.findAll(1)).toMatchObject(newLocationPage1());
  });

  it('should be throw a exception', async () => {


    jest.spyOn(httpService, 'get').mockImplementation(async () => {
      return Promise.reject("any http error")
    });

    expect(service.findAll(1)).resolves.toThrowError();
  });

});
