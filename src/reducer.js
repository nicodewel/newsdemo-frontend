import counterSlice from "./features/counter/counterSlice";
import AuthorReducer from "./features/authors/authorReducer";
import { combineReducers } from "@reduxjs/toolkit";
import newsSlice from "./features/news/newsSlice";

const rootReducer = combineReducers({
    counter: counterSlice,
    authors: AuthorReducer,
    news: newsSlice,
});
export default rootReducer;