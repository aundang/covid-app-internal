import { History } from 'history';
import { combineReducers } from 'redux';
import {
  IEmployee,
  SearchBar,
  TeamList,
  IRegistrationData
} from '../model';
import * as employeeReducer from './employee';
import * as searchBarReducer from './searchBar';
import * as teamReducer from './team';
import * as registrationReducer from './RegistrationReducer';

export interface RootState {
  employeeList: IEmployee[];
  searchBar: SearchBar[];
  teamList: TeamList[];
  registrationData: IRegistrationData;
}

export default (history: History) =>
  combineReducers({
    ...employeeReducer,
    ...searchBarReducer,
    ...teamReducer,
    ...registrationReducer
  });
