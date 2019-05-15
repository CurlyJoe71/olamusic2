import axios from 'axios';

export default {
    getLibrary: () => {
        return axios.get("/library/all/");
    }
};