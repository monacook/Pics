import axios from 'axios';

export default axios.create({
     baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 34226e653f2e5fb09d7f12ff4b343d1d3c1e3306a2a33178a362ca1a12ab4964',
} 
});