import React from 'react';
import './musicBar.css';

import {PlayCircleOutline, SkipPrevious, SkipNext} from '@material-ui/icons';
function MusicPlay(){
    console.log("??")

    let audioFile = new Audio('../../resource/music1.mp3');
    console.log(audioFile);
    audioFile.play().catch(error => {
        //  when an exception is played, the exception flow is followed 
    });
}


class MusicBar extends React.Component {
    render() {
        return (
            <div className="music_front_bar">
                <div className="music-info">
                    <div className="music-img-space">
                        <div className="music-img">

                        </div>
                    </div>
                    <div className="music-user">
                        <span>노래 제목</span>
                        <span>가수</span>
                        
                    </div>
                </div>  
                <div className="music-play-container">
                    <audio className="music-play">

                    </audio>
                    <SkipPrevious className="icon"></SkipPrevious>

                    <button onClick={MusicPlay}>
                    <PlayCircleOutline fontSize="large" color="primary" className="player-icon icon" ></PlayCircleOutline> 
                    </button>
                   
      
                    <SkipNext className="icon"></SkipNext>

                    <input type="range" className="seek-slider" max="100" ></input>
                    <input type="range" className="volume-slider" max="100" ></input>

                </div>
                <div className="music-system">


                </div>

                
            </div>
        )
    }
}

export default MusicBar;