import { Link } from "react-router-dom";

const Home = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to={`/author`}>Autoren</Link>
                </li>
                <li>
                    <Link to={`news`}>News</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Home;