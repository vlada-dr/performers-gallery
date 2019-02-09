import PropTypes from 'prop-types';
import { Emotion } from './Emotion';

export const Attributes = {
  id: PropTypes.number.isRequired,
  emotion: PropTypes.shape(Emotion),
  castEmotion: PropTypes.string.isRequired,
};
