import {Injectable} from '@nestjs/common';
import {EpisodeLocationResult, ExerciseResult} from "../../dto/count-result";
import {DataInMemoryService} from "../../../infrastructure/services/data-in-memory/data-in-memory.service";
import {LOGGER, LoggerCustomService} from "../../../infrastructure/services/logger-custom.service";

const nameMethod = 'handler'

@Injectable()
export class EpisodeLocationsExerciseUseCaseService {

    private readonly exercise_name;
    private readonly maxTimeToExecuteInMilliseconds;

    private readonly logger: LoggerCustomService = new LoggerCustomService(EpisodeLocationsExerciseUseCaseService.name);


    constructor(
        private dataInMemoryService: DataInMemoryService,
    ) {
        this.exercise_name = 'Episode locations';
        this.maxTimeToExecuteInMilliseconds = 3000
    }

    handler(startTime: Date): ExerciseResult<EpisodeLocationResult> {

        this.logger.info(nameMethod, ``, LOGGER.INIT)

        const episodeLocations: EpisodeLocationResult[] = this.dataInMemoryService.episodes.map(episodes => {
                const episodeLocation: EpisodeLocationResult = {
                    name: episodes.name,
                    episode: episodes.episode,
                    locations: new Set<string>()
                };

                const ids = episodes.characters.map(linkCharacters => {
                    const subsOfLink = linkCharacters.split('/');
                    return +(subsOfLink[subsOfLink.length - 1]);
                });

                this.dataInMemoryService.characters.filter(character => ids
                    .includes(character.id))
                    .forEach(filterCharacters => ((episodeLocation.locations) as Set<string>).add(filterCharacters.origin.name));

                episodeLocation.locations = [...episodeLocation.locations];

                return episodeLocation;
            }
        )

        const endTime = new Date().getTime();
        const totalTimeMilliseconds = (endTime - startTime.getTime());
        const seconds = Math.trunc(totalTimeMilliseconds / 1000);
        const rest = totalTimeMilliseconds % 1000;

        const exerciseResult: ExerciseResult<EpisodeLocationResult> = {
            exercise_name: this.exercise_name,
            time: `${seconds}s ${rest}ms`,
            in_time: totalTimeMilliseconds <= this.maxTimeToExecuteInMilliseconds,
            results: episodeLocations
        };

        this.logger.info(nameMethod, ``, LOGGER.END);
        return exerciseResult;

    }


}

