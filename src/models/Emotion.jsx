import PropTypes from 'prop-types';

export const Emotion = {
  id: PropTypes.number.isRequired,
  sadness: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  disgust: PropTypes.number.isRequired,
  anger: PropTypes.number.isRequired,
  surprise: PropTypes.number.isRequired,
  fear: PropTypes.number.isRequired,
  happiness: PropTypes.number.isRequired,
};
