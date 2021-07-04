import {Injectable} from '@angular/core';

import {Actions, Effect, ofType} from '@ngrx/effects';

import {Observable, of} from 'rxjs';
import {switchMap, map, catchError, delay} from 'rxjs/operators';

import {MentorService} from '../services/mentor.service';

import * as fromModels from '../models';
import {Action} from '@ngrx/store';
import * as actionMentor from '../actions/mentor.action';


@Injectable()
export class MentorEffect {


    @Effect()
    public mentorSearchResult: Observable<Action | any> = this.actions$.pipe(
        ofType<actionMentor.SearchParam>(
            actionMentor.MentorActionTypes.SEARCH_PARAM
        ),
        switchMap((action: actionMentor.SearchParam) =>
            of(new actionMentor.SearchParamSuccess(action.query))
        )
    );

    @Effect()
    public getAllMentors: Observable<Action | any> = this.actions$.pipe(
        ofType<actionMentor.GetMentorList>(
            actionMentor.MentorActionTypes.GET_MENTOR_LIST
        ),
        switchMap((action: actionMentor.GetMentorList) =>
            this.mentorService.getMentorList(action.searchParam).pipe(
                map(
                    (httpResponse: fromModels.Mentor[]) => {
                        return new actionMentor.GetMentorListSuccess(httpResponse);
                    },
                    catchError(err => of(new actionMentor.GetMentorListFail(err)))
                )
            )
        ),
    );


    constructor(
        private readonly actions$: Actions,
        private readonly mentorService: MentorService
    ) {
    }


}
