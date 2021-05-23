import styled from 'styled-components';
import { Colors } from '../../styles/colors';

interface WindIconProps {
  direction: number;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: ${Colors.primaryText};
  min-width: 1020px;
  margin: 0 auto;

  h1 {
    font-weight: normal;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px 16px;

  p {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin-bottom: 8px;

    span {
    }
  }
`;

export const WindIcon = styled.span<WindIconProps>`
  svg {
    /* 180 + 45 = this is necessary to adjust FiNavigation icon to the right diretion*/
    transform: rotate(${props => `${Math.abs(180 + 45 - props.direction)}deg`});
  }
`;
