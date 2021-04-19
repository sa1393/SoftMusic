import React, { useState, useEffect, useRef } from 'react';
import '../css/musicBar.css';

import { PlayCircleOutline, PauseCircleOutline, SkipPrevious, SkipNext, VolumeUp, VolumeDown, VolumeMute, VolumeOff } from '@material-ui/icons';

let MusicBar = () => {
    const [play, setPlay] = useState(false);

    const audio = useRef(null);
    const musicInput = useRef(null);
    const soundInput = useRef(null);

    useEffect(() => {
        audio.current.src = "music/music.mp3";
        setInterval(() => {
            musicInput.current.value = audio.current.currentTime / audio.current.duration * 10000;
        }, 10);

    }, [audio]);


    function musicPlayAndStop() {
        play ? audio.current.pause() : audio.current.play();

        setPlay(!play);
    };

    function musicSkip() {
        audio.current.currentTime = musicInput.current.value * audio.current.duration / 10000;
    }

    function soundControl(){
        audio.current.volume = soundInput.current.value / 100;
    }

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
                <audio className="music-play" ref={audio}>

                </audio>
                <SkipPrevious className="icon"></SkipPrevious>
                {
                    play ?
                        <PauseCircleOutline onClick={musicPlayAndStop} fontSize="large" className="player-icon icon"></PauseCircleOutline> :
                        <PlayCircleOutline onClick={musicPlayAndStop} fontSize="large" color="primary" className="player-icon icon" ></PlayCircleOutline>
                }
                <SkipNext className="icon"></SkipNext>

                <input ref={musicInput} type="range" className="seek-slider" max="10000" onChange={musicSkip}></input>
            </div>
            <div className="music-system">
                <div className="sound-player">
                    <VolumeUp className="icon"></VolumeUp>
                    <input ref={soundInput} type="range" className="volume-slider" max="100" onChange={soundControl}></input>
                </div>
            </div>
        </div>
    );
}

export default MusicBar;