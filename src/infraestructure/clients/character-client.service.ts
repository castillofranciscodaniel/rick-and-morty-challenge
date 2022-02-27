import { Injectable } from '@nestjs/common';
import {CustomHttpService} from "./custom.http.service";
import {Character} from "../../domain/models/character";

@Injectable()
export class CharacterClientService extends CustomHttpService<Character>{

}
