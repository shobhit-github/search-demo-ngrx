import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../../_ngRxStore/reducers';
import * as fromUtilityReducer from '../../../_ngRxStore/reducers/utility.reducer';
import * as fromMentorAction from '../../../_ngRxStore/actions/mentor.action';

import * as _ from 'lodash';

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.scss']
})
export class CompanyFilterComponent implements OnInit {

    public companyList: string[] = [];
    private selectedComp: string[] = [];

    constructor(private store: Store<ApplicationState>) {
    }

    ngOnInit(): void {

        this.getCompanyList();
    }


    private getCompanyList(): void {

        this.store.select(fromUtilityReducer.getListOfCompanies).subscribe(
            (next: string[]) => this.companyList = (next)
        );
    }

    private queryByCompany(company: string[]): void {

        this.store.dispatch( new fromMentorAction.SearchParam({company}));
    }

    public onCheckBoxSelect($evt): void {


        this.selectedComp.push(  $evt.value );

        if (! $evt.checked ) {
            this.selectedComp = _.pull( this.selectedComp, $evt.value);
        }

        this.queryByCompany( _.cloneDeep(this.selectedComp));
    }
}
