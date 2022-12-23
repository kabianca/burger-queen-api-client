import React from 'react';
import { render } from '@testing-library/react';

import {
  expect,
  it,
} from '@jest/globals';
import App from './App';

it('should take a snapshot', () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});
