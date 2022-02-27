import { Injectable } from '@nestjs/common';
import {CustomHttpService} from "./custom.http.service";
import {Character} from "../../domain/models/character";
import {Location} from "../../domain/models/location";

@Injectable()
export class LocationClientService extends CustomHttpService<Location> {}
