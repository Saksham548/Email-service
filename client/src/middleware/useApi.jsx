import { useState } from 'react';
import API from '../services/api';

const useApi = (urlObject) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");

    const call = async (payload) => {
        setResponse(null);
        setError("");

        try {
            let res = await API(urlObject, payload);
            setResponse(res.data);
        } catch (error) {
            setError(error.message);
        }
    }

    return { call, response, error };
}

export default useApi;