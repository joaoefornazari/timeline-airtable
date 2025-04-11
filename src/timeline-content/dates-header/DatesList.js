import { useState } from 'react'
import Date from './date/Date'
import generateDates from './generateDates'
import fetchEvents from './fetchEvents'
import './DatesList.css'

const DatesList = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const dates = generateDates(currentDate, 7);
  const events = fetchEvents(currentDate, 7);

  return (
    <div>
      {dates.map((dateInfo, index) => {
        <Date day={dateInfo.day} month={dateInfo.month} weekDay={dateInfo.weekDay} events={events[dateInfo.day]} />
      })}
    </div>
  )
}

export default DatesList;