import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

export * from './plugin';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: []
})
export class ConcretePluginModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ConcretePluginModule,
            providers: []
        };
    }
}
