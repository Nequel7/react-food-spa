import {CategoryItem} from './CategoryItem';

function CategoryList({catalog=[]}){
    return(
        <div className='list'>
            {
                catalog.map((item)=>{
                    return <CategoryItem key={item.idCategory} {...item}/>
                })
            }
        </div>
    );
}
export {CategoryList};