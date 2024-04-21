import { TOGGLE_CHECKBOX, TOGGLE_ALL_CHECKBOXES, SET_SORT } from './types'

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
