import {
  IRegistrationData,
  RegistrationAction,
  RegistrationActions
} from '../model';

export function submitData(data: IRegistrationData): RegistrationAction {
  return {
    type: RegistrationActions.SUBMIT_DATA,
    payload: data
  };
}
