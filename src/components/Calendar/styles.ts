import styled, { css } from 'styled-components';

interface DayProps {
  isWeekend: boolean;
  sameMonth: boolean;
  currentDay: boolean;
  selectedDay?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const AddReminderButton = styled.button`
  border: 1px solid #0070c0;
  height: 2rem;
  width: 10rem;
  border-radius: 5px;
  color: #0070c0;
  background: #fff;
`;

export const MonthPicker = styled.header`
  margin-top: 10px;
`;

export const MonthView = styled.div`
  margin: 20px;

  header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: 1px solid #0070c0;
    background: #0070c0;
    padding: 5px;
    border-radius: 5px 5px 0 0;

    strong {
      color: #fff;
      text-align: center;
      font-size: 0.8rem;
      overflow: hidden;
      width: 100%;
      display: block;
    }
  }

  main {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 1px;
    background: #ccc;
    border: 1px solid #ccc;
  }

`;

export const Day = styled.section<DayProps>`
  height: 5rem;
  padding: 0.5rem;
  background: #fff;
  
  strong {
    font-size: 0.7rem;
    margin-bottom: 5px;

    ${props => props.isWeekend && css`
      color: #0070c0;
    `}

    ${props => !props.sameMonth && css`
      color: #ccc;
    `}
    ${props => props.currentDay && css`
      background: #0070c0;
      color: #fff;
      width: 1.2rem;
      height: 1.2rem;
      text-align: center;
      line-height: 1.2rem;
      display: block;
      border-radius: 50%;
    `}
  }
`;
