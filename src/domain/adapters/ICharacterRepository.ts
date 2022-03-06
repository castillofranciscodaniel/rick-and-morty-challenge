import {Character} from "../models/character";

export interface ICharacterRepository {
    findAll(): Character[];
}

export const ICharacterRepository = Symbol("ICharacterRepository");
