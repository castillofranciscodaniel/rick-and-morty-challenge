import {Injectable} from '@nestjs/common';
import {CustomHttpService} from "./custom.http.service";
import {Episode} from "../../domain/models/episode";

@Injectable()
export class EpisodeClientService extends CustomHttpService<Episode>{}
