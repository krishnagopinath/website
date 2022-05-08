
import format from "date-fns/format"

/**
 * Given a date and a supported date format, formats the date
 */
export const formatDate = (dateString: string, dateFormat: Formats) => format(new Date(dateString), dateFormat)

/**
 * Enum for 'supported' date formats
 */
export enum Formats {
  Year = "uuuu",
  MonthAndYear = "MMM uuuu",
  DayMonthYear = "d MMM, uuuu"
}