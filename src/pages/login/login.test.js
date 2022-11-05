import { login } from '../../api/api';
import ButtonSignin from '../../components/buttonSignin/buttonSigin';
import {render, screen, fireEvent} from '@testing-library/react'

describe('Login function', () => {
  it('should be a function', () => {
    expect(typeof login).toBe('function')
  });
});

test('calls login function when clicked', () => {
  const handleClick = jest.fn()
  render(<ButtonSignin onClick={handleClick}>ENTRAR</ButtonSignin>)
  fireEvent.click(screen.getByText(/entrar/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
});