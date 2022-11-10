import { createUser } from '../../api/api';
import {ButtonSignin} from '../../components/Buttons/Buttons';
import {render, screen, fireEvent} from '@testing-library/react';

describe('createUser function', () => {
  it('should be a function', () => {
    expect(typeof createUser).toBe('function')
  });
});

test('calls register function when clicked', () => {
  const handleClick = jest.fn()
  render(<ButtonSignin onClick={handleClick}>CADASTRAR</ButtonSignin>)
  fireEvent.click(screen.getByText(/cadastrar/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
});