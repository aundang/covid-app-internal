import { History } from 'history';
import { combineReducers } from 'redux';
import { IEmployee, SearchBar, TeamList, CC, registrationData } from '../model';
import * as employeeReducer from './employee';
import * as searchBarReducer from './searchBar';
import * as teamReducer from './team';
import * as closeContactReducer from './closeContact';
import * as registrationReducer from './RegistrationReducer';

export interface RootState {
  employeeList: IEmployee[];
  searchBar: SearchBar[];
  teamList: TeamList[];
  closeContact: CC[];
  registrationData: registrationData;
}

export default (history: History) =>
  combineReducers({
    ...employeeReducer,
    ...searchBarReducer,
    ...teamReducer,
    ...closeContactReducer,
    ...registrationReducer
  });
