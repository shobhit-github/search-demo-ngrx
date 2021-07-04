import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MentorComponent} from './mentor/mentor.component';

import {NgRxStoreModule} from './_ngRxStore/ng-rx-store.module';
import {SearchComponent} from './_sharedCollection/components/search/search.component';
import {TimeFilterComponent} from './_sharedCollection/components/time-filter/time-filter.component';
import {DayFilterComponent} from './_sharedCollection/components/day-filter/day-filter.component';
import {LanguageFilterComponent} from './_sharedCollection/components/language-filter/language-filter.component';
import {PriceFilterComponent} from './_sharedCollection/components/price-filter/price-filter.component';
import {CompanyFilterComponent} from './_sharedCollection/components/company-filter/company-filter.component';
import {SearchBarComponent} from './_sharedCollection/components/search-bar/search-bar.component';
import { NgxStarsModule } from 'ngx-stars';
import { FilterPipeModule } from 'ngx-filter-pipe';



@NgModule({
    declarations: [
        AppComponent,
        MentorComponent,
        SearchComponent,
        TimeFilterComponent,
        DayFilterComponent,
        LanguageFilterComponent,
        PriceFilterComponent,
        CompanyFilterComponent,
        SearchBarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxStarsModule,
        NgRxStoreModule,
        FilterPipeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
