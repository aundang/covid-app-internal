import { History } from 'history';
import { combineReducers } from 'redux';
import {
  IEmployee,
  SearchBar,
  TeamList,
  IRegistrationData,
  FilterOptions
} from '../model';
import * as employeeReducer from './employee';
import * as searchBarReducer from './searchBar';
import * as teamReducer from './team';
import * as registrationReducer from './RegistrationReducer';
import * as filterReducer from './filter'

export interface RootState {
  employeeList: IEmployee[];
  searchBar: SearchBar[];
  teamList: TeamList[];
  registrationData: IRegistrationData;
  filterOptions: FilterOptions[]
}

export default (history: History) =>
  combineReducers({
    ...employeeReducer,
    ...searchBarReducer,
    ...teamReducer,
    ...registrationReducer,
    ...filterReducer
  });
