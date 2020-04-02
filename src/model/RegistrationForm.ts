export interface IRegistrationData {
  employeeId: string;
  firstName: string;
  lastName: string;
  managerFirstName: string;
  managerLastName: string;
  managerEmployeeId: string;
  role: string;
  MISDepartment: string;
  accountName: string;
  country: string;
  workLocation: string;
}

export enum RegistrationActions {
  SUBMIT_DATA = 'SUBMIT_DATA'
}

interface registrationActionType<T, P> {
  type: T;
  payload: P;
}

export type RegistrationAction = registrationActionType<
  typeof RegistrationActions.SUBMIT_DATA,
  IRegistrationData
>;
