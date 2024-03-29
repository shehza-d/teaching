// Configure the Redux store
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./reducers/bookReducer";
const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
export default store;
