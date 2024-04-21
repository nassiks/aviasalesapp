import { combineReducers } from 'redux'

import { checkboxGroupReducer } from './checkboxGroupReducer'
import { sortReducer } from './sortReducer'
import { ticketsReducer } from './ticketReducer'

export const rootReducer = combineReducers({
  checkboxes: checkboxGroupReducer,
  sort: sortReducer,
  tickets: ticketsReducer,
})
