export function formatStopsText(stopsCount) {
  if (stopsCount === 0) {
    return '0 пересадок'
  } else if (stopsCount === 1) {
    return '1 пересадка'
  } else {
    return `${stopsCount} пересадки`
  }
}
