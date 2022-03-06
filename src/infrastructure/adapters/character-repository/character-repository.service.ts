import {Injectable} from '@nestjs/common';
import {DataInMemoryService} from "../../services/data-in-memory/data-in-memory.service";
import {CharacterRepository} from "../../../../dist/domain/adapters/characterRepository";

@Injectable()
export class CharacterRepositoryService implements CharacterRepository {

    constructor(private readonly data: DataInMemoryService) {
    }

    findAll(page?: number): any {
        return this.data.characters;
    }

}
