import format from "date-fns/format"

/**
 * Given a date and date format
 *
 * @param {string} dateString - A date format that could be passed to a `Date` ctor
 * @param {string} dateFormat - A format from compatible list: https://date-fns.org/v2.9.0/docs/format
 */
const formatDate = (dateString, dateFormat) =>
  format(new Date(dateString), dateFormat)

export default formatDate

/**
 * Quick function for looking up formats
 */
export const formats = {
  Year: "uuuu",
  MonthAndYear: "MMM uuuu",
}
