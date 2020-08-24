import styled from 'styled-components';

export const Container = styled.div`
  background: #53c;
  color: #fff;
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
