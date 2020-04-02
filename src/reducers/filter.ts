import { FilterOptions, FilterAction, FilterActions } from '../model'
import createReducer from './createReducer'

export const filterOptions = createReducer<FilterOptions[]>([], {
  [FilterActions.SET_FILTERS](state: FilterOptions[], action: FilterAction) {
    return action.payload
  }
})
