import {Injectable} from '@nestjs/common';
import {Character} from "../../domain/models/character";
import {Location} from "../../domain/models/location";
import {Episode} from "../../domain/models/episode";
import {Pagination} from "../dto/pagination";
import {LOGGER, LoggerCustomService} from "../logger-custom.service";
import {CharacterClientService} from "../clients/character-client/character-client.service";
import {EpisodeClientService} from "../clients/episode-client/episode-client.service";
import {LocationClientService} from "../clients/location-client/location-client.service";

const nameMethod = 'load'

@Injectable()
export class DataInMemoryService {

    private _characters: Character[];
    private _locations: Location[];
    private _episodes: Episode[];

    private readonly logger: LoggerCustomService = new LoggerCustomService(DataInMemoryService.name);

    constructor(
        private readonly characterClientService: CharacterClientService,
        private readonly episodeClientService: EpisodeClientService,
        private readonly locationClientService: LocationClientService
    ) {
    }

    set characters(value: Character[]) {
        throw new Error('can not not set characters');
    }

    set locations(value: Location[]) {
        throw new Error('can not not set locations');
    }

    set episodes(value: Episode[]) {
        throw new Error('can not not set episodes');
    }

    get characters(): Character[] {
        return this._characters;
    }

    get locations(): Location[] {
        return this._locations;
    }

    get episodes(): Episode[] {
        return this._episodes;
    }

    async load(): Promise<void> {
        this.logger.info(nameMethod, 'loading...', LOGGER.INIT);

        try {
            const result = await Promise.all([this.findAllCharacters(), this.findAllEpisodes(), this.findAllLocation()]);
            this._characters = result[0];
            this._episodes = result[1];
            this._locations = result[2];
        } catch (e) {
            this.logger.error(nameMethod, e.message, LOGGER.ERROR);
            throw e;
        }

        this.logger.info(nameMethod, 'loaded', LOGGER.END);
    }

    private async findAllCharacters(): Promise<Character[]> {

        let characters: Character[] = [];
        const requests: Promise<Pagination<Character>>[] = [];
        const firstPage = await this.characterClientService.findAll(1);
        characters = characters.concat(firstPage.results);

        for (let i = 2; i <= firstPage.info.pages; i++) {
            requests.push(this.characterClientService.findAll(i));
        }

        const thenResults = await Promise.all(requests)
        thenResults.forEach(pag => {
            characters = characters.concat(pag.results);
        })

        return characters
    }

    private async findAllEpisodes(): Promise<Episode[]> {

        let episodes: Episode[] = [];
        const requests: Promise<Pagination<Episode>>[] = [];
        const firstPage = await this.episodeClientService.findAll(1);
        episodes = episodes.concat(firstPage.results);

        for (let i = 2; i <= firstPage.info.pages; i++) {
            requests.push(this.episodeClientService.findAll(i));
        }

        const thenResults = await Promise.all(requests)
        thenResults.forEach(pag => {
            episodes = episodes.concat(pag.results);
        })

        return episodes;
    }

    private async findAllLocation(): Promise<Location[]> {

        let locations: Location[] = [];
        const requests: Promise<Pagination<Location>>[] = [];
        const firstPage = await this.locationClientService.findAll(1);
        locations = locations.concat(firstPage.results);

        for (let i = 2; i <= firstPage.info.pages; i++) {
            requests.push(this.locationClientService.findAll(i));
        }

        const thenResults = await Promise.all(requests)
        thenResults.forEach(pag => {
            locations = locations.concat(pag.results);
        })

        return locations;
    }
}
