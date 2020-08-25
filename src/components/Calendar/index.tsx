import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Modal from 'react-modal';

import ReminderItem, { Reminder } from '../Reminder';

import {
  Container,
  MonthPicker,
  MonthView,
  Day,
  AddReminderButton
} from './styles';
import ReminderForm from '../ReminderForm';

const MONTH_NAME = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'Seteptember',
  'October',
  'November',
  'December',
];

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
  const currentDate = moment();

  const [selectedMonth, setSelectedMonth] = useState(currentDate.month());
  const [selectedYear, setSelectedYear] = useState(currentDate.year());
  const [showAddReminderForm, setShowAddReminderForm] = useState(false);
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const storedReminders = localStorage.getItem('@mycalendar/reminders');

    if (storedReminders) {
      setReminders(JSON.parse(storedReminders));
    }
  }, [showAddReminderForm]);

  /**
   * Fill the monthDays array with the displayed days of the selected month
   */
  var monthDays = [];

  const firstWeekDayOfMonth = moment().date(1).day();

  let day = moment().date(1 - firstWeekDayOfMonth);

  for (let i = 0; i < DISPLAYED_DAYS; i++) {
    const dayReminders = reminders.filter((reminder: Reminder) => {
      const date = moment(reminder.date);
      return day.isSame(date, 'day');
    });

    dayReminders.sort((reminder1: Reminder, reminder2: Reminder) => {
      if (reminder1.time === reminder2.time) {
        return 0;
      } else if (reminder1.time < reminder2.time) {
        return -1;
      } else {
        return 1;
      }
    });

    monthDays.push(
      <Day
        key={day.toString()}
        isWeekend={day.day() === 0 || day.day() === 6}
        sameMonth={day.month() === currentDate.month()}
        currentDay={day.isSame(currentDate)}
      >
        <strong>{day.date()}</strong>
        <div className="reminders">
          {dayReminders.map((reminder: Reminder) => {
            return (
              <ReminderItem
                key={reminder.time + reminder.title}
                reminder={reminder}
              />
            );
          })}
        </div>
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

      <MonthPicker>
        <h2>{`${MONTH_NAME[selectedMonth]}, ${selectedYear}`}</h2>
      </MonthPicker>

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
