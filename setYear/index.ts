import toInteger from '../_lib/toInteger/index.ts'
import toDate from '../toDate/index.ts'
import requiredArgs from '../_lib/requiredArgs/index.ts'

/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
export default function setYear(dirtyDate: Date | number, dirtyYear: number): Date {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const year = toInteger(dirtyYear)

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(date.getTime())) {
    return new Date(NaN)
  }

  date.setFullYear(year)
  return date
}
