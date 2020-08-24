import React, { useState } from 'react';

import { Container } from './styles';

interface ReminderFormProps {
  closeForm: Function;
}

const ReminderForm: React.FC<ReminderFormProps> = ({ closeForm }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  const [color, setColor] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let reminders = [];

    const reminder = {
      title,
      date,
      time,
      city,
      color
    }

    reminders.push(reminder);

    const storedReminders = localStorage.getItem('@mycalendar/reminders');

    if (storedReminders) {
      reminders = [...JSON.parse(storedReminders), ...reminders];
    }

    localStorage.setItem('@mycalendar/reminders', JSON.stringify(reminders));

    alert("Reminder created!");
    //TODO: add and show toast message

    closeForm();
  }

  return (
    <Container>
      <h2>Create new reminder</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          Color:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>

        <button type="submit">
          Save
        </button>
      </form>
    </Container>
  );
}

export default ReminderForm;
