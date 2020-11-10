export const getGifs = async ( category, limit ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=${ limit }&api_key=fTnz2X7pOMy4HP6Une2FYNC288sLg00n`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.original.url
        }
    });

    return gifs;

}