import {Location} from "../models/location";

export interface ILocationRepository {
    findAll(page?: number): Location[];
}

export const ILocationRepository = Symbol("ILocationRepository");
