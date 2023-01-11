import { GET_AUTHORS, POST_AUTHOR } from "./authorActions";

let initialState = {
    authors: [],
};

const AuthorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTHORS:
            nextState = { authors: action.payload };
            return nextState;
        case POST_AUTHOR:
            nextState = { authors: [...authors, action.payload] };
            return nextState;
    }
}