import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 62px;
  padding-bottom: 52px;
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled.main`
  padding: 16px;
  display: flex;
  flex-direction: column;

  section + section {
    margin-top: 32px;
  }
`;
