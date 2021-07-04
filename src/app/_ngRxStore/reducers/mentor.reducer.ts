import * as mentorActions from '../actions/mentor.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromModel from '../models';
import {Mentor} from '../models';

import * as _ from 'lodash';


const featureName: string = 'mentorState';


export interface MentorState {

    loadedMentorProfile: boolean;

    loadingMentorProfile: boolean;
    error: any;
    mentors: fromModel.Mentor[] | [];
    searchParam: any;

    actionPerformed: boolean;
    actionPerforming: boolean;

}


export const defaultMentor: MentorState = {

    mentors: [],
    searchParam: {},

    loadedMentorProfile: false,
    loadingMentorProfile: false,

    error: false,

    actionPerformed: false,
    actionPerforming: false
};

export const initialState = defaultMentor;

export function mentorReducer(
    state = initialState,
    action: mentorActions.Action
): MentorState {

    switch (action.type) {


        case mentorActions.MentorActionTypes.GET_MENTOR_LIST: {
            return ({...state, loadingMentorProfile: true, loadedMentorProfile: false});
        }

        case mentorActions.MentorActionTypes.GET_MENTOR_LIST_FAIL: {
            return ({...state, loadingMentorProfile: false, error: action.payload});
        }

        case mentorActions.MentorActionTypes.GET_MENTOR_LIST_SUCCESS: {
            return ({...state, loadingMentorProfile: false, loadedMentorProfile: true, mentors: action.mentorList});
        }


        case mentorActions.MentorActionTypes.SEARCH_PARAM: {
            return ({...state, loadingMentorProfile: true, loadedMentorProfile: false});
        }

        case mentorActions.MentorActionTypes.SEARCH_PARAM_SUCCESS: {
            return ({...state, loadingMentorProfile: false, loadedMentorProfile: true, searchParam: { ...state.searchParam, ...action.payload } });
        }

        case mentorActions.MentorActionTypes.SEARCH_PARAM_FAIL: {
            return ({...state, loadingMentorProfile: false, loadedMentorProfile: true, error: action.payload});
        }

        default: {
            return state;
        }
    }
}

const getMentorFeatureState = createFeatureSelector<MentorState>(featureName);




export const isActionPerformed = createSelector(
    getMentorFeatureState,
    (state: MentorState) => state.actionPerformed
);

export const isActionPerforming = createSelector(
    getMentorFeatureState,
    (state: MentorState) => state.actionPerforming
);

export const getError = createSelector(
    getMentorFeatureState,
    (state: MentorState) => state.error
);


export const getListOfMentor = createSelector(
    getMentorFeatureState,
    state => state.mentors
);


export const getTotalMentor = createSelector(
    getMentorFeatureState,
    state => state.mentors.length
);



export const getSearchParam = createSelector(
    getMentorFeatureState,
    state => state.searchParam
);




