import formatDistance from '../de/_lib/formatDistance/index.ts'
import formatLong from '../de/_lib/formatLong/index.ts'
import formatRelative from '../de/_lib/formatRelative/index.ts'
import match from '../de/_lib/match/index.ts'
// difference to 'de' locale
import localize from './_lib/localize/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary German locale (Austria).
 * @language German
 * @iso-639-2 deu
 * @author Christoph Tobias Stenglein [@cstenglein]{@link https://github.com/cstenglein}
 */
var locale = {
  code: 'de-AT',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4,
  },
}

export default locale
