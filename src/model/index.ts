import { EmployeeAction } from './employee';
import { SearchBarAction } from './searchBar';
import { TeamAction } from './team';
import {RegistrationAction} from './RegistrationForm';
import { FilterAction } from './filter'
import {DailyUpdatesAction} from './DailyUpdates'

export * from './employee';

export * from './searchBar';

export * from './team';

export * from './filter'


export * from './RegistrationForm';

export * from './DailyUpdates';

export type Action = EmployeeAction 
                    | SearchBarAction 
                    | TeamAction
                    | RegistrationAction
                    | FilterAction
                    | DailyUpdatesAction;
