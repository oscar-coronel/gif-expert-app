import PropTypes from 'prop-types'
import { useState } from 'react'

const AddCategory = ( { title, handleAddCategory } ) => {
    const [ texto, setTexto ] = useState('')

    const handleChange = (e) => {
        setTexto( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if( texto.trim() !== '' ) handleAddCategory( texto )
        setTexto( '' )
    }
    
    return <>
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ texto }
                onChange={ handleChange }
            />
        </form>
    </>

}

AddCategory.propTypes = {
    title: PropTypes.string.isRequired,
    handleAddCategory: PropTypes.func.isRequired
}

AddCategory.defaultProps = {
    title: 'Add Category'
}

export {
    AddCategory as default
}