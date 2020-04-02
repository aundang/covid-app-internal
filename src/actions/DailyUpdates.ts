import {IDailyUpdatesData, DailyUpdatesActions, DailyUpdatesAction} from '../model';

export function submitDailyUpdatesData(data: IDailyUpdatesData): DailyUpdatesAction {
    return {
        type: DailyUpdatesActions.SUBMIT_DAILY_UPDATE_DATA,
        payload: data
    };
}