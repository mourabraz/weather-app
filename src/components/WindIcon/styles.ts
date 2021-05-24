import styled from 'styled-components';

interface WindIconProps {
  direction: number;
}

export const Container = styled.span<WindIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    /* 180 = this is necessary to adjust WiWindDeg icon to the right diretion*/
    transform: rotate(${props => `${Math.abs(180 - props.direction)}deg`});
  }
`;
