import PropTypes from 'prop-types';
import { GalleryPhoto } from './GalleryPhoto';

export const GalleryRoot = {
  count: PropTypes.number.isRequired,
  lastPhotoId: PropTypes.number.isRequired,
  emotion: PropTypes.string,
  photos: PropTypes.arrayOf(PropTypes.shape(GalleryPhoto)),
};
