import {Pagination} from "./infraestructure/dto/pagination";
import {Character} from "./domain/models/character";
import {Episode} from "./domain/models/episode";
import {Location} from "./domain/models/location";
import {EpisodeLocationResult, ExerciseResult} from "./application/dto/count-result";
import {INameable} from "./domain/models/INameable";

export function newCharacterPage1(): Pagination<Character> {
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
            }
        ]
    }
}

export function newCharacterPage2(): Pagination<Character | INameable> {
    return {
        "info": {
            "count": 826,
            "pages": 2,
            "next": "https://rickandmortyapi.com/api/character?page=2",
            "prev": null
        },
        "results": [
            {
                "id": 21,
                "name": "Aqua Morty",
                "status": "unknown",
                "species": "Humanoid",
                "type": "Fish-Person",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10",
                    "https://rickandmortyapi.com/api/episode/22"
                ],
                "url": "https://rickandmortyapi.com/api/character/21",
                "created": "2017-11-04T22:39:48.055Z"
            },
            {
                "id": 22,
                "name": "Aqua Rick",
                "status": "unknown",
                "species": "Humanoid",
                "type": "Fish-Person",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Citadel of Ricks",
                    "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/10",
                    "https://rickandmortyapi.com/api/episode/22",
                    "https://rickandmortyapi.com/api/episode/28"
                ],
                "url": "https://rickandmortyapi.com/api/character/22",
                "created": "2017-11-04T22:41:07.171Z"
            },
            {
                "id": 23,
                "name": "Arcade Alien",
                "status": "unknown",
                "species": "Alien",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "unknown",
                    "url": ""
                },
                "location": {
                    "name": "Immortality Field Resort",
                    "url": "https://rickandmortyapi.com/api/location/7"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/13",
                    "https://rickandmortyapi.com/api/episode/19",
                    "https://rickandmortyapi.com/api/episode/21",
                    "https://rickandmortyapi.com/api/episode/25",
                    "https://rickandmortyapi.com/api/episode/26"
                ],
                "url": "https://rickandmortyapi.com/api/character/23",
                "created": "2017-11-05T08:43:05.095Z"
            }
        ]
    }
}


export function newEpisodePage1(): Pagination<Episode> {
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

export function newEpisodePage2(): Pagination<Episode> {
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


export function newLocationPage1(): Pagination<Location> {
    return {
        "info": {
            "count": 126,
            "pages": 2,
            "next": "https://rickandmortyapi.com/api/location?page=2",
            "prev": null
        },
        "results": [
            {
                "id": 1,
                "name": "Earth (C-137)",
                "type": "Planet",
                "dimension": "Dimension C-137",
                "residents": [
                    "https://rickandmortyapi.com/api/character/38",
                    "https://rickandmortyapi.com/api/character/45",
                    "https://rickandmortyapi.com/api/character/71",
                    "https://rickandmortyapi.com/api/character/82",
                    "https://rickandmortyapi.com/api/character/83",
                    "https://rickandmortyapi.com/api/character/92",
                    "https://rickandmortyapi.com/api/character/112",
                    "https://rickandmortyapi.com/api/character/114",
                    "https://rickandmortyapi.com/api/character/116",
                    "https://rickandmortyapi.com/api/character/117",
                    "https://rickandmortyapi.com/api/character/120",
                    "https://rickandmortyapi.com/api/character/127",
                    "https://rickandmortyapi.com/api/character/155",
                    "https://rickandmortyapi.com/api/character/169",
                    "https://rickandmortyapi.com/api/character/175",
                    "https://rickandmortyapi.com/api/character/179",
                    "https://rickandmortyapi.com/api/character/186",
                    "https://rickandmortyapi.com/api/character/201",
                    "https://rickandmortyapi.com/api/character/216",
                    "https://rickandmortyapi.com/api/character/239",
                    "https://rickandmortyapi.com/api/character/271",
                    "https://rickandmortyapi.com/api/character/302",
                    "https://rickandmortyapi.com/api/character/303",
                    "https://rickandmortyapi.com/api/character/338",
                    "https://rickandmortyapi.com/api/character/343",
                    "https://rickandmortyapi.com/api/character/356",
                    "https://rickandmortyapi.com/api/character/394"
                ],
                "url": "https://rickandmortyapi.com/api/location/1",
                "created": "2017-11-10T12:42:04.162Z"
            },
            {
                "id": 2,
                "name": "Abadango",
                "type": "Cluster",
                "dimension": "unknown",
                "residents": [
                    "https://rickandmortyapi.com/api/character/6"
                ],
                "url": "https://rickandmortyapi.com/api/location/2",
                "created": "2017-11-10T13:06:38.182Z"
            },
            {
                "id": 3,
                "name": "Citadel of Ricks",
                "type": "Space station",
                "dimension": "unknown",
                "residents": [
                    "https://rickandmortyapi.com/api/character/8",
                    "https://rickandmortyapi.com/api/character/14",
                    "https://rickandmortyapi.com/api/character/15",
                    "https://rickandmortyapi.com/api/character/18",
                    "https://rickandmortyapi.com/api/character/21",
                    "https://rickandmortyapi.com/api/character/22",
                    "https://rickandmortyapi.com/api/character/27",
                    "https://rickandmortyapi.com/api/character/42",
                    "https://rickandmortyapi.com/api/character/43",
                    "https://rickandmortyapi.com/api/character/44",
                    "https://rickandmortyapi.com/api/character/48",
                    "https://rickandmortyapi.com/api/character/53",
                    "https://rickandmortyapi.com/api/character/56",
                    "https://rickandmortyapi.com/api/character/61",
                    "https://rickandmortyapi.com/api/character/69",
                    "https://rickandmortyapi.com/api/character/72",
                    "https://rickandmortyapi.com/api/character/73",
                    "https://rickandmortyapi.com/api/character/74",
                    "https://rickandmortyapi.com/api/character/77",
                    "https://rickandmortyapi.com/api/character/78",
                    "https://rickandmortyapi.com/api/character/85",
                    "https://rickandmortyapi.com/api/character/86",
                    "https://rickandmortyapi.com/api/character/95",
                    "https://rickandmortyapi.com/api/character/118",
                    "https://rickandmortyapi.com/api/character/119",
                    "https://rickandmortyapi.com/api/character/123",
                    "https://rickandmortyapi.com/api/character/135",
                    "https://rickandmortyapi.com/api/character/143",
                    "https://rickandmortyapi.com/api/character/152",
                    "https://rickandmortyapi.com/api/character/164",
                    "https://rickandmortyapi.com/api/character/165",
                    "https://rickandmortyapi.com/api/character/187",
                    "https://rickandmortyapi.com/api/character/200",
                    "https://rickandmortyapi.com/api/character/206",
                    "https://rickandmortyapi.com/api/character/209",
                    "https://rickandmortyapi.com/api/character/220",
                    "https://rickandmortyapi.com/api/character/229",
                    "https://rickandmortyapi.com/api/character/231",
                    "https://rickandmortyapi.com/api/character/235",
                    "https://rickandmortyapi.com/api/character/267",
                    "https://rickandmortyapi.com/api/character/278",
                    "https://rickandmortyapi.com/api/character/281",
                    "https://rickandmortyapi.com/api/character/283",
                    "https://rickandmortyapi.com/api/character/284",
                    "https://rickandmortyapi.com/api/character/285",
                    "https://rickandmortyapi.com/api/character/286",
                    "https://rickandmortyapi.com/api/character/287",
                    "https://rickandmortyapi.com/api/character/288",
                    "https://rickandmortyapi.com/api/character/289",
                    "https://rickandmortyapi.com/api/character/291",
                    "https://rickandmortyapi.com/api/character/295",
                    "https://rickandmortyapi.com/api/character/298",
                    "https://rickandmortyapi.com/api/character/299",
                    "https://rickandmortyapi.com/api/character/322",
                    "https://rickandmortyapi.com/api/character/325",
                    "https://rickandmortyapi.com/api/character/328",
                    "https://rickandmortyapi.com/api/character/330",
                    "https://rickandmortyapi.com/api/character/345",
                    "https://rickandmortyapi.com/api/character/359",
                    "https://rickandmortyapi.com/api/character/366",
                    "https://rickandmortyapi.com/api/character/378",
                    "https://rickandmortyapi.com/api/character/385",
                    "https://rickandmortyapi.com/api/character/392",
                    "https://rickandmortyapi.com/api/character/461",
                    "https://rickandmortyapi.com/api/character/462",
                    "https://rickandmortyapi.com/api/character/463",
                    "https://rickandmortyapi.com/api/character/464",
                    "https://rickandmortyapi.com/api/character/465",
                    "https://rickandmortyapi.com/api/character/466",
                    "https://rickandmortyapi.com/api/character/472",
                    "https://rickandmortyapi.com/api/character/473",
                    "https://rickandmortyapi.com/api/character/474",
                    "https://rickandmortyapi.com/api/character/475",
                    "https://rickandmortyapi.com/api/character/476",
                    "https://rickandmortyapi.com/api/character/477",
                    "https://rickandmortyapi.com/api/character/478",
                    "https://rickandmortyapi.com/api/character/479",
                    "https://rickandmortyapi.com/api/character/480",
                    "https://rickandmortyapi.com/api/character/481",
                    "https://rickandmortyapi.com/api/character/482",
                    "https://rickandmortyapi.com/api/character/483",
                    "https://rickandmortyapi.com/api/character/484",
                    "https://rickandmortyapi.com/api/character/485",
                    "https://rickandmortyapi.com/api/character/486",
                    "https://rickandmortyapi.com/api/character/487",
                    "https://rickandmortyapi.com/api/character/488",
                    "https://rickandmortyapi.com/api/character/489",
                    "https://rickandmortyapi.com/api/character/2",
                    "https://rickandmortyapi.com/api/character/1",
                    "https://rickandmortyapi.com/api/character/801",
                    "https://rickandmortyapi.com/api/character/802",
                    "https://rickandmortyapi.com/api/character/803",
                    "https://rickandmortyapi.com/api/character/804",
                    "https://rickandmortyapi.com/api/character/805",
                    "https://rickandmortyapi.com/api/character/806",
                    "https://rickandmortyapi.com/api/character/810",
                    "https://rickandmortyapi.com/api/character/811",
                    "https://rickandmortyapi.com/api/character/812",
                    "https://rickandmortyapi.com/api/character/819",
                    "https://rickandmortyapi.com/api/character/820",
                    "https://rickandmortyapi.com/api/character/818"
                ],
                "url": "https://rickandmortyapi.com/api/location/3",
                "created": "2017-11-10T13:08:13.191Z"
            }
        ]
    }
}

export function newLocationPage2(): Pagination<Location> {
    return {
        "info": {
            "count": 126,
            "pages": 2,
            "next": "https://rickandmortyapi.com/api/location?page=3",
            "prev": "https://rickandmortyapi.com/api/location?page=1"
        },
        "results": [
            {
                "id": 21,
                "name": "Testicle Monster Dimension",
                "type": "Dimension",
                "dimension": "Testicle Monster Dimension",
                "residents": [
                    "https://rickandmortyapi.com/api/character/7",
                    "https://rickandmortyapi.com/api/character/436"
                ],
                "url": "https://rickandmortyapi.com/api/location/21",
                "created": "2017-11-18T19:41:01.605Z"
            },
            {
                "id": 22,
                "name": "Signus 5 Expanse",
                "type": "unknown",
                "dimension": "Cromulon Dimension",
                "residents": [
                    "https://rickandmortyapi.com/api/character/24",
                    "https://rickandmortyapi.com/api/character/309"
                ],
                "url": "https://rickandmortyapi.com/api/location/22",
                "created": "2017-11-18T20:27:26.218Z"
            },
            {
                "id": 23,
                "name": "Earth (C-500A)",
                "type": "Planet",
                "dimension": "Dimension C-500A",
                "residents": [
                    "https://rickandmortyapi.com/api/character/37",
                    "https://rickandmortyapi.com/api/character/91",
                    "https://rickandmortyapi.com/api/character/176",
                    "https://rickandmortyapi.com/api/character/183",
                    "https://rickandmortyapi.com/api/character/195"
                ],
                "url": "https://rickandmortyapi.com/api/location/23",
                "created": "2017-11-18T20:58:15.178Z"
            }
        ]
    }
}


export function matchResponse(): ExerciseResult<EpisodeLocationResult> {
    return {
        "exercise_name": "Episode locations",
        "in_time": true,
        "results": [
            {
                "name": "Pilot",
                "episode": "S01E01",
                "locations": [
                    "Citadel of Ricks"
                ]
            },
            {
                "name": "Lawnmower Dog",
                "episode": "S01E02",
                "locations": [
                    "Citadel of Ricks"
                ]
            },
            {
                "name": "Anatomy Park",
                "episode": "S01E03",
                "locations": [
                    "Citadel of Ricks"
                ]
            },
            {
                "name": "The Wedding Squanchers",
                "episode": "S02E10",
                "locations": [
                    "Citadel of Ricks",
                    "Earth (Replacement Dimension)",
                    "Immortality Field Resort"
                ]
            },
            {
                "name": "The Rickshank Rickdemption",
                "episode": "S03E01",
                "locations": [
                    "Citadel of Ricks",
                    "Earth (Replacement Dimension)"
                ]
            },
            {
                "name": "Rickmancing the Stone",
                "episode": "S03E02",
                "locations": [
                    "Citadel of Ricks",
                    "Earth (Replacement Dimension)"
                ]
            }
        ]
    }
}
