import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../ui';

const BUTTONS = {
  anger: {
    emoji: '😠',
  },
  disgust: {
    emoji: '😟',
  },
  fear: {
    emoji: '😨',
  },
  happiness: {
    emoji: '😌️',
  },
  neutral: {
    emoji: '😐',
  },
  sadness: {
    emoji: '😔',
  },
  surprise: {
    emoji: '😱',
  },
};

export function Filters({
}) {
  return (
    <div>
      {
        Object.entries(BUTTONS).map(([emotion, data]) => (
          <Button emoji={data.emoji}>
            {emotion}
          </Button>
        ))
      }
    </div>
  );
}

Filters.propTypes = {
};
