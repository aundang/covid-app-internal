export interface IDailyUpdatesData {
    date: string,
    employeeId: string,
    associateName: string,
    MISDepartment: string,
    accountName: string,
    managerName: string,
    role: string,
    currentTravelStatus: string,
    country: string,
    personalStatus: string,
    officeLocation: string,
    workFromHome: string,
    onPersonalLeave: string
}

export enum DailyUpdatesActions {
    SUBMIT_DAILY_UPDATE_DATA = 'SUBMIT_DAILY_UPDATE_DATA'
}

interface dailyUpdatesActionType<T, P> {
    type: T;
    payload: P;
}

export type DailyUpdatesAction = 
dailyUpdatesActionType<typeof DailyUpdatesActions.SUBMIT_DAILY_UPDATE_DATA,IDailyUpdatesData>;