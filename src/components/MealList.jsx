import {Meal} from './Meal'
import {Pagination} from "./Pagination";
import {CategoryContext} from "../context/CategoryContext";
import {useContext} from "react";
import {useLocation} from 'react-router-dom';


function MealList() {
    const {meals} = useContext(CategoryContext);
    const {search} = useLocation();
    const currentPage = Number(search.split('=')[1]);
    const pageMeals = !currentPage ? meals.slice(0,12): meals.slice((currentPage-1)*12,currentPage*12);
    // console.log(search)

    return (
        <>
            <div className="list">
                {pageMeals.map(meal => (
                    <Meal key={meal.idMeal} {...meal}/>
                ))}
            </div>
            <Pagination/>
        </>

    );
}

export {MealList};