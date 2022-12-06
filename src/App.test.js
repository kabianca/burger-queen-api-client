import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {
   expect,
   it,
 } from '@jest/globals';

it('should take a snapshot', () => {
   const { asFragment } = render(<App />);
   
   expect(asFragment(<App />)).toMatchSnapshot()
})