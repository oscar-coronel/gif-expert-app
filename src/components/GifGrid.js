import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ item }) => {

    const { data: images, loading } = useFetchGifs(item)
    
    return <>
        <div className="card-grid">
            <h4>{ item }</h4>
            { loading && <p className="
                                animate__animated 
                                animate__infinite 
                                animate__slower 
                                animate__flash
                            "
                          >
                            Cargando...
                          </p> 
            }
            <div className="img-content">
                {
                    images.map( image => 
                        <GifGridItem  
                            key={ image.id } 
                            { ...image } 
                        /> 
                    )
                }
            </div>
        </div>
    </>

}

GifGrid.propTypes = {
    item: PropTypes.string.isRequired
}

export {
    GifGrid as default
}