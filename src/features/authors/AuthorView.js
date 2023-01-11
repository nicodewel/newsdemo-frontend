import { useDispatch, useSelector } from "react-redux"
import { getAllAuthors } from "./authorActions";

const AuthorView = () => {

    const dispatch = useDispatch();
    const authors = useSelector(state => state.authors);
    return (
        <div>
            <button onClick={() => dispatch(getAllAuthors())}>
                Load Authors
            </button>
            {
                authors ? authors.map((author) => { return <div>{author}</div> })
                    : null
            }
        </div>
    )
}

export default AuthorView;