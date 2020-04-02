import { RegistrationAction, RegistrationActions, registrationData } from '../model';
import createReducer from './createReducer';


 

export const registrationList = createReducer<registrationData[]>([], {
    [RegistrationActions.SUBMIT_DATA](state: registrationData[], action: RegistrationAction) {
       return[...state, action.payload];
    },
});
