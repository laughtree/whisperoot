import InputBox from "./InputBox";
import IconButton from "./IconButton";
import { searchGifs } from "../utils/GIFUtils";
import { useState, useEffect } from "react";

function GIFSearchBox({show}) {
    const [gifs, setGifs] = useState([]);
    const [searchText, setSearchText] = useState("");

    return (
        <div className="gif-search-box" style={{ display: show ? "block" : "none" }}>
            <InputBox
                hint="Search GIFs"
                className="gif-search-input"
                onChange={async (e) => {
                    setSearchText(e.target.value);
                    if (e.target.value.length > 2) {
                        const searchedGIFs = await searchGifs(e.target.value);
                        console.log("GIFs found: ", searchedGIFs);
                        setGifs(searchedGIFs);
                    } else {
                        setGifs([]);
                    }
                }}
                value={searchText}
            />
            <div className="display-area">
                {gifs.map((gif) => (
                    <IconButton
                        key={gif.id}
                        iconPath={gif.url}
                        onClick={() => {
                            console.log("Selected GIF: ", gif.url);
                            setSearchText("");
                            setGifs([]);
                        }}
                        className="gif-icon-button"
                    />
                ))}
            </div>
            
        </div>
    )
}

export default GIFSearchBox;