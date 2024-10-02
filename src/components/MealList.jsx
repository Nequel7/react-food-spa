import {Meal} from './Meal'
import {Pagination} from "./Pagination";
import {CategoryContext} from "../context/CategoryContext";
import {useContext} from "react";

function MealList() {
    const {meals} = useContext(CategoryContext);
    return (
        <>
            <div className="list">
                {meals.map(meal => (
                    <Meal key={meal.idMeal} {...meal}/>
                ))}
            </div>
            <Pagination/>
        </>

    );
}

export {MealList};