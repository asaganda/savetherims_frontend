import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

describe('App', () => {
  it('make sure app renders', () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: [] }));

    const mockGeolocation = {
      getCurrentPosition: jest.fn()
        .mockImplementationOnce((success) => Promise.resolve(success({
          coords: {
            latitude: 51.1,
            longitude: 45.3
          }
        })))
    };

    global.navigator.geolocation = mockGeolocation;

    render(<App />)
  })
  
  it('renders the header text', () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: [] }));
    render(<App />)
    const headerElement = screen.getByText(/SaveTheRims/i);
    expect(headerElement).toBeInTheDocument();
  })

  it('get the coords', () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: [
      {_id: '63c56b4dd6402c9bd41becf8', lat: 41.0334663, lng: -74.0441364, fixed: true, __v: 0}, 
      {_id: '63c570bcd6402c9bd41becfa', lat: 41.0334549, lng: -74.0441157, fixed: false, __v: 0}
    ] }));
    
    render(<App />)
  })

});
