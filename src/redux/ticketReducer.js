import { FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILURE, FETCH_TICKETS_START } from './types'

const initialState = {
  tickets: [],
  loading: false,
  error: null,
}

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_START:
      return { ...state, loading: true, error: null }
    case FETCH_TICKETS_SUCCESS:
      return { ...state, tickets: action.payload, loading: false }
    case FETCH_TICKETS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
