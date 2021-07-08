import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions/categoriesActions';
import CategoryCard from './CategoryCard';

const ShowAndDeleteCategories = () => {

    const dispatch = useDispatch()

    const categoriesList = useSelector(state => state.categories.categories)
    const reloaded = useSelector(state => state.categories.reloaded)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch, reloaded])

    return (
        <div>
            {categoriesList.map((e)=>( 
            <CategoryCard name={e.name} description={e.description} id={e.id} image={e.image} />
            ))}
        </div>
    )
}

export default ShowAndDeleteCategories
