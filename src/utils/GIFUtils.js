const API_KEY = "AIzaSyBupX8LxAI7VxufF5KxPQajnU1PR0xsm4g";

async function searchGifs(text) {
    const url = `https://tenor.googleapis.com/v2/search?q=${text}&key=${API_KEY}&client_key=whisperoot&limit=8`
    try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log("JSON: ", json);
        // console.log("Results: ", json.results);
        const data = json.results;
        const gifs = [];
        if (data) {
            data.forEach((gif) => {
                gifs.push({
                    id: gif.id,
                    url: gif.media_formats.gif.url,
                });
            });
            // console.log("GIFs found in func: ", gifs);
            return gifs;
        }
        else {
            console.log("No GIFs found");
            return [];
        }
    } catch (error) {
        console.error("Error fetching GIFs:", error);
        return [];
    }
}

export { searchGifs };