import { format, parseISO, isValid, addMinutes } from 'date-fns'

export const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours}ч ${minutes}м`
}
export const formatDate = (dateString, duration) => {
  const parsedDate = parseISO(dateString)
  if (!isValid(parsedDate)) {
    return 'Неверный формат времени'
  }
  const endDate = addMinutes(parsedDate, duration)

  return `${format(parsedDate, 'HH:mm')} – ${format(endDate, 'HH:mm')}`
}
