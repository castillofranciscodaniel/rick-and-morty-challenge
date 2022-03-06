import {Module} from '@nestjs/common';
import {CharacterClientService} from './character-client/character-client.service';
import {LocationClientService} from './location-client/location-client.service';
import {EpisodeClientService} from './episode-client/episode-client.service';
import {HttpModule} from "nestjs-http-promise";

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
    providers: [
        CharacterClientService,
        LocationClientService,
        EpisodeClientService
    ],
    exports: [CharacterClientService, LocationClientService, EpisodeClientService]
})
export class ClientsModule {
}
