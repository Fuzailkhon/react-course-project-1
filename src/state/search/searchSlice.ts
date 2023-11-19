import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISearchListState {
  values: string[];
  currentValue: string
}

const searchListState = JSON.parse(localStorage.getItem('search') || 'null');

const initialState: ISearchListState = {
  values: searchListState === null ? [] : searchListState,
  currentValue: ''
};

const searchListSlice = createSlice({
  name: 'searchList',
  initialState,
  reducers: {
    addSearchVal(state, action: PayloadAction<string>) {
      console.log(state.values);
      if (action.payload !== ''){
        state.currentValue = action.payload
      }
      if (!state.values.includes(action.payload)) {
        state.values.push(action.payload);
      }

    },
  },
});
export const { addSearchVal } = searchListSlice.actions;
export default searchListSlice.reducer;
