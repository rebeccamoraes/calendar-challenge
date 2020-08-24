import styled from 'styled-components';
import { readableColor } from 'polished';

interface ReminderProps {
  color?: string;
}

export const Container = styled.div<ReminderProps>`
  background: ${props => props.color || "#0070c0"};
  color: ${props => props.color ? readableColor(props.color) : "#fff"};
  height: 1rem;
  margin: 2px 0;
  padding: 0 3px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  max-width: 7rem;
  cursor: pointer;
  
  p {

    span.time {
      font-size: 0.7rem;
      margin-right: 3px;
    }

    span.title {
      font-size: 0.8rem;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;