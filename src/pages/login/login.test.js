import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  expect,
  describe,
  test,
  jest,
  it,
} from '@jest/globals';
import { login } from '../../api/api';
import { Button } from '../../components/Buttons/Button.jsx';

describe('Login function', () => {
  it('should be a function', () => {
    expect(typeof login).toBe('function');
  });
});

test('calls login function when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}/>);
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
