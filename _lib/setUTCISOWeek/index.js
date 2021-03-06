import toInteger from '../toInteger/index.ts'
import toDate from '../../toDate/index.ts'
import getUTCISOWeek from '../getUTCISOWeek/index.js'
import requiredArgs from '../requiredArgs/index.ts'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var isoWeek = toInteger(dirtyISOWeek)
  var diff = getUTCISOWeek(date) - isoWeek
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
