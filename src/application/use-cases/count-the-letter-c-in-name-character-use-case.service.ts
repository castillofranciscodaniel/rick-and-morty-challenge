import { Injectable } from '@nestjs/common';
import {CustomHttpService} from "../../infraestructure/clients/custom.http.service";

@Injectable()
export class CountTheLetterCInNameCharacterUseCaseService extends CustomHttpService<any>{

}
