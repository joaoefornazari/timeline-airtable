import Date from './date/Date'
import './DatesList.css'

const DatesList = () => {
  const dates = [];

  return (
    <div>
      {dates.map((dateInfo, index) => {
        <Date day={dateInfo.day} month={dateInfo.month} weekDay={dateInfo.weekDay} />
      })}
    </div>
  )
}

export default DatesList;