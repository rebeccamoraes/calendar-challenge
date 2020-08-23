import React, { useState } from 'react';

import { Container } from './styles';

const ReminderForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  // const [color, setColor] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({
      title,
      date,
      time,
      city
    });
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

        <button type="submit">
          Save
        </button>
      </form>
    </Container>
  );
}

export default ReminderForm;
