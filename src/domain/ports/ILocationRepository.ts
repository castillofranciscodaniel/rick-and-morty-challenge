import {Location} from "../models/location";

export interface ILocationRepository {
    findAll(): Location[];
}

export const ILocationRepository = Symbol("ILocationRepository");
