import React, { useState } from 'react';
import Modal from 'react-modal';

import { Container } from './styles';
import UpdateReminderForm from '../UpdateReminderForm';

Modal.setAppElement('#root');
export interface Reminder {
  id: string;
  title: string;
  date: string;
  time: string;
  city: string;
  color?: string;
}

interface ReminderProps {
  reminder: Reminder;
}

const ReminderItem: React.FC<ReminderProps> = ({ reminder: initialReminder }) => {
  const [showReminderView, setShowReminderView] = useState(false);
  const [reminder, setReminder] = useState(initialReminder);

  function openReminder() {
    setShowReminderView(true);
  }

  function closeReminder() {
    setShowReminderView(false);
  }

  return (
    <Container color={reminder.color} onClick={openReminder}>
      <p>
        <span className="time">{reminder.time}</span>
        <span className="title">{reminder.title}</span>
      </p>
      <Modal
        isOpen={showReminderView}
        onRequestClose={closeReminder}
        contentLabel="Update reminder"
        className="update-reminder-modal"
      >
        <UpdateReminderForm
          closeForm={closeReminder}
          reminder={reminder}
          setReminder={setReminder}
        />
      </Modal>
    </Container>
  );
}

export default ReminderItem;
