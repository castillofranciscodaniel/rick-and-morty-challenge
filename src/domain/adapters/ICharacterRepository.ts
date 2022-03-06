import {Character} from "../models/character";

export interface ICharacterRepository {
    findAll(page?: number): Character[];
}

export const ICharacterRepository = Symbol("ICharacterRepository");
