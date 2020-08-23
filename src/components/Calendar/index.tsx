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
      <Day
        key={day.toString()}
        isWeekend={day.day() === 0 || day.day() === 6}
        sameMonth={day.month() === currentDate.month()}
        currentDay={day.isSame(currentDate)}
      >
        <strong>{day.date()}</strong>
      </Day>
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
