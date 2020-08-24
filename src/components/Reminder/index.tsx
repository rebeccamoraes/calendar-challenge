import React from 'react';

import { Container } from './styles';

export interface Reminder {
  title: string;
  date: string;
  time: string;
  city: string;
  color?: string;
}

interface ReminderProps {
  reminder: Reminder;
}

const ReminderItem: React.FC<ReminderProps> = ({ reminder }) => {
  return (
    <Container color={reminder.color}>
      <p>
        <span className="time">{reminder.time}</span>
        <span className="title">{reminder.title}</span>
      </p>
    </Container>
  );
}

export default ReminderItem;
