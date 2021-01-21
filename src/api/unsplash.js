import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bNsqM8WWGhubeMDtR-WlRgxtxx48qEPE2qtZ6OXEUls'
    } 
});
