import {Injectable} from '@nestjs/common';
import {LocationRepository} from "../../../../dist/domain/adapters/locationRepository";
import {DataInMemoryService} from "../../data-in-memory/data-in-memory.service";

@Injectable()
export class LocationRepositoryService implements LocationRepository {

    constructor(private readonly data: DataInMemoryService) {
    }

    findAll(page?: number): any {
        return this.data.characters;
    }

}
