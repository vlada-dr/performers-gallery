import { types } from 'mobx-state-tree';

export const Emotion = types.model('Emotion', {
  id: types.number,
  sadness: types.number,
  neutral: types.number,
  disgust: types.number,
  anger: types.number,
  surprise: types.number,
  fear: types.number,
  happiness: types.number,
});
