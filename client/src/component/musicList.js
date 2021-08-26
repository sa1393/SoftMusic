import React from "react";
import "../css/musicList.css";
import DownloadButton from "./downloadButton";


let MusicList = ({music})=>{

    return(
        <div> 
            {
                music.map(music => (
                    <DownloadButton id={music.id.videoId} type="mp3" img={music.snippet.thumbnails.default.url}/>
                ))
            }
        </div>
    )
}

export default MusicList;
