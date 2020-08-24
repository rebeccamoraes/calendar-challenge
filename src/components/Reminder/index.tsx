import React, { useState } from 'react';
import Modal from 'react-modal';

import { Container } from './styles';
import UpdateReminderForm from '../UpdateReminderForm';
import ReminderView from '../ReminderView';

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
  const [action, setAction] = useState("view");

  function openReminder() {
    setShowReminderView(true);
  }

  function closeReminder(e: React.MouseEvent) {
    e.stopPropagation();
    setShowReminderView(false);
  }

  function closeForm() {
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
        shouldCloseOnOverlayClick={true}
      >
        {action === "edit"
          ? <UpdateReminderForm
            closeForm={closeForm}
            reminder={reminder}
            setReminder={setReminder}
          />
          : <ReminderView
            reminder={reminder}
            setAction={setAction}
            closeForm={closeForm}
          />
        }
      </Modal>
    </Container>
  );
}

export default ReminderItem;
