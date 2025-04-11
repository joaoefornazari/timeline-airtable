import timelineItems from '~/src/timelineItems.js'

/**
 * Obtain events to be rendered on the current timeline display.
 * @param {Date} startDate A Date object.
 * @param {number} days Max days ahead of startDate to look after events
 * @returns An array of events.
 */
function fetchEvents (startDate, days) {
  const endDate = new Date()
  endDate.setDate(startDate.getDate() + days)

  const dateEvents = new Array(days)
  for (let i = 0; i < days; i++) {
    const events = timelineItems.map((item) => {
      const eventStartDate = new Date(item.start)
      const dateToCheck = new Date()
      dateToCheck.setDate(startDate.getDate() + i)

      if (eventStartDate.getDate() >= startDate.getDate() + i) {
        return item
      }
    })
    dateEvents.push({ day: startDate.getDate() + i, events: events })
  }

  
}

export default fetchEvents
