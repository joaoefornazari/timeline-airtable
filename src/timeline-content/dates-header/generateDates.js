/**
 * Generate dates to be rendered on screen.
 * @param {Date} startDate A Date object
 * @param {number} days Max days to be rendered after startDate.
 * @returns An array of `{day, month, weekday}`.
 */
const generateDates = (startDate, days) => {
  const dates = []
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + 1);

    dates.push({
      day: (date.getDate() + 1),
      month: (date.getMonth() + 1).toString(),
      weekDay: daysOfWeek[date.getDay()],
    })
  }

  return dates;
}

export default generateDates;
