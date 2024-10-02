import {createContext, useState} from "react";

export const CategoryContext = createContext();

export const CategoryContextProvider = (props) => {
    const [meals, setMeals] = useState([]);
    const [page, setPage] = useState(1);


    const value = {
        meals,
        setMeals,
        page,
        setPage
    };

    return (
        <>
            <CategoryContext.Provider value={value}>
                {props.children}
            </CategoryContext.Provider>
        </>

    );

}