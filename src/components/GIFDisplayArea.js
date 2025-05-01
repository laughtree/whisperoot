import { sendMessage } from "../utils/messageUtils";
import IconButton from "./IconButton";

function GIFDisplayArea({ gifs, roomCode }) {
    return (
    <div className="gif-display-area">
        {gifs
            ?<div className="gifs-container">
                {gifs.map((gif, index) => (
                <IconButton iconPath={gif.url} onClick={async ()=>{
                    const success = await sendMessage(roomCode, "", [], [], [gif.url]);
                }}/>
            ))}
            </div>
            : <div className="no-gif">No GIFs found</div>}
    </div>
    );
}

export default GIFDisplayArea;