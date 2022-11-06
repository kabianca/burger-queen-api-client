import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('full app rendering/navigating', () => {
    render(<App />);
    const linkElementLogin = screen.getByText(/Não possui conta/i);

    test('should go to SignUp', () => {
        expect(linkElementLogin).toBeInTheDocument();
        fireEvent.click(screen.getByText('Cadastre-se'));
        expect(screen.getByText(/Já possui conta/i)).toBeInTheDocument();
    })
});
