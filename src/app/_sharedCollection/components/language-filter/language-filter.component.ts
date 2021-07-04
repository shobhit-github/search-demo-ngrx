import {Component, OnInit} from '@angular/core';
import * as fromUtilityReducer from '../../../_ngRxStore/reducers/utility.reducer';
import * as fromMentorAction from '../../../_ngRxStore/actions/mentor.action';
import {ApplicationState} from '../../../_ngRxStore/reducers';
import {Store} from '@ngrx/store';
import * as _ from 'lodash';

@Component({
    selector: 'app-language-filter',
    templateUrl: './language-filter.component.html',
    styleUrls: ['./language-filter.component.scss']
})
export class LanguageFilterComponent implements OnInit {

    public languageList: string[] = [];
    private selectedLang: string[] = [];

    constructor(private store: Store<ApplicationState>) {
    }

    ngOnInit(): void {

        this.getLanguageList();
    }


    private getLanguageList(): void {

        this.store.select(fromUtilityReducer.getListOfLanguages).subscribe(
            (next: string[]) => this.languageList = (next)
        );
    }

    private queryByLanguage(language: string[]): void {

        this.store.dispatch( new fromMentorAction.SearchParam({language}));
    }

    public onCheckBoxSelect($evt): void {


        this.selectedLang.push(  $evt.value );

        if (! $evt.checked ) {
            this.selectedLang = _.pull( this.selectedLang, $evt.value);
        }

        this.queryByLanguage( _.cloneDeep(this.selectedLang));
    }


}
