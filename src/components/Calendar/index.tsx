import React, { useState } from 'react';
import moment from 'moment';
import Modal from 'react-modal';

import {
  Container,
  MonthView,
  Day,
  AddReminderButton
} from './styles';
import ReminderForm from '../ReminderForm';

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

Modal.setAppElement('#root');

const Calendar: React.FC = () => {
  const [showAddReminderForm, setShowAddReminderForm] = useState(false);

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

  function openModal() {
    setShowAddReminderForm(true);
  }

  function closeModal() {
    setShowAddReminderForm(false);
  }

  return (
    <Container>
      <AddReminderButton onClick={openModal}>
        + New Reminder
      </AddReminderButton>
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

      <Modal
        isOpen={showAddReminderForm}
        onRequestClose={closeModal}
        contentLabel="Create new reminder"
        className="create-reminder-modal"
      >
        <ReminderForm closeForm={closeModal} />
      </Modal>
    </Container>
  );
}

export default Calendar;
