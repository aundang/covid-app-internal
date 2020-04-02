import { EmployeeAction } from './employee';
import { SearchBarAction } from './searchBar';
import { TeamAction } from './team';
import {RegistrationAction} from './RegistrationForm';
import { FilterAction } from './filter'

export * from './employee';

export * from './searchBar';

export * from './team';

export * from './filter'


export * from './RegistrationForm';

export type Action = EmployeeAction 
                    | SearchBarAction 
                    | TeamAction
                    | RegistrationAction
                    | FilterAction;
