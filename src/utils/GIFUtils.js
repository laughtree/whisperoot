const API_KEY = "AIzaSyBupX8LxAI7VxufF5KxPQajnU1PR0xsm4g";

async function searchGifs(text) {
    const url = `https://tenor.googleapis.com/v2/search?q=${text}&key=${API_KEY}&client_key=whisperoot&limit=8`
    try {
        const response = await fetch(url);
        const data = await response.json().results;
        const gifs = [];
        if (data) {
            data.forEach((gif) => {
                gifs.push({
                    id: gif.id,
                    url: gif.media[0].gif.url,
                });
            });
            return gifs;
        }
    } catch (error) {
        console.error("Error fetching GIFs:", error);
        return [];
    }
}

export { searchGifs };