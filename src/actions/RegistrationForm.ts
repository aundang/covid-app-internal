import { registrationData, RegistrationAction, RegistrationActions } from '../model';


export function submitData(data: registrationData): RegistrationAction {
    return {
        type: RegistrationActions.SUBMIT_DATA,
        payload: data
    };
}


