import {Episode} from "../models/episode";

export interface IEpisodeRepository {
    findAll(): Episode[];
}

export const IEpisodeRepository = Symbol("IEpisodeRepository");

