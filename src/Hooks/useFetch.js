import { useState, useEffect } from 'react';

export default function useFetch(url, options = {}) {
    let [done, setDone] = useState(false);
    let [data, setData] = useState(null);
    let [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, options)
        .then(response => response.text())
        .then(text => setData(text))
        .catch(e => setError(e))
        .finally(() => setDone(true))
        
    }, []);

    return {done, data, error};
}