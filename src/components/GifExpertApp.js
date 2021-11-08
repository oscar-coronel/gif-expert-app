import { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

const GifExpertApp = ({ title }) => {
    const [categories, setCategories] = useState(['One Punch'])

    const handleAddCategory = (newValue) => {
        setCategories( cats => [ newValue, ...cats ] )
    }

    return <>
        <h2>{ title }</h2>
        <AddCategory handleAddCategory={ handleAddCategory } />
        <hr />

        <ol>
            {
                categories.map( c => 
                    <GifGrid key={ c } item={ c } /> 
                )
            }
        </ol>
    </>
}

GifExpertApp.propTypes = {
    title: PropTypes.string.isRequired
}

GifExpertApp.defaultProps = {
    title: 'GifExpertApp'
}

export default GifExpertApp