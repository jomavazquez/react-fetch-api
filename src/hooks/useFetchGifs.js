// -----------------------------------------------------------
// React libreries
// -----------------------------------------------------------
import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category, limit ) => {

    const [ state, setState ] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
         getGifs( category, limit )
             .then( img => 

                setTimeout(() => {
                    setState({
                        data: img,
                        loading: false
                        }
                    ) 

                }, 200)

             )
    }, [ category ]);    

    return state; // { data: [], loading: true }

}