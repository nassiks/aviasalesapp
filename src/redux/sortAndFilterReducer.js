import { SET_SORT, SORT_BY_CHEAPEST, SORT_BY_FASTEST, SORT_BY_OPTIMAL, UPDATE_ITEMS, TOGGLE_CHECKBOX } from './types'

const initialState = {
  sortField: 'optimal',
  items: [],
  originalItems: [],
  filters: {
    value1: true,
    value2: true,
    value3: true,
    value4: true,
  },
}

const sortItems = (items, sortField) => {
  switch (sortField) {
    case 'cheapest':
      return [...items].sort((a, b) => a.price - b.price)
    case 'fastest':
      return [...items].sort(
        (a, b) =>
          a.segments.reduce((total, seg) => total + seg.duration, 0) -
          b.segments.reduce((total, seg) => total + seg.duration, 0)
      )
    default:
      return items
  }
}

const filterItems = (items, filters) => {
  return items.filter((item) => {
    const transferCount = item.segments.reduce((acc, segment) => acc + segment.stops.length, 0)
    const passConditions = [
      filters.value1 && transferCount === 0,
      filters.value2 && transferCount === 1,
      filters.value3 && transferCount === 2,
      filters.value4 && transferCount === 3,
    ]
    return passConditions.some((condition) => condition)
  })
}

export const sortAndFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEMS: {
      const filteredAndSortedItems = sortItems(filterItems(action.payload, state.filters), state.sortField)
      return {
        ...state,
        items: filteredAndSortedItems,
        originalItems: action.payload,
      }
    }
    case SET_SORT:
    case SORT_BY_FASTEST:
    case SORT_BY_CHEAPEST:
    case SORT_BY_OPTIMAL: {
      const newSortField = action.payload || action.type.split('_')[2].toLowerCase()
      return {
        ...state,
        sortField: newSortField,
        items: sortItems(filterItems(state.originalItems, state.filters), newSortField),
      }
    }
    case TOGGLE_CHECKBOX: {
      const { checkboxId, isChecked } = action.payload
      const newValue = isChecked !== null ? isChecked : !state.filters[checkboxId]
      const newFilters = { ...state.filters, [checkboxId]: newValue }
      return {
        ...state,
        filters: newFilters,
        items: sortItems(filterItems(state.originalItems, newFilters), state.sortField),
      }
    }
    default:
      return state
  }
}
