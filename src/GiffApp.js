import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GiffApp = () => {

    
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'HunterXHunter'] );

    //     console.log(categories);
    // }

    return (
        <h2>
            GiffApp
            <AddCategory setCategories={ setCategories } />
            <hr /> 

            

            <ol>
               { 
                    categories.map( (category, i) => {
                        return <li key={ category }> {category} </li>
                    })
                }
            </ol>

        </h2>
    )
}

export default GiffApp;