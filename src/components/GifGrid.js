// -----------------------------------------------------------
// React libreries
// -----------------------------------------------------------
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
// -----------------------------------------------------------

export const GifGrid = ( { category, limit } ) => {

    const { data:images, loading } = useFetchGifs( category, limit );

    return (
        <>
            <h3>{ category }</h3>
            {
                loading && <p><img src="/assets/loading.gif" alt="Loading..." /></p>
            }
            <div className="card-grid animate__animated animate__fadeIn animate__delay-1s">
            {
                images.map( img => 
                    (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    )
                )
            }
            </div>
        </>
    )
}