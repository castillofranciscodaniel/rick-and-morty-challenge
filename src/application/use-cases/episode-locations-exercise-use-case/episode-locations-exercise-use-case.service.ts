import {Injectable} from '@nestjs/common';
import {
    CountTheLetterCInNameCharacterUseCaseService
} from "../count-the-letter-c-in-name-character-use-case/count-the-letter-c-in-name-character-use-case.service";
import {
    CountTheLetterLInNamesLocationUseCaseService
} from "../count-the-letter-l-in-names-location-use-case/count-the-letter-l-in-names-location-use-case.service";
import {
    CountTheLetterEInNamesEpisodeUseCaseService
} from "../count-the-letter-e-in-names-episode-use-case/count-the-letter-e-in-names-episode-use-case.service";
import {CountResult, EpisodeLocationResult, ExerciseResult} from "../../dto/count-result";
import {CharacterClientService} from "../../../infraestructure/clients/character-client.service";
import {LocationClientService} from "../../../infraestructure/clients/location-client.service";
import {EpisodeClientService} from "../../../infraestructure/clients/episode-client.service";
import {Character} from "../../../domain/models/character";
import {Pagination} from "../../../infraestructure/dto/pagination";
import {Location} from "../../../domain/models/location";
import {Episode} from "../../../domain/models/episode";

@Injectable()
export class EpisodeLocationsExerciseUseCaseService {

    private readonly exercise_name;
    private readonly maxTimeToExecuteInMilliseconds;

    constructor(
        private readonly characterClientService: CharacterClientService,
        private readonly locationClientService: LocationClientService,
        private readonly episodeClientService: EpisodeClientService
    ) {
        this.exercise_name = 'Episode locations';
        this.maxTimeToExecuteInMilliseconds = 3000
    }

    async handler(): Promise<ExerciseResult<EpisodeLocationResult>> {
        const startTime = new Date().getTime();


        const endTime = new Date().getTime();
        const totalTimeMilliseconds = (endTime - startTime)
        const seconds = Math.trunc(totalTimeMilliseconds / 1000)
        const rest = totalTimeMilliseconds % 1000

        return {
            exercise_name: this.exercise_name,
            time: `${seconds}s ${rest}ms`,
            in_time: totalTimeMilliseconds <= this.maxTimeToExecuteInMilliseconds,
            results: []
        } as ExerciseResult<EpisodeLocationResult>
    }

    private async findAllLocation(): Promise<Location[]> {

        const locations: Location[] = []
        const requests: Promise<Pagination<Location>>[] = [];
        const firstPage = await this.locationClientService.findAll(1)
        locations.concat(firstPage.results)

        for (let i = 2; i <= firstPage.info.pages; i++) {
            requests.push(this.locationClientService.findAll(i))
        }

        await Promise.all(requests).then(thenResults => {
            thenResults.map(pag => {
                locations.concat(pag.results)
            })
        })

        return locations
    }

    private async findAllCharacters(): Promise<Character[]> {

        const characters: Character[] = []
        const requests: Promise<Pagination<Character>>[] = [];
        const firstPage = await this.characterClientService.findAll(1)
        characters.concat(firstPage.results)

        for (let i = 2; i <= firstPage.info.pages; i++) {
            requests.push(this.characterClientService.findAll(i))
        }

        await Promise.all(requests).then(thenResults => {
            thenResults.map(pag => {
                characters.concat(pag.results)
            })
        })

        return characters
    }

    private async findAllEpisodes(): Promise<Episode[]> {

        const episodes: Episode[] = []
        const requests: Promise<Pagination<Episode>>[] = [];
        const firstPage = await this.episodeClientService.findAll(1)
        episodes.concat(firstPage.results)

        for (let i = 2; i <= firstPage.info.pages; i++) {
            requests.push(this.episodeClientService.findAll(i))
        }

        await Promise.all(requests).then(thenResults => {
            thenResults.map(pag => {
                episodes.concat(pag.results)
            })
        })

        return episodes
    }
}

