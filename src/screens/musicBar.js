import React from 'react';
import './musicBar.css';

import {PlayCircleOutline, SkipPrevious, SkipNext} from '@material-ui/icons';


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
                    <SkipPrevious className="icon"></SkipPrevious>
                    <PlayCircleOutline fontSize="large" color="primary" className="player-icon icon"></PlayCircleOutline>
                    <SkipNext className="icon"></SkipNext>

                    <input type="range" id="seek-slider" max="100" value="0"></input>
                    <input type="range" id="volume-slider" max="100" value="0"></input>

                </div>
                <div className="music-system">


                </div>

                
            </div>
        )
    }
}

export default MusicBar;