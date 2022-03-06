import {Episode} from "../models/episode";

export interface IEpisodeRepository {
    findAll(page?: number): Episode[];
}

export const IEpisodeRepository = Symbol("IEpisodeRepository");

