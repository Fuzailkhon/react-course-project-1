import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

export interface ISearchListState {
  values: string[];
  currentValue: string;
  page?: number,
  limit?: number,
}

const searchListState = [''];

const initialState: ISearchListState = {
  values: searchListState === null ? [] : searchListState,
  currentValue: '',
};

const searchListSlice = createSlice({
  name: 'searchList',
  initialState,
  reducers: {
    initSearchSlice(state, action: PayloadAction<string[]>){
      if (action.payload.length){
        state.values = action.payload
      }
    },
    addSearchVal(state, action: PayloadAction<string>) {
      console.log(state.values);
      if (action.payload !== '') {
        state.currentValue = action.payload;
      }
      if (!state.values.includes(action.payload)) {
        state.values.push(action.payload);
      }
    },
    updateQueryParams(state, action: PayloadAction<{page: number, limit: number}>){
      if(action.payload.limit < 1 || action.payload.page < 1) return state
      state.limit = action.payload.limit
      state.page = action.payload.page
    }
  },
});
export const { addSearchVal, initSearchSlice } = searchListSlice.actions;
export default searchListSlice.reducer;
