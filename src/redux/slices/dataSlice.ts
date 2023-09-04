import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Fields {
    [key: string]: string;
}

export interface DataItem {
    [key: string]: {
        id: number;
        overviewFields: Fields;
        detailedFields: Fields;
    };
}

interface DataState {
    data: DataItem[];
    overview1: string[]; // Add filteredOverviewData
    detail1: string[]; // Add filteredDetailedData
    overview2: string[]; // Add filteredOverviewData
    detail2: string[]; // Add filteredDetailedData
}

const initialState: DataState = {
    data: [],
    overview1: [], // Initialize filteredOverviewData
    detail1: [], // Initialize filteredDetailedData
    overview2: [], // Initialize filteredOverviewData
    detail2: [], // Initialize filteredDetailedData
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<DataItem[]>) => {
            state.data = action.payload;
        },
        setFiltered1: (state, action: PayloadAction<string>) => {
            const inputText = +action.payload;

            state.overview1 = Object.values(
                state.data[inputText]?.overviewFields || {}
            ).map(value => String(value));


            state.detail1 = Object.values(
                state.data[inputText]?.detailedFields || {}
            ).map(value => String(value));
        },


        setFiltered2: (state, action: PayloadAction<string>) => {
            const inputText = +action.payload;


            state.overview2 = Object.values(
                state.data[inputText]?.overviewFields || {}
            ).map(value => String(value));


            state.detail2 = Object.values(
                state.data[inputText]?.detailedFields || {}
            ).map(value => String(value));

        },

    },
});

export const { setData, setFiltered1, setFiltered2, } =
    dataSlice.actions;
export default dataSlice.reducer;
