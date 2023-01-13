import { Api } from "../../myApi";
export const GET_AUTHORS = "GET_AUTHORS"
export const POST_AUTHOR = "POST_AUTHOR"

const api = new Api();

export const getAllAuthors = () => async (dispatch) => {
    const res = await api.api.getAllAuthors();
    const payload = await res.json();
    dispatch({
        type: GET_AUTHORS,
        payload: payload,
    })
}

export const postAuthor = (author) => async (dispatch) => {

    const res = await api.api.postAuthor(author);
    const payload = await res.json();

    dispatch({
        type: POST_AUTHOR,
        payload: payload
    })
}