import React from 'react';
import {
  AngerIcon, DisgustIcon, FearIcon, HappinessIcon,
  NeutralIcon, SadIcon, SurpriseIcon,
} from './ui/icons';


export const EMOTIONS = {
  anger: {
    emoji: '😠',
    gradient: 'to right, #F66565 0%, #fda085 51%, #f6d365 100%',
    image: 'https://s.tcdn.co/c2b/583/c2b583cc-71f2-3f42-935b-9a9c7ac16fc5/11.png',
    shadow: 'rgba(229, 66, 10, 0.75)',
    icon: <AngerIcon />,
  },
  disgust: {
    emoji: '😟',
    gradient: 'to right, #1D2B64 0%, #F8CDDA 51%, #1D2B64 100%',
    image: 'https://s.tcdn.co/c2b/583/c2b583cc-71f2-3f42-935b-9a9c7ac16fc5/17.png',
    shadow: 'rgba(126, 52, 161, 0.75)',
    icon: <DisgustIcon />,
  },
  fear: {
    emoji: '😨',
    gradient: 'to right, #bfd9fe 0%, #50A7C2 51%, #bfd9fe 100%',
    image: 'https://s.tcdn.co/c2b/583/c2b583cc-71f2-3f42-935b-9a9c7ac16fc5/28.png',
    shadow: 'rgba(49, 196, 190, 0.75)',
    icon: <FearIcon />,
  },
  happiness: {
    emoji: '😌️',
    gradient: 'to right, #f6d365 0%, #fda085 51%, #f6d365 100%',
    image: 'https://s.tcdn.co/c2b/583/c2b583cc-71f2-3f42-935b-9a9c7ac16fc5/2.png',
    icon: <HappinessIcon />,
    shadow: 'rgba(252, 104, 110, 0.75)',
  },
  neutral: {
    emoji: '😐',
    gradient: 'to right, #fda085 0%, #fcb69f 51%, #fda085 100%',
    image: 'https://s.tcdn.co/c2b/583/c2b583cc-71f2-3f42-935b-9a9c7ac16fc5/14.png',
    shadow: 'rgba(252, 104, 110, 0.75)',
    icon: <NeutralIcon />,
  },
  sadness: {
    emoji: '😔',
    gradient: 'to right, #a1c4fd 0%, #B9B6E5 51%, #a1c4fd 100%',
    image: 'https://s.tcdn.co/c2b/583/c2b583cc-71f2-3f42-935b-9a9c7ac16fc5/9.png',
    shadow: 'rgba(65, 132, 234, 0.75)',
    icon: <SadIcon />,
  },
  surprise: {
    emoji: '😱',
    gradient: 'to right, #e0c3fc 0%, #8ec5fc 51%, #e0c3fc 100%',
    image: 'https://s.tcdn.co/c2b/583/c2b583cc-71f2-3f42-935b-9a9c7ac16fc5/3.png',
    shadow: 'rgba(126, 52, 161, 0.75)',
    icon: <SurpriseIcon />,
  },
  'No filters': {
    gradient: 'to right, #6b8cce 0%, #a2b6df 51%, #6b8cce 100%',
    shadow: 'rgba(126, 52, 161, 0.75)',
  },
};
