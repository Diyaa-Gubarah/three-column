import { setFiltered1, setFiltered2 } from "../redux/slices/dataSlice";
import { useAppDispatch, useAppSelector } from ".";

import React from "react";

const useFilter = () => {
    const dispatch = useAppDispatch();
    const detail1 = useAppSelector(
        (state) => state.source.detail1
    );
    const overview1 = useAppSelector(
        (state) => state.source.overview1
    );
    const detail2 = useAppSelector(
        (state) => state.source.detail2
    );
    const overview2 = useAppSelector(
        (state) => state.source.overview2
    );

    const handle1 = React.useCallback(
        (text: string) => {
            dispatch(setFiltered1(text));
        },
        [dispatch]
    );

    const handle2 = React.useCallback(
        (text: string) => {
            dispatch(setFiltered2(text));
        },
        [dispatch]
    );

    return { detail1, overview1, detail2, overview2, handle2, handle1 }
}

export default useFilter