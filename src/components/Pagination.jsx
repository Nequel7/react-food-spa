import {useContext} from "react";
import {CategoryContext} from "../context/CategoryContext";

function Pagination() {
    const {meals} = useContext(CategoryContext)

    const maxPages = Math.ceil(meals.length / 12);
    const pages = Array.from({length: maxPages}, (_, index) => index + 1);
    const currentPage = 1;

    return (
        <ul className="pagination">
            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            {
                pages.map((page) => {
                    return <li key={page} className={page===currentPage? "active": "waves-effect"}><a href="#!">{page}</a></li>
                })
            }
            <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
    );
}

export {Pagination};