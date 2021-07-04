import {Injectable} from '@angular/core';

import {Actions, Effect, ofType} from '@ngrx/effects';

import {Observable, of} from 'rxjs';
import {switchMap, map, catchError, tap} from 'rxjs/operators';

import {UtilityService} from '../services/utility.service';

import {Action} from '@ngrx/store';
import * as actionUtility from '../actions/utility.action';


@Injectable()
export class UtilityEffect {


    @Effect()
    public listAllCompany: Observable<Action | any> = this.actions$.pipe(
        ofType<actionUtility.ListCompany>(
            actionUtility.UtilityActionTypes.LIST_COMPANY
        ),
        switchMap((action: actionUtility.ListCompany) =>
            this.utilityService.getCompanyList().pipe(
                map(
                    (httpResponse: string[]) => {
                        return new actionUtility.ListCompanySuccess(httpResponse)
                    },
                    catchError(err => of(new actionUtility.ListCompanyFail(err)))
                )
            )
        )
    );

    @Effect()
    public listAllLanguage: Observable<Action | any> = this.actions$.pipe(
        ofType<actionUtility.ListLanguage>(
            actionUtility.UtilityActionTypes.LIST_LANGUAGE
        ),
        switchMap((action: actionUtility.ListLanguage) =>
            this.utilityService.getLanguageList().pipe(
                map(
                    (httpResponse: string[]) => {
                        return new actionUtility.ListLanguageSuccess(httpResponse)
                    },
                    catchError(err => of(new actionUtility.ListLanguageFail(err)))
                )
            )
        )
    );

    @Effect()
    public listAllSkills: Observable<Action | any> = this.actions$.pipe(
        ofType<actionUtility.ListSkills>(
            actionUtility.UtilityActionTypes.LIST_SKILL
        ),
        switchMap((action: actionUtility.ListSkills) =>
            this.utilityService.getSkillList().pipe(
                map(
                    (httpResponse: string[]) => {
                        return new actionUtility.ListSkillsSuccess(httpResponse);
                    },
                    catchError(err => of(new actionUtility.ListSkillsFail(err)))
                )
            )
        )
    );


    constructor(
        private readonly actions$: Actions,
        private readonly utilityService: UtilityService
    ) {
    }


}
