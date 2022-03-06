import {Injectable} from '@nestjs/common';
import {DataInMemoryService} from "../../services/data-in-memory/data-in-memory.service";
import {ICharacterRepository} from "../../../domain/ports/ICharacterRepository";

@Injectable()
export class CharacterRepositoryService implements ICharacterRepository {

    constructor(private readonly data: DataInMemoryService) {
    }

    findAll(page?: number): any {
        return this.data.characters;
    }

}
