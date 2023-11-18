import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISearchListState {
  value: string[];
}

const initialState: ISearchListState = {
  value: [],
};

const searchListSlice = createSlice({
  name: 'searchList',
  initialState,
  reducers: {
    addSearchVal(state, action: PayloadAction<string>) {
      if (!state.value.includes(action.payload)) {
        state.value.push(action.payload);
      }
    },
  },
});
export const { addSearchVal } = searchListSlice.actions
export default searchListSlice.reducer;
