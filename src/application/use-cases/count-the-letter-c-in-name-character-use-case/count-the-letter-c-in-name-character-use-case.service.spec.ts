import {Test, TestingModule} from '@nestjs/testing';
import {CountTheLetterCInNameCharacterUseCaseService} from './count-the-letter-c-in-name-character-use-case.service';
import {ClientsModule} from "../../../infraestructure/clients/clients.module";
import {CharacterClientService} from "../../../infraestructure/clients/character-client.service";
import {Info, Pagination} from "../../../infraestructure/dto/pagination";
import {Character} from "../../../domain/models/character";
import {CountResult} from "../../dto/count-result";

describe('CountTheLetterCInNameCharacterUseCaseService', () => {
    let service: CountTheLetterCInNameCharacterUseCaseService;
    let characterClientService: CharacterClientService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CountTheLetterCInNameCharacterUseCaseService],
            imports: [ClientsModule],
        }).compile();


        characterClientService = module.get<CharacterClientService>(CharacterClientService);

        service = module.get<CountTheLetterCInNameCharacterUseCaseService>(CountTheLetterCInNameCharacterUseCaseService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should be return an CountResult', async () => {
        jest.spyOn(characterClientService, 'findAll').mockImplementation((page: number) => {
            if (page === 1) {
                return Promise.resolve(newCharacterPage1())
            }
            return Promise.resolve(newCharacterPage2())
        });

        const countResult: CountResult = {
            count: 24,
            char: 'c',
            resource: 'character',
        }

        expect(await service.handler()).toStrictEqual(countResult);
    });
});

function newCharacterPage2(): Pagination<Character> {
    return {
        "info": {
            "count": 826,
            "pages": 2,
            "next": "https://rickandmortyapi.com/api/character?page=2",
            "prev": null
        },
        "results": [
            {
                "id": 1,
                "name": "Rick Sanchez",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (C-137)",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                "episode": [],
                "url": "https://rickandmortyapi.com/api/character/1",
                "created": "2017-11-04T18:48:46.250Z"
            },
            {
                "id": 2,
                "name": "Morty Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                "episode": [],
                "url": "https://rickandmortyapi.com/api/character/2",
                "created": "2017-11-04T18:50:21.651Z"
            },
            {
                "id": 3,
                "name": "Summer Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Female",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                "episode": [],
                "url": "https://rickandmortyapi.com/api/character/3",
                "created": "2017-11-04T19:09:56.428Z"
            },
            {
                "id": 4,
                "name": "Beth Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Female",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                "episode": [],
                "url": "https://rickandmortyapi.com/api/character/4",
                "created": "2017-11-04T19:22:43.665Z"
            },
            {
                "id": 5,
                "name": "Jerry Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                "episode": [],
                "url": "https://rickandmortyapi.com/api/character/5",
                "created": "2017-11-04T19:26:56.301Z"
            },
            {
                "id": 6,
                "name": "Abadango Cluster Princess",
                "status": "Alive",
                "species": "Alien",
                "type": "",
                "gender": "Female",
                "origin": {
                    "name": "Abadango",
                    "url": "https://rickandmortyapi.com/api/location/2"
                },
                "location": {
                    "name": "Abadango",
                    "url": "https://rickandmortyapi.com/api/location/2"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/27"
                ],
                "url": "https://rickandmortyapi.com/api/character/6",
                "created": "2017-11-04T19:50:28.250Z"
            },
            {
                "id": 7,
                "name": "Abradolf Lincler",
                "status": "unknown",
                "species": "Human",
                "type": "Genetic experiment",
                "gender": "Male",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Testicle Monster Dimension",
                    "url": "https://rickandmortyapi.com/api/location/21"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10",
                    "https://rickandmortyapi.com/api/episode/11"
                ],
                "url": "https://rickandmortyapi.com/api/character/7",
                "created": "2017-11-04T19:59:20.523Z"
            },
            {
                "id": 8,
                "name": "Adjudicator Rick",
                "status": "Dead",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/28"
                ],
                "url": "https://rickandmortyapi.com/api/character/8",
                "created": "2017-11-04T20:03:34.737Z"
            },
            {
                "id": 9,
                "name": "Agency Director",
                "status": "Dead",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/24"
                ],
                "url": "https://rickandmortyapi.com/api/character/9",
                "created": "2017-11-04T20:06:54.976Z"
            },
            {
                "id": 10,
                "name": "Alan Rails",
                "status": "Dead",
                "species": "Human",
                "type": "Superhuman (Ghost trains summoner)",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Worldender's lair",
                    "url": "https://rickandmortyapi.com/api/location/4"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/25"
                ],
                "url": "https://rickandmortyapi.com/api/character/10",
                "created": "2017-11-04T20:19:09.017Z"
            },
            {
                "id": 11,
                "name": "Albert Einstein",
                "status": "Dead",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (C-137)",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/12"
                ],
                "url": "https://rickandmortyapi.com/api/character/11",
                "created": "2017-11-04T20:20:20.965Z"
            },
            {
                "id": 12,
                "name": "Alexander",
                "status": "Dead",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (C-137)",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Anatomy Park",
                    "url": "https://rickandmortyapi.com/api/location/5"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/3"
                ],
                "url": "https://rickandmortyapi.com/api/character/12",
                "created": "2017-11-04T20:32:33.144Z"
            },
            {
                "id": 13,
                "name": "Alien Googah",
                "status": "unknown",
                "species": "Alien",
                "type": "",
                "gender": "unknown",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/31"
                ],
                "url": "https://rickandmortyapi.com/api/character/13",
                "created": "2017-11-04T20:33:30.779Z"
            },
            {
                "id": 14,
                "name": "Alien Morty",
                "status": "unknown",
                "species": "Alien",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10"
                ],
                "url": "https://rickandmortyapi.com/api/character/14",
                "created": "2017-11-04T20:51:31.373Z"
            },
            {
                "id": 15,
                "name": "Alien Rick",
                "status": "unknown",
                "species": "Alien",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10"
                ],
                "url": "https://rickandmortyapi.com/api/character/15",
                "created": "2017-11-04T20:56:13.215Z"
            },
            {
                "id": 16,
                "name": "Amish Cyborg",
                "status": "Dead",
                "species": "Alien",
                "type": "Parasite",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/15"
                ],
                "url": "https://rickandmortyapi.com/api/character/16",
                "created": "2017-11-04T21:12:45.235Z"
            },
            {
                "id": 17,
                "name": "Annie",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Female",
                "origin": {
                    "name": "Earth (C-137)",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Anatomy Park",
                    "url": "https://rickandmortyapi.com/api/location/5"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/3"
                ],
                "url": "https://rickandmortyapi.com/api/character/17",
                "created": "2017-11-04T22:21:24.481Z"
            },
            {
                "id": 18,
                "name": "Antenna Morty",
                "status": "Alive",
                "species": "Human",
                "type": "Human with antennae",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
                "episode": [],
                "url": "https://rickandmortyapi.com/api/character/18",
                "created": "2017-11-04T22:25:29.008Z"
            },
            {
                "id": 19,
                "name": "Antenna Rick",
                "status": "unknown",
                "species": "Human",
                "type": "Human with antennae",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "unknown",
                    "url": ""
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10"
                ],
                "url": "https://rickandmortyapi.com/api/character/19",
                "created": "2017-11-04T22:28:13.756Z"
            },
            {
                "id": 20,
                "name": "Ants in my Eyes Johnson",
                "status": "unknown",
                "species": "Human",
                "type": "Human with ants in his eyes",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Interdimensional Cable",
                    "url": "https://rickandmortyapi.com/api/location/6"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/8"
                ],
                "url": "https://rickandmortyapi.com/api/character/20",
                "created": "2017-11-04T22:34:53.659Z"
            }
        ]
    }
}

function newCharacterPage1(): Pagination<Character> {
    return {
        "info": {
            "count": 826,
            "pages": 2,
            "next": "https://rickandmortyapi.com/api/character?page=2",
            "prev": null
        },
        "results": [
            {
                "id": 1,
                "name": "Rick Sanchez",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (C-137)",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                "episode": [],
                "url": "https://rickandmortyapi.com/api/character/1",
                "created": "2017-11-04T18:48:46.250Z"
            },
            {
                "id": 2,
                "name": "Morty Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                "episode": [],
                "url": "https://rickandmortyapi.com/api/character/2",
                "created": "2017-11-04T18:50:21.651Z"
            },
            {
                "id": 3,
                "name": "Summer Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Female",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                "episode": [],
                "url": "https://rickandmortyapi.com/api/character/3",
                "created": "2017-11-04T19:09:56.428Z"
            },
            {
                "id": 4,
                "name": "Beth Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Female",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                "episode": [],
                "url": "https://rickandmortyapi.com/api/character/4",
                "created": "2017-11-04T19:22:43.665Z"
            },
            {
                "id": 5,
                "name": "Jerry Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                "episode": [],
                "url": "https://rickandmortyapi.com/api/character/5",
                "created": "2017-11-04T19:26:56.301Z"
            },
            {
                "id": 6,
                "name": "Abadango Cluster Princess",
                "status": "Alive",
                "species": "Alien",
                "type": "",
                "gender": "Female",
                "origin": {
                    "name": "Abadango",
                    "url": "https://rickandmortyapi.com/api/location/2"
                },
                "location": {
                    "name": "Abadango",
                    "url": "https://rickandmortyapi.com/api/location/2"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/27"
                ],
                "url": "https://rickandmortyapi.com/api/character/6",
                "created": "2017-11-04T19:50:28.250Z"
            },
            {
                "id": 7,
                "name": "Abradolf Lincler",
                "status": "unknown",
                "species": "Human",
                "type": "Genetic experiment",
                "gender": "Male",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Testicle Monster Dimension",
                    "url": "https://rickandmortyapi.com/api/location/21"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10",
                    "https://rickandmortyapi.com/api/episode/11"
                ],
                "url": "https://rickandmortyapi.com/api/character/7",
                "created": "2017-11-04T19:59:20.523Z"
            },
            {
                "id": 8,
                "name": "Adjudicator Rick",
                "status": "Dead",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/28"
                ],
                "url": "https://rickandmortyapi.com/api/character/8",
                "created": "2017-11-04T20:03:34.737Z"
            },
            {
                "id": 9,
                "name": "Agency Director",
                "status": "Dead",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/24"
                ],
                "url": "https://rickandmortyapi.com/api/character/9",
                "created": "2017-11-04T20:06:54.976Z"
            },
            {
                "id": 10,
                "name": "Alan Rails",
                "status": "Dead",
                "species": "Human",
                "type": "Superhuman (Ghost trains summoner)",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Worldender's lair",
                    "url": "https://rickandmortyapi.com/api/location/4"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/25"
                ],
                "url": "https://rickandmortyapi.com/api/character/10",
                "created": "2017-11-04T20:19:09.017Z"
            },
            {
                "id": 11,
                "name": "Albert Einstein",
                "status": "Dead",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (C-137)",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/12"
                ],
                "url": "https://rickandmortyapi.com/api/character/11",
                "created": "2017-11-04T20:20:20.965Z"
            },
            {
                "id": 12,
                "name": "Alexander",
                "status": "Dead",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (C-137)",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Anatomy Park",
                    "url": "https://rickandmortyapi.com/api/location/5"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/3"
                ],
                "url": "https://rickandmortyapi.com/api/character/12",
                "created": "2017-11-04T20:32:33.144Z"
            },
            {
                "id": 13,
                "name": "Alien Googah",
                "status": "unknown",
                "species": "Alien",
                "type": "",
                "gender": "unknown",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/31"
                ],
                "url": "https://rickandmortyapi.com/api/character/13",
                "created": "2017-11-04T20:33:30.779Z"
            },
            {
                "id": 14,
                "name": "Alien Morty",
                "status": "unknown",
                "species": "Alien",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10"
                ],
                "url": "https://rickandmortyapi.com/api/character/14",
                "created": "2017-11-04T20:51:31.373Z"
            },
            {
                "id": 15,
                "name": "Alien Rick",
                "status": "unknown",
                "species": "Alien",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10"
                ],
                "url": "https://rickandmortyapi.com/api/character/15",
                "created": "2017-11-04T20:56:13.215Z"
            },
            {
                "id": 16,
                "name": "Amish Cyborg",
                "status": "Dead",
                "species": "Alien",
                "type": "Parasite",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/15"
                ],
                "url": "https://rickandmortyapi.com/api/character/16",
                "created": "2017-11-04T21:12:45.235Z"
            },
            {
                "id": 17,
                "name": "Annie",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Female",
                "origin": {
                    "name": "Earth (C-137)",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Anatomy Park",
                    "url": "https://rickandmortyapi.com/api/location/5"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/3"
                ],
                "url": "https://rickandmortyapi.com/api/character/17",
                "created": "2017-11-04T22:21:24.481Z"
            },
            {
                "id": 18,
                "name": "Antenna Morty",
                "status": "Alive",
                "species": "Human",
                "type": "Human with antennae",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10",
                    "https://rickandmortyapi.com/api/episode/28"
                ],
                "url": "https://rickandmortyapi.com/api/character/18",
                "created": "2017-11-04T22:25:29.008Z"
            },
            {
                "id": 19,
                "name": "Antenna Rick",
                "status": "unknown",
                "species": "Human",
                "type": "Human with antennae",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "unknown",
                    "url": ""
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10"
                ],
                "url": "https://rickandmortyapi.com/api/character/19",
                "created": "2017-11-04T22:28:13.756Z"
            },
            {
                "id": 20,
                "name": "Ants in my Eyes Johnson",
                "status": "unknown",
                "species": "Human",
                "type": "Human with ants in his eyes",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Interdimensional Cable",
                    "url": "https://rickandmortyapi.com/api/location/6"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/8"
                ],
                "url": "https://rickandmortyapi.com/api/character/20",
                "created": "2017-11-04T22:34:53.659Z"
            }
        ]
    }
}
