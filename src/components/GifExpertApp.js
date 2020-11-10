// -----------------------------------------------------------
// React libreries
// -----------------------------------------------------------
import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( ['Kiwi'] );

    const [ limit, setLimit ] = useState( 10 );

    return (
        <>
            <h2 className="animate__animated animate__fadeIn">
                First "React" application
            </h2>
            <p>
                Please enter any word. I'm going to make a fetch to Giphy API and get some images for you.
            </p>
            <AddCategory 
                categories={ categories } setCategories={ setCategories } 
                limit={ limit } setLimit={ setLimit } 
            />
            <hr />
            <section>
            {
                categories.map( category => {
                    return <GifGrid key={ category } category={ category } limit={ limit } />
                })
            }
            </section>
        </>
    )
}