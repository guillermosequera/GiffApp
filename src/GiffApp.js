import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiffApp = () => {

    
    const [categories, setCategories] = useState(['One Punch']);


    return (
        <>
        <h2> GiffApp </h2>
            <AddCategory setCategories={ setCategories } />
            <hr /> 

            

            <ol>
               { 
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    
                    )
                }
            </ol>
        </>
        
    )
}

export default GiffApp;