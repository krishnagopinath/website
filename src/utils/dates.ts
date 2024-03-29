// 🤔 Fixing the following error: 
//     Error [ERR_UNSUPPORTED_DIR_IMPORT]: Directory import '/var/task/node_modules/date-fns/format' is not supported resolving ES modules imported from **
import format from "date-fns/format/index.js"

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