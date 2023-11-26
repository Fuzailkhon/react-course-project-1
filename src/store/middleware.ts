import { createListenerMiddleware } from '@reduxjs/toolkit';
import { addSearchVal } from './Features/searchSlice';
import type { RootState } from './store';

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  actionCreator: addSearchVal,
  effect: (action, listenerApi) => {
    console.log(action);
    localStorage.setItem(
      'search',
      JSON.stringify((listenerApi.getState() as RootState).searchList.values)
    );
  },
});
