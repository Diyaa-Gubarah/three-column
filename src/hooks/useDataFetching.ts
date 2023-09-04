// useDataFetching.tsx

import { DataItem, setData } from '../redux/slices/dataSlice';
import { useEffect, useState } from 'react';

import { fetchData } from '../api';
import { useAppDispatch } from '.';

const useDataFetching = <T>(endpoint: string) => {
    const dispatch = useAppDispatch()

    // const [data, setFetchData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        fetchData<T>(endpoint)
            .then((result) => {
                // setFetchData(result);
                setLoading(false);
                setError(null);
                dispatch(setData(result as DataItem[]));

            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [endpoint]);

    return { loading, error };
};

export default useDataFetching;
