import PropTypes from 'prop-types'

const GifGridItem = ({ title, url }) => {

    return <>
        <div className="div-img animate__animated animate__fadeInTopLeft">
            <img src={ url } alt={ title } />
        </div>
    </>

}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired
}

GifGridItem.defaultProps = {
    title: ''
}

export {
    GifGridItem as default
}