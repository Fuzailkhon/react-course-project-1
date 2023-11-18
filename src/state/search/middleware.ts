import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addSearchVal } from "./searchSlice";
import type { RootState } from "../store";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(addSearchVal),
  effect: (listenerApi) =>
    localStorage.setItem(
      "search",
      JSON.stringify((listenerApi.getState() as RootState).searchList)
    )
});