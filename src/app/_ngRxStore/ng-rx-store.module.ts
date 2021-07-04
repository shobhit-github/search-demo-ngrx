import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {applicationStates} from './reducers';


import * as fromEffects from './effects';
import {MentorService} from './services/mentor.service';
import {UtilityService} from './services/utility.service';


const allEffects = [fromEffects.MentorEffect, fromEffects.UtilityEffect];


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        EffectsModule.forRoot(allEffects),
        StoreModule.forRoot(applicationStates),
        StoreDevtoolsModule.instrument({
            maxAge: 100, // Retains last 25 states
            name: 'Sample Test',
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        HttpClientModule
    ],
    providers: [
        MentorService,
        UtilityService
    ]
})
export class NgRxStoreModule {
}
