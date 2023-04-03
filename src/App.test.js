import { render, waitForElement } from '@testing-library/react';
import axios from 'axios';
import { baseURL, getCoords } from './App'
import App from './App';

// console.log(getCoords)
jest.mock("axios");

const coords = [
    { 
        _id: "63c56b4dd6402c9bd41bef78", 
        lng: -74.03903, 
        lat: 41.02881, 
        false: false
    },
    { 
        _id: "63c56b4dd6402t7bd41bef78", 
        lng: -74.05648, 
        lat: 41.95185, 
        false: false
    }
];

describe("getCoords", () => {
    it("should return coordinates data", async () => {
        axios.get.mockResolvedValue({ data: coords});
        
        // render
        render(<App />);

        // when
        const result = getCoords();

        // then
        expect(axios.get).toHaveBeenCalledWith(baseURL);
        expect(result).toEqual(coords);

    });
});