import {Module} from '@nestjs/common';
import {HttpModule} from "@nestjs/axios";
import {CharacterClientService} from './character-client.service';
import {LocationClientService} from './location-client.service';
import {EpisodeClientService} from './episode-client.service';

@Module({
    imports: [
        HttpModule.registerAsync({
            useFactory: () => ({
                timeout: 50000,
                maxRedirects: 5,
                maxContentLength: Infinity,
            }),
        }),
    ],
    providers: [CharacterClientService, LocationClientService, EpisodeClientService],
    exports: [CharacterClientService, LocationClientService, EpisodeClientService]
})
export class ClientsModule {
}
