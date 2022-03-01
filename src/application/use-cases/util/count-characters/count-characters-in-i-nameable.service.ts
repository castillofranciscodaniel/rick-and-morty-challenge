import {Injectable} from '@nestjs/common';
import {INameable} from "../../../../domain/models/INameable";

@Injectable()
export class CountCharactersInINameableService {

    countResultProcess(letter: string, contTheLetters: INameable[]): number {
        let cont = 0;
        contTheLetters.map(character => {
            for (let i = 0; i < character.name.length; i++) {
                if (character.name.toLowerCase().charAt(i) === letter) {
                    cont++
                }
            }
        })

        return cont;
    }

}
