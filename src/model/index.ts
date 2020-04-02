import { EmployeeAction } from './employee';
import { SearchBarAction } from './searchBar';
import { TeamAction } from './team';
import {RegistrationAction} from './RegistrationForm';

export * from './employee';

export * from './searchBar';

export * from './team';


export * from './RegistrationForm';

export type Action = EmployeeAction 
                    | SearchBarAction 
                    | TeamAction
                    | RegistrationAction;
