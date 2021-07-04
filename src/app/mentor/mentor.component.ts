import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../_ngRxStore/reducers';

import * as fromMentorReducer from 'src/app/_ngRxStore/reducers/mentor.reducer';
import {Mentor} from 'src/app/_ngRxStore/models';
import * as fromAdminAction from 'src/app/_ngRxStore/actions/mentor.action';
import {Observable, of} from 'rxjs';
import {getTotalMentor} from 'src/app/_ngRxStore/reducers/mentor.reducer';


@Component({
    selector: 'app-mentor',
    templateUrl: './mentor.component.html',
    styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {

    public mentorList$: Observable<Mentor[]> = of([]);
    public totalMentor$: Observable<number> = of(0);
    public toggledDropdown: boolean;

    public searchKeywords: string;

    constructor(
        private readonly store: Store<ApplicationState>) {
    }


    ngOnInit(): void {

        this.store.select( fromMentorReducer.getSearchParam ).subscribe(
            n => this.callMentorsList(n)
        );

        this.mentorList$ = this.store.select( fromMentorReducer.getListOfMentor );
        this.totalMentor$ = this.store.select( fromMentorReducer.getTotalMentor );
    }


    private callMentorsList(searchParam: any): void {
        this.store.dispatch( new fromAdminAction.GetMentorList(searchParam) );
    }
}
