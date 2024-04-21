import { SET_SORT } from './types'

const initialState = {
  sort: '',
}

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT:
      return action.payload
    default:
      return state
  }
}
