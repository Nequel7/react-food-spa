import {useContext} from "react";
import {CategoryContext} from "../context/CategoryContext";
import {useLocation} from "react-router-dom";

function Pagination() {
    const {
        maxPages,
        handlePage = Function.prototype,
        incPage = Function.prototype,
        decPage = Function.prototype
    } = useContext(CategoryContext)
    const pages = Array.from({length: maxPages}, (_, index) => index + 1);
    const {search} = useLocation();
    const currentPage = Number(search.split('=')[1] || 1);
    // console.log(currentPage)

    return (
        <ul className="pagination">
            <li className={currentPage === 1 ? "disabled" : "waves-effect"}>
                <a onClick={() => decPage(currentPage)}><i
                    className="material-icons">chevron_left</i>
                </a>
            </li>
            {
                pages.map((page) => {
                    return <li key={page} className={page === currentPage ? "active" : "waves-effect"}>
                        <a onClick={() => handlePage(page)}>
                            {page}
                        </a>
                    </li>
                })
            }
            <li className={currentPage === maxPages ? "disabled" : "waves-effect"}>
                <a onClick={() => incPage(currentPage)}>
                    <i className="material-icons">chevron_right</i>
                </a>
            </li>
        </ul>
    );
}

export {Pagination};