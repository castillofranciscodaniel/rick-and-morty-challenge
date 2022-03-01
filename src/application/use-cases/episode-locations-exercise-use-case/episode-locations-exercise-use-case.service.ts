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
import {identity} from "rxjs";

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


        const data = await Promise.all([this.findAllCharacters(), this.findAllEpisodes()])
        const [characters, episodes] = data

        const episodeLocations: EpisodeLocationResult[] = episodes.map(episodes => {
                const episodeLocation: EpisodeLocationResult = {
                    name: episodes.name,
                    episode: episodes.episode,
                    locations: new Set<string>()
                };

                const ids = episodes.characters.map(linkCharacters => {
                    const subsOfLink = linkCharacters.split('/');
                    return +(subsOfLink[subsOfLink.length - 1]);
                });

                characters.filter(character => ids
                    .includes(character.id))
                    .forEach(filterCharacters => ((episodeLocation.locations) as Set<string>).add(filterCharacters.location.name));
                episodeLocation.locations = [...episodeLocation.locations]

                return episodeLocation;
            }
        )


        const endTime = new Date().getTime();
        const totalTimeMilliseconds = (endTime - startTime)
        const seconds = Math.trunc(totalTimeMilliseconds / 1000)
        const rest = totalTimeMilliseconds % 1000

        const exerciseResult: ExerciseResult<EpisodeLocationResult> = {
            exercise_name: this.exercise_name,
            time: `${seconds}s ${rest}ms`,
            in_time: totalTimeMilliseconds <= this.maxTimeToExecuteInMilliseconds,
            results: episodeLocations
        }

        return exerciseResult

    }


    private async findAllCharacters(): Promise<Character[]> {

        let characters: Character[] = []
        const requests: Promise<Pagination<Character>>[] = [];
        const firstPage = await this.characterClientService.findAll(1)
        characters = characters.concat(firstPage.results)

        for (let i = 2; i <= firstPage.info.pages; i++) {
            requests.push(this.characterClientService.findAll(i))
        }

        await Promise.all(requests).then(thenResults => {
            thenResults.map(pag => {
                characters = characters.concat(pag.results)
            })
        })

        return characters
    }

    private async findAllEpisodes(): Promise<Episode[]> {

        let episodes: Episode[] = []
        const requests: Promise<Pagination<Episode>>[] = [];
        const firstPage = await this.episodeClientService.findAll(1)
        episodes = episodes.concat(firstPage.results)

        for (let i = 2; i <= firstPage.info.pages; i++) {
            requests.push(this.episodeClientService.findAll(i))
        }

        await Promise.all(requests).then(thenResults => {
            thenResults.map(pag => {
                episodes = episodes.concat(pag.results)
            })
        })

        return episodes
    }
}

