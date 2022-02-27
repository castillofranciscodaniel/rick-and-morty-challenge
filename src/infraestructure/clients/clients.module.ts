import {Module} from '@nestjs/common';
import {HttpModule} from "@nestjs/axios";
import {CharacterClientService} from './character-client.service';
import {LocationClientService} from './location-client.service';
import {EpisodeClientService} from './episode-client.service';
import {CustomHttpService} from "./custom.http.service";

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
    providers: [CustomHttpService, CharacterClientService, LocationClientService, EpisodeClientService]
})
export class ClientsModule {
}
