import {Module} from '@nestjs/common';
import {UseCasesModule} from './use-cases/use-cases.module';

@Module({
    imports: [UseCasesModule],
    exports: [UseCasesModule],
    providers: [],
})
export class ApplicationModule {
}
