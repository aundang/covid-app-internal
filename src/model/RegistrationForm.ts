export interface registrationData {
    employeeId: string,
    firstName: string,
    lastName: string,
    managerFirstName: string,
    managerLastName: string,
    managerEmployeeId: string,
    role: string,
    MISDepartment: string,
    accountName: string,
    country: string,
    workLocation: string,
}

export enum RegistrationDataActions {
    SUBMIT_DATA = 'SUBMIT_DATA',
    RETRIEVE_DATA = 'RETRIEVE_DATA'
}

interface registrationActionType<T, P> {
    type: T;
    payload: P;
}

export type RegistrationAction =
    | registrationActionType<typeof RegistrationDataActions.SUBMIT_DATA, registrationData>
    | registrationActionType<typeof RegistrationDataActions.RETRIEVE_DATA, registrationData>