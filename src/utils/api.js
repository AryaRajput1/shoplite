import axios from "axios"

const params = {
    headers: {
        Authorization: 'Bearer ' + process.env.REACT_APP_STRAPI_APP_TOKEN
    }
}

export const fetchDataFromApi = async (url) => {
    try {

        console.log('jj', process.env.REACT_APP_BASE_URL + url)
        const { data } = await axios.get(process.env.REACT_APP_BASE_URL + url, params)
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}