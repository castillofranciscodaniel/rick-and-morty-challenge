import {Injectable} from '@nestjs/common';
import {DataInMemoryService} from "../../services/data-in-memory/data-in-memory.service";
import {ILocationRepository} from "../../../domain/adapters/ILocationRepository";

@Injectable()
export class LocationRepositoryService implements ILocationRepository {

    constructor(private readonly data: DataInMemoryService) {
    }

    findAll(page?: number): any {
        return this.data.locations;
    }

}
