import toInteger from '../_lib/toInteger/index.ts'
import toDate from '../toDate/index.ts'
import requiredArgs from '../_lib/requiredArgs/index.ts'

/**
 * @name setDayOfYear
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} dayOfYear - the day of the year of the new date
 * @returns {Date} the new date with the day of the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */
export default function setDayOfYear(
  dirtyDate: Date | number,
  dirtyDayOfYear: number
): Date {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const dayOfYear = toInteger(dirtyDayOfYear)
  date.setMonth(0)
  date.setDate(dayOfYear)
  return date
}