import {
  RegistrationAction,
  RegistrationActions,
  IRegistrationData
} from '../model';
import createReducer from './createReducer';

export const registrationData = createReducer<IRegistrationData>(
  {
    employeeId: '',
    firstName: '',
    lastName: '',
    managerFirstName: '',
    managerLastName: '',
    managerEmployeeId: '',
    role: '',
    MISDepartment: '',
    accountName: '',
    country: '',
    workLocation: ''
  },
  {
    [RegistrationActions.SUBMIT_DATA](
      state: IRegistrationData,
      action: RegistrationAction
    ) {
      //const newData: IRegistrationData = action.payload;

      return action.payload;
    }
  }
);
