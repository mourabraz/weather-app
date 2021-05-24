import React from 'react';
import { IconBaseProps } from 'react-icons';
import {
  WiMoonFirstQuarter,
  WiMoonFull,
  WiMoonNew,
  WiMoonThirdQuarter,
  WiMoonWaningCrescent1,
  WiMoonWaningCrescent2,
  WiMoonWaningCrescent3,
  WiMoonWaningCrescent4,
  WiMoonWaningCrescent5,
  WiMoonWaningCrescent6,
  WiMoonWaningGibbous1,
  WiMoonWaningGibbous2,
  WiMoonWaningGibbous3,
  WiMoonWaningGibbous4,
  WiMoonWaningGibbous5,
  WiMoonWaningGibbous6,
  WiMoonWaxingCrescent1,
  WiMoonWaxingCrescent2,
  WiMoonWaxingCrescent3,
  WiMoonWaxingCrescent4,
  WiMoonWaxingCrescent5,
  WiMoonWaxingCrescent6,
  WiMoonWaxingGibbous1,
  WiMoonWaxingGibbous2,
  WiMoonWaxingGibbous3,
  WiMoonWaxingGibbous4,
  WiMoonWaxingGibbous5,
  WiMoonWaxingGibbous6,
} from 'react-icons/wi';

import { Colors } from '../../styles/colors';
import { Container } from './styles';

function getMoonPhaseIdx(val: number) {
  if (val % 25 === 0) {
    return (val / 25) * 7;
  }
  let temp = val - 1;
  temp -= Math.trunc(val / 25);
  temp = Math.trunc(temp / 4);
  temp += Math.trunc(val / 25) + 1;

  return temp;
}

const PhaseIconList: { [key: string]: React.ComponentType<IconBaseProps> } = {
  '0': WiMoonNew,
  '1': WiMoonWaxingCrescent1,
  '2': WiMoonWaxingCrescent2,
  '3': WiMoonWaxingCrescent3,
  '4': WiMoonWaxingCrescent4,
  '5': WiMoonWaxingCrescent5,
  '6': WiMoonWaxingCrescent6,
  '7': WiMoonFirstQuarter,
  '8': WiMoonWaxingGibbous1,
  '9': WiMoonWaxingGibbous2,
  '10': WiMoonWaxingGibbous3,
  '11': WiMoonWaxingGibbous4,
  '12': WiMoonWaxingGibbous5,
  '13': WiMoonWaxingGibbous6,
  '14': WiMoonFull,
  '15': WiMoonWaningGibbous1,
  '16': WiMoonWaningGibbous2,
  '17': WiMoonWaningGibbous3,
  '18': WiMoonWaningGibbous4,
  '19': WiMoonWaningGibbous5,
  '20': WiMoonWaningGibbous6,
  '21': WiMoonThirdQuarter,
  '22': WiMoonWaningCrescent1,
  '23': WiMoonWaningCrescent2,
  '24': WiMoonWaningCrescent3,
  '25': WiMoonWaningCrescent4,
  '26': WiMoonWaningCrescent5,
  '27': WiMoonWaningCrescent6,
  '28': WiMoonNew,
};

export const MoonPhase: React.FC<{
  phase: number;
  size?: number;
  style?: React.CSSProperties;
}> = ({ phase, size = 20, style }) => {
  const Icon: React.ComponentType<IconBaseProps> =
    PhaseIconList[String(getMoonPhaseIdx(phase * 100))];

  return (
    <Container style={style}>
      <Icon color={Colors.textIcons} size={size} />
    </Container>
  );
};
