

// @ts-ignore
import { Action } from '@ngrx/store';
import * as fromModels from '../models';


export enum UtilityActionTypes {



    LIST_LANGUAGE= '[Utility] List Language',
    LIST_LANGUAGE_SUCCESS= '[Utility] List Language Success',
    LIST_LANGUAGE_FAIL= '[Utility] List Language Fail',


    LIST_COMPANY= '[Utility] List Company',
    LIST_COMPANY_SUCCESS= '[Utility] List Company Success',
    LIST_COMPANY_FAIL= '[Utility] List Company Fail',


    LIST_SKILL= '[Utility] List Skills',
    LIST_SKILL_SUCCESS= '[Utility] List Skills Success',
    LIST_SKILL_FAIL= '[Utility] List Skills Fail',


}






export class ListLanguage implements Action {
    readonly type = UtilityActionTypes.LIST_LANGUAGE;

    constructor() {}
}

export class ListLanguageSuccess implements Action {
    readonly type = UtilityActionTypes.LIST_LANGUAGE_SUCCESS;

    constructor(public payload: any) {}
}

export class ListLanguageFail implements Action {
    readonly type = UtilityActionTypes.LIST_LANGUAGE_FAIL;

    constructor(public payload: string) {}
}



export class ListCompany implements Action {
    readonly type = UtilityActionTypes.LIST_COMPANY;

    constructor() {}
}

export class ListCompanySuccess implements Action {
    readonly type = UtilityActionTypes.LIST_COMPANY_SUCCESS;

    constructor(public payload: any) {}
}

export class ListCompanyFail implements Action {
    readonly type = UtilityActionTypes.LIST_COMPANY_FAIL;

    constructor(public payload: string) {}
}




export class ListSkills implements Action {
    readonly type = UtilityActionTypes.LIST_SKILL;

    constructor() {}
}

export class ListSkillsSuccess implements Action {
    readonly type = UtilityActionTypes.LIST_SKILL_SUCCESS;

    constructor(public payload: any) {}
}

export class ListSkillsFail implements Action {
    readonly type = UtilityActionTypes.LIST_SKILL_FAIL;

    constructor(public payload: string) {}
}




export type Action =

    | ListCompany
    | ListCompanySuccess
    | ListCompanyFail

    | ListLanguage
    | ListLanguageSuccess
    | ListLanguageFail


    | ListSkills
    | ListSkillsSuccess
    | ListSkillsFail;
