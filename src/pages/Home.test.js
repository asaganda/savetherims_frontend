import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

const MockHome = () => {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
}

it('renders the submit button', () => {
    render(<MockHome />);
    const submitBtn = screen.getByText('Submit')
    expect(submitBtn).toBeInTheDocument();
});
