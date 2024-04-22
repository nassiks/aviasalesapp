import { combineReducers } from 'redux'

import { sortAndFilterReducer } from './sortAndFilterReducer'
import { ticketsReducer } from './ticketReducer'

export const rootReducer = combineReducers({
  sort: sortAndFilterReducer,
  tickets: ticketsReducer,
})
