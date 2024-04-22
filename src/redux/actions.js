import {
  TOGGLE_CHECKBOX,
  SET_SORT,
  FETCH_TICKETS_FAILURE,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_START,
  SORT_BY_FASTEST,
  SORT_BY_CHEAPEST,
  SORT_BY_OPTIMAL,
  UPDATE_ITEMS,
} from './types'

export const setSort = (sortField) => ({
  type: SET_SORT,
  payload: sortField,
})
export const updateItems = (items) => ({
  type: UPDATE_ITEMS,
  payload: items,
})
export const toggleCheckbox = (checkboxId, isChecked = null) => ({
  type: TOGGLE_CHECKBOX,
  payload: { checkboxId, isChecked },
})
export const sortByCheapest = () => ({
  type: SORT_BY_CHEAPEST,
})

export const sortByFastest = () => ({
  type: SORT_BY_FASTEST,
})

export const sortByOptimal = () => ({
  type: SORT_BY_OPTIMAL,
})

export const fetchTicketsStart = () => ({
  type: FETCH_TICKETS_START,
})

export const fetchTicketsSuccess = (tickets) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: tickets,
})

export const fetchTicketsFailure = (error) => ({
  type: FETCH_TICKETS_FAILURE,
  payload: error,
})

export const fetchTickets = () => {
  return async (dispatch) => {
    dispatch(fetchTicketsStart())
    try {
      const searchResponse = await fetch('https://aviasales-test-api.kata.academy/search')
      const searchData = await searchResponse.json()
      const { searchId } = searchData

      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      const data = await response.json()
      dispatch(fetchTicketsSuccess(data.tickets))
      dispatch(updateItems(data.tickets))
    } catch (error) {
      dispatch(fetchTicketsFailure(error.message))
    }
  }
}
