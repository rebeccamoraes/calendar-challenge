import React from 'react';

import Calendar from '../../components/Calendar';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Welcome to MyCalendar!</h1>

      <Calendar />
    </Container>
  );
}

export default Home;
