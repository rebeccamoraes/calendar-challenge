import React from 'react';
import moment from 'moment';

import { Container, MonthView, Day } from './styles';

const WEEK_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const DISPLAYED_DAYS = 42;

const Calendar: React.FC = () => {
  const currentDate = moment();

  var monthDays = [];

  const firstWeekDayOfMonth = moment().date(1).day();

  let day = moment().date(1 - firstWeekDayOfMonth);

  for (let i = 0; i < DISPLAYED_DAYS; i++) {
    monthDays.push(
      <div key={day.toString()}>
        <Day>{day.date()}</Day>
      </div>
    );
    day.add(1, 'days');
  }

  return (
    <Container>
      <MonthView>
        <header>
          {WEEK_DAYS.map((weekDay) => (
            <strong key={weekDay}>{weekDay}</strong>
          ))}
        </header>

        <main>
          {monthDays}
        </main>
      </MonthView>
    </Container>
  );
}

export default Calendar;
