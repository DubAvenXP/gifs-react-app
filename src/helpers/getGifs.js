export const getGifs = async (category) => {
    const apiKey = "your_api_key";
    const baseUrl = "https://api.giphy.com/v1/gifs/search"
    const url = `${baseUrl}?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const response = await fetch(url);
    const { data } = await response.json();
    
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
    }))
    
    return gifs;
}
