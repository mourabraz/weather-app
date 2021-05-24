import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: ${Colors.primaryText};
  margin: 0 auto;

  h1 {
    font-weight: normal;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;

    & + div {
      padding-left: 32px;
    }

    p {
      display: flex;
    }

    svg {
      align-self: center;
    }
  }
`;

export const TemperatureInfo = styled.div`
  min-width: 136px;

  p {
    justify-content: space-between;
    margin-bottom: 8px;
    span {
      margin-left: 8px;
    }
  }
`;

export const SunMoonInfo = styled.div`
  min-width: 176px;

  p {
    justify-content: space-between;
    margin-bottom: 8px;
    span {
      margin-left: 8px;
    }
  }
`;

export const OtherInfo = styled.div`
  min-width: 216px;

  p {
    justify-content: space-between;
    margin-bottom: 8px;
    span {
      margin-left: 8px;
      display: flex;
      align-items: center;
    }
  }
`;

export const WindInfo = styled.div`
  min-width: 100px;
  align-items: center;
`;
