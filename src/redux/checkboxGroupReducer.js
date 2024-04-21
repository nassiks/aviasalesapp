import { TOGGLE_CHECKBOX, TOGGLE_ALL_CHECKBOXES } from './types'

const initialState = {
  all: false,
  value1: false,
  value2: false,
  value3: false,
  value4: false,
}

export const checkboxGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX: {
      const newState = { ...state, [action.payload]: !state[action.payload] }

      const allChecked = Object.keys(newState)
        .filter((key) => key !== 'all')
        .every((key) => newState[key])

      return { ...newState, all: allChecked }
    }
    case TOGGLE_ALL_CHECKBOXES: {
      const newStateAll = Object.keys(state).reduce((acc, key) => {
        acc[key] = action.payload
        return acc
      }, {})
      return newStateAll
    }
    default:
      return state
  }
}
