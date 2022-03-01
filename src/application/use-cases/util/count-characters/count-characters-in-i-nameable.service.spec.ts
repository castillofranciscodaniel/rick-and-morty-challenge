import {Test, TestingModule} from '@nestjs/testing';
import {CountCharactersInINameableService} from './count-characters-in-i-nameable.service';
import {newCharacterPage2} from "../../../../json-to-test";

describe('CountCharactersService', () => {
    let service: CountCharactersInINameableService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CountCharactersInINameableService],
        }).compile();

        service = module.get<CountCharactersInINameableService>(CountCharactersInINameableService);
    });

    it('should be return number 2', () => {
        expect(service.countResultProcess('c', newCharacterPage2().results)).toEqual(2);
        expect(service.countResultProcess('z', newCharacterPage2().results)).toEqual(0);
    });
});
