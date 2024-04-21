import { combineReducers } from 'redux'

import { checkboxGroupReducer } from './checkboxGroupReducer'
import { sortReducer } from './sortReducer'

export const rootReducer = combineReducers({
  checkboxes: checkboxGroupReducer,
  sort: sortReducer,
})
