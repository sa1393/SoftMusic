import React from 'react';
import './musicBar.css';
//...
//<PlayCircleOutline fontSize="large" color="primary" className="player-icon icon" ></PlayCircleOutline>
//


import { PlayCircleOutline, SkipPrevious, SkipNext } from '@material-ui/icons';

function MusicPlay() {
    console.log("??");

    console.log(audioFile.src);
    audioFile.play().catch(error => {
        console.log(error);
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

                    <button onClick={MusicPlay} className="music-btn">
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