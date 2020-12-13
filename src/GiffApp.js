import React, { useState } from 'react'

const GiffApp = () => {

    
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setCategories( [...categories, 'HunterXHunter'] );

        console.log(categories);
    }

    return (
        <h2>
            GiffApp<hr /> 

            <button onClick={handleAdd}>Agregar</button>

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