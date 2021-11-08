

const getGifs = async ( item ) => {
    const dataSend = {
        api_key: 'sJ84d7bZo5N8Q1EonLJNxPwu9BJBELhd',
        q: item,
        limit: 10
    }

    const oUrl = new URL('https://api.giphy.com/v1/gifs/search')
    oUrl.search = new URLSearchParams(dataSend).toString()

    const oPeticion = fetch(oUrl)

    const response = await oPeticion.then(resp => resp.json()).catch( error => error )

    const { data } = response

    const gifs = data.map( e =>
        ({
            id: e.id,
            title: e.title,
            url: e.images.original.url
        })
    )

    return gifs
}

export {
    getGifs
}