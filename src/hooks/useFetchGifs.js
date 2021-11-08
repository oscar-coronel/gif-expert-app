import { useState, useEffect } from 'react'
import { getGifs } from './../helpers/functions'

const useFetchGifs = (item) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(item)
            .then(
                gifs => setTimeout(() => {
                    setState({
                        data: gifs,
                        loading: false
                    })
                }, 3000)
            )
    }, [item])

    return state
}


export {
    useFetchGifs
}