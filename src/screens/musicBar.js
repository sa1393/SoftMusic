import React from 'react';
import './musicBar.css';

<<<<<<< HEAD
import {PlayCircleOutline, SkipPrevious, SkipNext} from '@material-ui/icons';

=======
import {Howl, Howler} from 'howler';

 
>>>>>>> 95beb86c2c20365b9fad6d04fd49abf8e2d06179

class MusicBar extends React.Component {
    render() {
        return (
            <div className="music_front_bar">
<<<<<<< HEAD
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

                
=======
>>>>>>> 95beb86c2c20365b9fad6d04fd49abf8e2d06179
            </div>
        )
    }
}

export default MusicBar;