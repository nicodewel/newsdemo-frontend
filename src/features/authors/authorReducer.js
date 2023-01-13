import { GET_AUTHORS, POST_AUTHOR } from "./authorActions";

let initialState = [];

const AuthorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTHORS:
            return action.payload;
        case POST_AUTHOR:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default AuthorReducer;