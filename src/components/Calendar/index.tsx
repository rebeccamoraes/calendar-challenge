import React from 'react';

import { Container, MonthView } from './styles';

const WEEK_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const Calendar: React.FC = () => {
  return (
    <Container>
      <MonthView>
        <header>
          {WEEK_DAYS.map((weekDay) => (
            <strong key={weekDay}>{weekDay}</strong>
          ))}
        </header>

        <main>

        </main>
      </MonthView>
    </Container>
  );
}

export default Calendar;
