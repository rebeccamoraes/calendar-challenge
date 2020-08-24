import React, { useState } from 'react';
import { GithubPicker } from 'react-color';

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
    console.log(color);
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

    closeForm();

    alert("Reminder created!");
    //TODO: add and show toast message
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
            required
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
        <button
          type="button"
          className="secondary"
          onClick={() => closeForm()}
        >
          Cancel
        </button>
      </form>
    </Container>
  );
}

export default ReminderForm;
