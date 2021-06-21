import { atom } from 'recoil';

export const positionState = atom<number>({
  key: 'positionState',
  default: 0,
});
