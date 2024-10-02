import {useParams, useNavigate, useLocation} from 'react-router-dom';
import {useEffect, useContext} from 'react';
import {getFilteredCategory} from '../api';
import {Preloader} from '../layout/Preloader';
import {MealList} from '../components/MealList';
import {CategoryContext} from "../context/CategoryContext";

function Category() {
    const {name} = useParams();
    // const [meals, setMeals] = useState([]);
    const {meals, setMeals} = useContext(CategoryContext);
    const navigate = useNavigate();


    useEffect(() => {
        getFilteredCategory(name).then((data) => {
            return setMeals(data.meals);
        });
        // eslint-disable-next-line
    }, [name]);

    return (
        <>

            <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
            {!meals?.length ? <Preloader/> : <MealList/>}

        </>
    );

}

export {Category}