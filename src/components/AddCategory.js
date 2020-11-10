// -----------------------------------------------------------
// React libreries
// -----------------------------------------------------------
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { categories, setCategories, limit, setLimit }) => {

    const [ inputValue, setInputValue ] = useState('');
    
    // ----------------------
    // Button onChange method
    // ----------------------
    const handleInput = (e) =>{
        setInputValue(e.target.value);
    }

    // ----------------------
    // Select onChange method
    // ----------------------
    const handleSelect = (e) =>{
        setLimit(e.target.value);
    }

    // --------------------
    // Form onSubmit method
    // --------------------
    const handleForm = (e) => {
        e.preventDefault();

        let myValue = inputValue.trim();

        if( myValue.length > 2 ){

            if( !categories.includes(myValue) ){
                setCategories( cats => [myValue, ...cats] );
            }
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleForm }>
            <input 
                value={ inputValue } 
                type="text"
                onChange={ handleInput }
            />
            <select
                defaultValue={ limit } 
                onChange={ handleSelect }>
                    <option>5</option>
                    <option>10</option>
                    <option>20</option>
            </select>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}