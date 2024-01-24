export const getGifs = async (category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=lwi0Y9ul4oNJKl6ZSBy0xspmYU6Tq3vs&q=${category}&limit=10`;

    const resp= await fetch( url );
    const {data} = await resp.json();
    //imgUrl = data[0].images.original.url;

    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url
    }));

    //console.log(gifs);
    return gifs;
}
