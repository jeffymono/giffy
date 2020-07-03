export const getGif= (keyword='morty')=>{
    const APIKEY = 'HjqEkGYOaAffLRRgyL0eW8cpjU0z13Ec&q'
    const APIURL = [`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}=${keyword}&limit=10&offset=0&rating=g&lang=en`]
    return(
    fetch(APIURL)
    .then(response=>response.json())
    .then(result=>{
      const {data} = result
      const gifs = data.map(image=>image.images.downsized_medium.url)
      return gifs
    })
    )
}