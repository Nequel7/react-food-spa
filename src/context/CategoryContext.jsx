import {createContext, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export const CategoryContext = createContext();

export const CategoryContextProvider = (props) => {
    const [meals, setMeals] = useState([]);
    const [page, setPage] = useState(1);
    const maxPages = Math.ceil(meals.length / 12);
    const {pathname, search} = useLocation();
    const push = useNavigate();

    const handlePage = (page) => {
        setPage(page);
        push({
            pathname,
            search: `?page=${page}`
        })

    };

    const incPage = (page) => {
        if (page < maxPages) {
            handlePage(page + 1);
        }
    };

    const decPage = (page) => {
        if (page > 1) {
            handlePage(page - 1);
        }
    };


    const value = {
        meals,
        setMeals,
        page,
        setPage,
        maxPages,
        handlePage,
        incPage,
        decPage,
    };

    return (
        <>
            <CategoryContext.Provider value={value}>
                {props.children}
            </CategoryContext.Provider>
        </>

    );

}