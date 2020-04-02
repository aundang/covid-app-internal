import { registrationData, RegistrationAction, RegistrationDataActions } from '../model';
import { RegisterAction } from 'redux-persist';

export function submitData(data: registrationData): RegistrationAction {
    return {
        type: RegistrationDataActions.SUBMIT_DATA,
        payload: data
    };
}

export function retrieveData(data: registrationData): RegistrationAction {
    return {
        type: RegistrationDataActions.RETRIEVE_DATA,
        payload: data,
    };
}

