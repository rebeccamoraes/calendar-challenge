import React, { useState } from 'react';
import { GithubPicker } from 'react-color';

import { Reminder } from '../Reminder';

import { Container } from './styles';

interface ReminderFormProps {
  closeForm: Function;
  reminder: Reminder;
  setReminder: Function;
}

const UpdateReminderForm: React.FC<ReminderFormProps> = ({
  closeForm, reminder, setReminder
}) => {
  const [title, setTitle] = useState(reminder.title);
  const [date, setDate] = useState(reminder.date);
  const [time, setTime] = useState(reminder.time);
  const [city, setCity] = useState(reminder.city);
  const [color, setColor] = useState(reminder.color);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let reminders = new Array<Reminder>();

    const updatedReminder = {
      id: reminder.id,
      title,
      date,
      time,
      city,
      color
    }

    const storedReminders = localStorage.getItem('@mycalendar/reminders');

    if (storedReminders) {
      reminders = JSON.parse(storedReminders);
      reminders = reminders.filter((item: Reminder) => item.id !== reminder.id);
    }

    reminders.push(updatedReminder);

    localStorage.setItem('@mycalendar/reminders', JSON.stringify(reminders));
    setReminder(updatedReminder);
    closeForm();

    //TODO: add and show toast message
  }

  return (
    <Container>
      <h2>Update reminder</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            required
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          Color:
          <GithubPicker
            width="17rem"
            triangle="hide"
            color={color}
            onChange={(selectedColor) => setColor(selectedColor.hex)}
          />
        </label>

        <button type="submit">
          Save
        </button>
      </form>
    </Container>
  );
}

export default UpdateReminderForm;
