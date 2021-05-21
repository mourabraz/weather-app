import styled from 'styled-components';
import { Colors } from '../../styles/colors';

interface WindIconProps {
  direction: number;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.primaryText};

  h1 {
    font-weight: normal;
  }
`;

export const TemperatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px 0;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    margin-bottom: 8px;

    span {
      font-size: 1.6rem;
      margin: 0 8px;
    }
  }

  h3 {
    font-weight: normal;
    font-size: 1.8rem;
    margin-bottom: 8px;
  }

  p {
    font-size: 1.2rem;
    font-style: italic;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    width: 100%;
    justify-content: center;

    & + div {
      margin-top: 8px;
    }

    p {
      & + p {
        margin-left: 32px;
      }

      span {
        margin-left: 8px;
      }
    }
  }
`;

export const WindIcon = styled.span<WindIconProps>`
  svg {
    /* 180 + 45 = this is necessary to adjust FiNavigation icon to the right diretion*/
    transform: rotate(${props => `${Math.abs(180 + 45 - props.direction)}deg`});
  }
`;
