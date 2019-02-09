import PropTypes from 'prop-types';
import { Attributes } from './Attributes';

export const GalleryPhoto = {
  id: PropTypes.number.isRequired,
  photoUrl: PropTypes.string.isRequired,
  facesFound: PropTypes.arrayOf(PropTypes.shape(Attributes)),
  timeCreated: PropTypes.string.isRequired,
};
