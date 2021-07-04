

// @ts-ignore
import { Action } from '@ngrx/store';
import * as fromModels from '../models';


export enum MentorActionTypes {



    SEARCH_PARAM= '[Mentor Search] Search Parameter',
    SEARCH_PARAM_SUCCESS= '[Mentor Search] Search Parameter Success',
    SEARCH_PARAM_FAIL= '[Mentor Search] Search Parameter Fail',

    GET_MENTOR_LIST = '[All List] Get All List',
    GET_MENTOR_LIST_SUCCESS = '[All List] Get All List Success',
    GET_MENTOR_LIST_FAIL = '[All List] Get All List Fail',

}






export class SearchParam implements Action {
    readonly type = MentorActionTypes.SEARCH_PARAM;

    constructor(public query: any) {}
}

export class SearchParamSuccess implements Action {
    readonly type = MentorActionTypes.SEARCH_PARAM_SUCCESS;

    constructor(public payload: any) {}
}

export class SearchParamFail implements Action {
    readonly type = MentorActionTypes.SEARCH_PARAM_FAIL;

    constructor(public payload: string) {}
}


export class GetMentorList implements Action {
    readonly type = MentorActionTypes.GET_MENTOR_LIST;

    constructor(public searchParam: any) {
    }
}


export class GetMentorListSuccess implements Action {
    readonly type = MentorActionTypes.GET_MENTOR_LIST_SUCCESS;

    constructor(public mentorList: fromModels.Mentor [] ) {
    }
}


export class GetMentorListFail implements Action {
    readonly type = MentorActionTypes.GET_MENTOR_LIST_FAIL;

    constructor(public payload: any) {
    }
}



export type Action =

    | SearchParam
    | SearchParamSuccess
    | SearchParamFail

    | GetMentorList
    | GetMentorListSuccess
    | GetMentorListFail;
