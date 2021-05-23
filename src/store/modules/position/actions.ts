import { Position } from '../../../interfaces';

export function setPosition(position: Position) {
  return {
    type: '@position/SET_POSITION',
    payload: {
      position,
    },
  };
}
