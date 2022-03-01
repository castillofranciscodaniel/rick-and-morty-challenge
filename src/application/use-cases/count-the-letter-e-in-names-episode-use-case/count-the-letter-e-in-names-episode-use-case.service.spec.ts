import {Test, TestingModule} from '@nestjs/testing';
import {CountTheLetterEInNamesEpisodeUseCaseService} from './count-the-letter-e-in-names-episode-use-case.service';
import {CountResult} from "../../dto/count-result";
import {ClientsModule} from "../../../infraestructure/clients/clients.module";
import {EpisodeClientService} from "../../../infraestructure/clients/episode-client.service";
import {Pagination} from "../../../infraestructure/dto/pagination";
import {Episode} from "../../../domain/models/episode";
import {DataInMemoryModule} from "../../../infraestructure/services/data-in-memory/data-in-memory.module";
import {DataInMemoryService} from "../../../infraestructure/services/data-in-memory/data-in-memory.service";

describe('CountTheLetterEInNamesEpisodeUseCaseService', () => {
    let service: CountTheLetterEInNamesEpisodeUseCaseService;
    let episodeClientService: EpisodeClientService;
    let dataInMemoryModule: DataInMemoryService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CountTheLetterEInNamesEpisodeUseCaseService],
            imports: [ClientsModule, DataInMemoryModule]
        }).compile();

        episodeClientService = module.get<EpisodeClientService>(EpisodeClientService);
        dataInMemoryModule = module.get<DataInMemoryService>(DataInMemoryService);
        service = module.get<CountTheLetterEInNamesEpisodeUseCaseService>(CountTheLetterEInNamesEpisodeUseCaseService);

    });

    it('should be return an CountResult', async () => {

        jest.spyOn(episodeClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newEpisodePage1());
            }
            return Promise.resolve(newEpisodePage2());
        });

        await dataInMemoryModule.load();

        const countResult: CountResult = {
            count: 8,
            char: 'e',
            resource: 'episode',
        };

        expect(await service.handler()).toStrictEqual(countResult);
    });

});

function newEpisodePage1(): Pagination<Episode> {
    return {
        "info": {
            "count": 51,
            "pages": 2,
            "next": "https://rickandmortyapi.com/api/episode?page=2",
            "prev": null
        },
        "results": [
            {
                "id": 1,
                "name": "Pilot",
                "air_date": "December 2, 2013",
                "episode": "S01E01",
                "characters": [
                    "https://rickandmortyapi.com/api/character/1",
                    "https://rickandmortyapi.com/api/character/2",
                    "https://rickandmortyapi.com/api/character/35",
                    "https://rickandmortyapi.com/api/character/38",
                    "https://rickandmortyapi.com/api/character/62",
                    "https://rickandmortyapi.com/api/character/92",
                    "https://rickandmortyapi.com/api/character/127",
                    "https://rickandmortyapi.com/api/character/144",
                    "https://rickandmortyapi.com/api/character/158",
                    "https://rickandmortyapi.com/api/character/175",
                    "https://rickandmortyapi.com/api/character/179",
                    "https://rickandmortyapi.com/api/character/181",
                    "https://rickandmortyapi.com/api/character/239",
                    "https://rickandmortyapi.com/api/character/249",
                    "https://rickandmortyapi.com/api/character/271",
                    "https://rickandmortyapi.com/api/character/338",
                    "https://rickandmortyapi.com/api/character/394",
                    "https://rickandmortyapi.com/api/character/395",
                    "https://rickandmortyapi.com/api/character/435"
                ],
                "url": "https://rickandmortyapi.com/api/episode/1",
                "created": "2017-11-10T12:56:33.798Z"
            },
            {
                "id": 2,
                "name": "Lawnmower Dog",
                "air_date": "December 9, 2013",
                "episode": "S01E02",
                "characters": [
                    "https://rickandmortyapi.com/api/character/1",
                    "https://rickandmortyapi.com/api/character/2",
                    "https://rickandmortyapi.com/api/character/38",
                    "https://rickandmortyapi.com/api/character/46",
                    "https://rickandmortyapi.com/api/character/63",
                    "https://rickandmortyapi.com/api/character/80",
                    "https://rickandmortyapi.com/api/character/175",
                    "https://rickandmortyapi.com/api/character/221",
                    "https://rickandmortyapi.com/api/character/239",
                    "https://rickandmortyapi.com/api/character/246",
                    "https://rickandmortyapi.com/api/character/304",
                    "https://rickandmortyapi.com/api/character/305",
                    "https://rickandmortyapi.com/api/character/306",
                    "https://rickandmortyapi.com/api/character/329",
                    "https://rickandmortyapi.com/api/character/338",
                    "https://rickandmortyapi.com/api/character/396",
                    "https://rickandmortyapi.com/api/character/397",
                    "https://rickandmortyapi.com/api/character/398",
                    "https://rickandmortyapi.com/api/character/405"
                ],
                "url": "https://rickandmortyapi.com/api/episode/2",
                "created": "2017-11-10T12:56:33.916Z"
            },
            {
                "id": 3,
                "name": "Anatomy Park",
                "air_date": "December 16, 2013",
                "episode": "S01E03",
                "characters": [
                    "https://rickandmortyapi.com/api/character/1",
                    "https://rickandmortyapi.com/api/character/2",
                    "https://rickandmortyapi.com/api/character/12",
                    "https://rickandmortyapi.com/api/character/17",
                    "https://rickandmortyapi.com/api/character/38",
                    "https://rickandmortyapi.com/api/character/45",
                    "https://rickandmortyapi.com/api/character/96",
                    "https://rickandmortyapi.com/api/character/97",
                    "https://rickandmortyapi.com/api/character/98",
                    "https://rickandmortyapi.com/api/character/99",
                    "https://rickandmortyapi.com/api/character/100",
                    "https://rickandmortyapi.com/api/character/101",
                    "https://rickandmortyapi.com/api/character/108",
                    "https://rickandmortyapi.com/api/character/112",
                    "https://rickandmortyapi.com/api/character/114",
                    "https://rickandmortyapi.com/api/character/169",
                    "https://rickandmortyapi.com/api/character/175",
                    "https://rickandmortyapi.com/api/character/186",
                    "https://rickandmortyapi.com/api/character/201",
                    "https://rickandmortyapi.com/api/character/268",
                    "https://rickandmortyapi.com/api/character/300",
                    "https://rickandmortyapi.com/api/character/302",
                    "https://rickandmortyapi.com/api/character/338",
                    "https://rickandmortyapi.com/api/character/356"
                ],
                "url": "https://rickandmortyapi.com/api/episode/3",
                "created": "2017-11-10T12:56:34.022Z"
            }
        ]
    }
}

function newEpisodePage2(): Pagination<Episode> {
    return {
        "info": {
            "count": 51,
            "pages": 3,
            "next": "https://rickandmortyapi.com/api/episode?page=3",
            "prev": "https://rickandmortyapi.com/api/episode?page=1"
        },
        "results": [
            {
                "id": 21,
                "name": "The Wedding Squanchers",
                "air_date": "October 4, 2015",
                "episode": "S02E10",
                "characters": [
                    "https://rickandmortyapi.com/api/character/1",
                    "https://rickandmortyapi.com/api/character/2",
                    "https://rickandmortyapi.com/api/character/3",
                    "https://rickandmortyapi.com/api/character/4",
                    "https://rickandmortyapi.com/api/character/5",
                    "https://rickandmortyapi.com/api/character/23",
                    "https://rickandmortyapi.com/api/character/47",
                    "https://rickandmortyapi.com/api/character/55",
                    "https://rickandmortyapi.com/api/character/75",
                    "https://rickandmortyapi.com/api/character/102",
                    "https://rickandmortyapi.com/api/character/130",
                    "https://rickandmortyapi.com/api/character/131",
                    "https://rickandmortyapi.com/api/character/133",
                    "https://rickandmortyapi.com/api/character/194",
                    "https://rickandmortyapi.com/api/character/199",
                    "https://rickandmortyapi.com/api/character/203",
                    "https://rickandmortyapi.com/api/character/240",
                    "https://rickandmortyapi.com/api/character/244",
                    "https://rickandmortyapi.com/api/character/256",
                    "https://rickandmortyapi.com/api/character/261",
                    "https://rickandmortyapi.com/api/character/308",
                    "https://rickandmortyapi.com/api/character/309",
                    "https://rickandmortyapi.com/api/character/311",
                    "https://rickandmortyapi.com/api/character/331",
                    "https://rickandmortyapi.com/api/character/344",
                    "https://rickandmortyapi.com/api/character/358",
                    "https://rickandmortyapi.com/api/character/362",
                    "https://rickandmortyapi.com/api/character/379",
                    "https://rickandmortyapi.com/api/character/454"
                ],
                "url": "https://rickandmortyapi.com/api/episode/21",
                "created": "2017-11-10T12:56:35.875Z"
            },
            {
                "id": 22,
                "name": "The Rickshank Rickdemption",
                "air_date": "April 1, 2017",
                "episode": "S03E01",
                "characters": [
                    "https://rickandmortyapi.com/api/character/1",
                    "https://rickandmortyapi.com/api/character/2",
                    "https://rickandmortyapi.com/api/character/3",
                    "https://rickandmortyapi.com/api/character/4",
                    "https://rickandmortyapi.com/api/character/5",
                    "https://rickandmortyapi.com/api/character/21",
                    "https://rickandmortyapi.com/api/character/22",
                    "https://rickandmortyapi.com/api/character/38",
                    "https://rickandmortyapi.com/api/character/42",
                    "https://rickandmortyapi.com/api/character/47",
                    "https://rickandmortyapi.com/api/character/48",
                    "https://rickandmortyapi.com/api/character/57",
                    "https://rickandmortyapi.com/api/character/69",
                    "https://rickandmortyapi.com/api/character/71",
                    "https://rickandmortyapi.com/api/character/86",
                    "https://rickandmortyapi.com/api/character/94",
                    "https://rickandmortyapi.com/api/character/95",
                    "https://rickandmortyapi.com/api/character/103",
                    "https://rickandmortyapi.com/api/character/150",
                    "https://rickandmortyapi.com/api/character/152",
                    "https://rickandmortyapi.com/api/character/175",
                    "https://rickandmortyapi.com/api/character/200",
                    "https://rickandmortyapi.com/api/character/215",
                    "https://rickandmortyapi.com/api/character/231",
                    "https://rickandmortyapi.com/api/character/240",
                    "https://rickandmortyapi.com/api/character/274",
                    "https://rickandmortyapi.com/api/character/285",
                    "https://rickandmortyapi.com/api/character/286",
                    "https://rickandmortyapi.com/api/character/294",
                    "https://rickandmortyapi.com/api/character/295",
                    "https://rickandmortyapi.com/api/character/330",
                    "https://rickandmortyapi.com/api/character/338",
                    "https://rickandmortyapi.com/api/character/344",
                    "https://rickandmortyapi.com/api/character/378",
                    "https://rickandmortyapi.com/api/character/380",
                    "https://rickandmortyapi.com/api/character/385",
                    "https://rickandmortyapi.com/api/character/389",
                    "https://rickandmortyapi.com/api/character/461",
                    "https://rickandmortyapi.com/api/character/462",
                    "https://rickandmortyapi.com/api/character/463",
                    "https://rickandmortyapi.com/api/character/464",
                    "https://rickandmortyapi.com/api/character/465",
                    "https://rickandmortyapi.com/api/character/466",
                    "https://rickandmortyapi.com/api/character/592"
                ],
                "url": "https://rickandmortyapi.com/api/episode/22",
                "created": "2017-11-10T12:56:35.983Z"
            },
            {
                "id": 23,
                "name": "Rickmancing the Stone",
                "air_date": "July 30, 2017",
                "episode": "S03E02",
                "characters": [
                    "https://rickandmortyapi.com/api/character/1",
                    "https://rickandmortyapi.com/api/character/2",
                    "https://rickandmortyapi.com/api/character/3",
                    "https://rickandmortyapi.com/api/character/4",
                    "https://rickandmortyapi.com/api/character/5",
                    "https://rickandmortyapi.com/api/character/25",
                    "https://rickandmortyapi.com/api/character/52",
                    "https://rickandmortyapi.com/api/character/68",
                    "https://rickandmortyapi.com/api/character/110",
                    "https://rickandmortyapi.com/api/character/111",
                    "https://rickandmortyapi.com/api/character/140",
                    "https://rickandmortyapi.com/api/character/156",
                    "https://rickandmortyapi.com/api/character/217",
                    "https://rickandmortyapi.com/api/character/218",
                    "https://rickandmortyapi.com/api/character/219",
                    "https://rickandmortyapi.com/api/character/228",
                    "https://rickandmortyapi.com/api/character/323",
                    "https://rickandmortyapi.com/api/character/342"
                ],
                "url": "https://rickandmortyapi.com/api/episode/23",
                "created": "2017-11-10T12:56:36.100Z"
            }
        ]
    }
}
