import React from 'react'
import {render} from '@testing-library/react'
import App from './App'
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<App />)
    
    expect(asFragment(<App />)).toMatchSnapshot()
   })


// import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';
// import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import React from 'react';
// import App from './App';

// describe('full app rendering/navigating', () => {   
    // render(<App />);
    // const linkElementLogin = screen.getByText(/Não possui conta/i);
    // const linkElementRegister = screen.getByText(/Já possui conta/i);

    // test('should go to SignUp', () => {
    //     expect(linkElementLogin).toBeInTheDocument();
    //     fireEvent.click(screen.getByText('Cadastre-se'));
    //     expect(screen.getByText(/Já possui conta/i)).toBeInTheDocument();
    // })

    // test('should go to Register', () => {
    //     expect(linkElementRegister).toBeInTheDocument();
    //     fireEvent.click(screen.getByText('Já possui conta'));
    //     expect(screen.getByText(/Cadastre-se/i)).toBeInTheDocument();
    // })

// });
