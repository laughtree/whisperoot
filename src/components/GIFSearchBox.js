import InputBox from "./InputBox";
import IconButton from "./IconButton";
import { searchGifs } from "../utils/GIFUtils";
import { useState, useEffect } from "react";
import GIFDisplayArea from "./GIFDisplayArea";

function GIFSearchBox({show, roomCode}) {
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
                        searchGifs(e.target.value).then((searchedGIFs) => {
                            console.log("GIFs found: ", searchedGIFs);
                            setGifs(searchedGIFs);
                        }).catch((error) => {
                            console.error("Error searching GIFs: ", error);
                            setGifs([]);
                        });
                    } else {
                        setGifs([]);
                    }
                }}
                value={searchText}
            />
            <div className="display-area">
                <GIFDisplayArea gifs={gifs} roomCode={roomCode} />
            </div>
            
        </div>
    )
}

export default GIFSearchBox;