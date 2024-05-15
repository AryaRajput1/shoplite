import axios from "axios"

const params = {
    headers: {
        Authorization: 'Bearer ' + process.env.REACT_APP_STRAPI_APP_TOKEN
    }
}

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(process.env.REACT_APP_BASE_URL + url, params)
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const makePaymentRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: 'bearer '+ process.env.REACT_APP_STRAPI_APP_TOKEN
    }
})