import {IDailyUpdatesData, DailyUpdatesActions, DailyUpdatesAction} from '../model';
import createReducer from './createReducer';

export const dailyUpdatesData = createReducer<IDailyUpdatesData>(
    {
        date: '',
        employeeId: '',
        associateName: '',
        MISDepartment: '',
        accountName: '',
        managerName: '',
        role: '',
        currentTravelStatus: '',
        country: '',
        personalStatus: '',
        officeLocation: '',
        workFromHome: '',
        onPersonalLeave: ''
    },
    {
        [DailyUpdatesActions.SUBMIT_DAILY_UPDATE_DATA](
            state: IDailyUpdatesData,
            action: DailyUpdatesAction
        ) {
            return action.payload;
        }
    }
);