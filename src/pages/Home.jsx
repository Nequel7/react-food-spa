import {getAllCategories} from '../api';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Preloader} from '../layout/Preloader';
import {CategoryList} from '../components/CategoryList';
import {Search} from "../components/Search";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const {pathname, search} = useLocation();
    const push = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        );
        push({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search?
                data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
                ): data.categories
            );
        })
    }, [search])


    return (
        <>
            <Search handleSearch={handleSearch}/>
            {
                !catalog.length ? <Preloader/> : (
                    <CategoryList catalog={filteredCatalog}/>
                )
            }
        </>
    );
}

export {Home};