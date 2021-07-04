import * as utilityActions from '../actions/utility.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromModel from '../models';

import * as _ from 'lodash';


const featureName: string = 'utilityState';


export interface UtilityState {

    error: any;

    languages: string[];
    companies: string[];
    skills: string[];

    actionPerformed: boolean;
    actionPerforming: boolean;

}


export const defaultUtility: UtilityState = {

    languages: [],
    companies: [],
    skills: [],

    error: false,

    actionPerformed: false,
    actionPerforming: false
};

export const initialState = defaultUtility;

export function utilityReducer(
    state = initialState,
    action: utilityActions.Action
): UtilityState {

    switch (action.type) {


        case utilityActions.UtilityActionTypes.LIST_LANGUAGE: {
            return ({...state, actionPerforming: false, error: false});
        }

        case utilityActions.UtilityActionTypes.LIST_LANGUAGE_FAIL: {
            return ({...state, actionPerforming: false, actionPerformed: true, error: action.payload});
        }

        case utilityActions.UtilityActionTypes.LIST_LANGUAGE_SUCCESS: {
            return ({...state, actionPerforming: false, actionPerformed: true, languages: action.payload});
        }


        case utilityActions.UtilityActionTypes.LIST_COMPANY: {
            return ({...state, actionPerforming: false, error: false});
        }

        case utilityActions.UtilityActionTypes.LIST_COMPANY_FAIL: {
            return ({...state, actionPerforming: false, actionPerformed: true, error: action.payload});
        }

        case utilityActions.UtilityActionTypes.LIST_COMPANY_SUCCESS: {
            return ({...state, actionPerforming: false, actionPerformed: true, companies: action.payload});
        }


        case utilityActions.UtilityActionTypes.LIST_SKILL: {
            return ({...state, actionPerforming: false, error: false});
        }

        case utilityActions.UtilityActionTypes.LIST_SKILL_FAIL: {
            return ({...state, actionPerforming: false, actionPerformed: true, error: action.payload});
        }

        case utilityActions.UtilityActionTypes.LIST_SKILL_SUCCESS: {
            return ({...state, actionPerforming: false, actionPerformed: true, skills: _.uniq(_.flattenDeep(action.payload))});
        }




        default: {
            return state;
        }
    }
}

const getUtilityFeatureState = createFeatureSelector<UtilityState>(featureName);




export const isActionPerformed = createSelector(
    getUtilityFeatureState,
    (state: UtilityState) => state.actionPerformed
);

export const isActionPerforming = createSelector(
    getUtilityFeatureState,
    (state: UtilityState) => state.actionPerforming
);

export const getError = createSelector(
    getUtilityFeatureState,
    (state: UtilityState) => state.error
);




export const getListOfLanguages = createSelector(
    getUtilityFeatureState,
    state => state.languages
);


export const getListOfCompanies = createSelector(
    getUtilityFeatureState,
    state => state.companies
);



export const getListOfSkills = createSelector(
    getUtilityFeatureState,
    state => state.skills
);


