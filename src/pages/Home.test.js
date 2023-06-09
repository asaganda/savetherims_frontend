import { fireEvent, render, screen } from '@testing-library/react';
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

// it('clicking submit to record new pothole', () => {
//     const mockedHandleGeolocate = jest.fn()
//     render(<MockHome />)
//     const submitBtn = screen.getByText('Submit')
//     fireEvent.click(submitBtn);
//     expect(mockedHandleGeolocate).toHaveBeenCalled()
//     // handleGeolocate function invoked - we should mock this
//         // geolocate function gets invoked which inside has a few functions inside
//     // expect to get mock current position
//     // expect to create a new mock record
// })