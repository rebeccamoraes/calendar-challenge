import React, { useEffect, useState } from 'react';
import weatherApi, { KEY } from '../../services/weatherapi';

import { Container } from './styles';
import { Reminder } from '../Reminder';

interface WeatherProps {
  main: string;
  description: string;
}

interface ReminderViewProps {
  reminder: Reminder;
  setAction: Function;
  closeForm: Function;
}
const ReminderView: React.FC<ReminderViewProps> = ({ reminder, setAction, closeForm }) => {
  const weatherNotFound: WeatherProps = {
    main: 'Weather info not found',
    description: 'The current weather for this city was not found.'
  };
  const [weather, setWeather] = useState<WeatherProps>(weatherNotFound);

  useEffect(() => {
    weatherApi.get('weather', {
      params: {
        q: reminder.city,
        appid: KEY
      }
    }).then((response => {
      const data = response.data;
      if (data.weather) {
        setWeather(data.weather[0]);
      }
    })).catch((e) => {
      setWeather(weatherNotFound);
    })
  }, [reminder.city, weatherNotFound]);

  function handleClose(e: React.MouseEvent) {
    e.stopPropagation();
    closeForm();
  }
  return (
    <Container color={reminder.color}>
      <h2>{reminder.title}</h2>
      <p>
        <span className="reminder-date">{`${reminder.date} - ${reminder.time}`}</span>
        <span>{reminder.city}</span>
      </p>

      <section>
        <h4>Weather infos</h4>
        <p><strong>{weather.main}</strong> - {weather.description}</p>
      </section>

      <button type="button" onClick={() => setAction("edit")}>
        Edit
      </button>
      <button
        type="button"
        className="secondary"
        onClick={handleClose}
      >
        Cancel
        </button>
    </Container>
  )
}

export default ReminderView;
