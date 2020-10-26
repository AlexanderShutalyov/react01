import React from 'react';

export const element1 = React.createElement(
  'div',
  {className: 'elementClass'},
  'Hey JSX',
);

export const element2 = {
  type: 'div',
  props: {
    className: 'elementClass',
    children: 'Hey JSX'
  }
};