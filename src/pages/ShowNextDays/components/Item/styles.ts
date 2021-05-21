import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 110px;
  height: 150px;
  & + div {
    margin-left: 20px;
  }
`;
