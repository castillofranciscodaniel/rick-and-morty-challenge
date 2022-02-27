import { Module } from '@nestjs/common';
import {HttpModule} from "@nestjs/axios";

@Module({
    imports: [
        HttpModule.registerAsync({
            useFactory: () => ({
                timeout: 50000,
                maxRedirects: 5,
                maxContentLength: Infinity,
            }),
        }),
    ]
})
export class ClientsModule {}
