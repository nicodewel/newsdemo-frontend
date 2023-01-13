import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "./newsSlice";

const News = () => {

    let news = useSelector(state => state.news.news);
    const dispatch = useDispatch();

    return (
        <div>
            <button className="btn btn-primary" onClick={() => dispatch(getAllNews())}>
                Load News
            </button>
            <h1>NEWS</h1>
            {news ? news.map(n =>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {n.title}
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {n.authors.map(a => a.name).join(" ")}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

        </div>
    )

};

export default News;