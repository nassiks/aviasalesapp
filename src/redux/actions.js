import {
  TOGGLE_CHECKBOX,
  TOGGLE_ALL_CHECKBOXES,
  SET_SORT,
  FETCH_TICKETS_FAILURE,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_START,
} from './types'

export const setSort = (sortField) => ({
  type: SET_SORT,
  payload: sortField,
})
export const toggleCheckbox = (checkboxId) => ({
  type: TOGGLE_CHECKBOX,
  payload: checkboxId,
})
export const toggleAllCheckboxes = (isChecked) => ({
  type: TOGGLE_ALL_CHECKBOXES,
  payload: isChecked,
})

export const fetchTicketsStart = () => ({
  type: FETCH_TICKETS_START,
})

export const fetchTicketsSuccess = (tickets) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: tickets.slice(0, 5),
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
    } catch (error) {
      dispatch(fetchTicketsFailure(error.message))
    }
  }
}
