import axios from 'axios';

const API_URL = `${process.env.API_URL}`;

async function get(url: string) {
    try {
        const response = await axios.get(`${API_URL}/${url}`);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
}

export default {
    get
};
