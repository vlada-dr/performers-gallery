import { css } from 'styled-components';

const sizes = {
  pho: {
    max: 767,
  },
  tab: {
    min: 768,
    max: 1191,
  },
  desktop: {
    min: 1192,
  },
};

const getMedia = ({ min, max }) => {
  if (!min) {
    return `@media (max-width: ${max}px)`;
  }

  if (!max) {
    return `@media (min-width: ${min}px)`;
  }

  return `@media (min-width: ${min}px) and (max-width: ${max}px)`;
};

export const media = Object.entries(sizes).reduce((acc, [name, value]) => {
  acc[name] = (...args) => css`
    ${getMedia(value)} {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
