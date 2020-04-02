import { FilterActions, FilterAction, FilterOptions } from '../model'

export function setFilter(filterOptions: FilterOptions): FilterAction {
  return {
    type: FilterActions.SET_FILTERS,
    payload: filterOptions
  }
}
