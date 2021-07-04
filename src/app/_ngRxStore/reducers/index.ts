import {mentorReducer, MentorState} from './mentor.reducer';
import {UtilityState, utilityReducer} from './utility.reducer';



export interface ApplicationState {
  mentorState: MentorState;
  utilityState: UtilityState;
}


export const applicationStates: ApplicationState | any  = {
    mentorState: mentorReducer,
    utilityState: utilityReducer
};
