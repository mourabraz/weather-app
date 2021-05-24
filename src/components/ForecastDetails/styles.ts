import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: ${Colors.primaryText};
  /* min-width: 1020px; */
  margin: 0 auto;
  /*   overflow: hidden; */

  h1 {
    font-weight: normal;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const TemperatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 136px;
  padding-right: 32px;

  p {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    span {
      margin-left: 8px;
    }
  }
`;

export const SunMoonInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 176px;
  padding-right: 32px;

  p {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    span {
      margin-left: 8px;
    }
  }
`;

export const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 216px;
  padding-right: 32px;

  p {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    span {
      margin-left: 8px;
    }
  }
`;

export const WindInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100px;
  align-items: center;

  p {
    display: flex;
    flex-direction: column;
    & + p {
      margin-top: 16px;
    }
  }
`;
