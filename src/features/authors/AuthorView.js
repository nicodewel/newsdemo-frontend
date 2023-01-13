import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { getAllAuthors, postAuthor } from "./authorActions";

const AuthorView = () => {

    const dispatch = useDispatch();
    const authors = useSelector(state => state.authors);
    const [input, setInput] = useState("");
    const post = (e) => {
        e.preventDefault();
        dispatch(postAuthor({
            name: input
        }));
    }
    return (
        <div>

            <form>
                <div className="mb-3">
                    <label className="form-label">Author Name</label>
                    <input type="text" className="form-control" value={input} onInput={e => setInput(e.target.value)}></input>
                    <div id="emailHelp" className="form-text">Please enter a new author.</div>
                </div>

                <button type="submit" className="btn btn-primary" onClick={(e) => post(e)}>Submit</button>
            </form>
            <button className="btn btn-primary" onClick={() => dispatch(getAllAuthors())}>
                Load Authors
            </button>
            {
                authors ? authors.map((author, index) => <div key={index}>{author.name}</div>) : null
            }
        </div>
    )
}

export default AuthorView;