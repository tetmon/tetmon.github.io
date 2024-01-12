import { DateTime } from 'luxon'

export default function formatDate(date: string) {
  return DateTime.fromFormat(date, 'yyyy-MM-dd').toFormat('MMMM dd, yyyy');
}