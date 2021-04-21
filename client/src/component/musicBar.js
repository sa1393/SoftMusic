import React, { useState, useEffect, useRef } from 'react';
import '../css/musicBar.css';

import { PlayCircleOutline, PauseCircleOutline, SkipPrevious, SkipNext, VolumeUp, VolumeDown, VolumeMute, VolumeOff } from '@material-ui/icons';

import useFade from '../hook/useFade';

//음악
const useAudio = (src)=> {
    const [state, setState] = useState({
        play: false,
        src,
    })
    const audio = useRef();
    const musicInput = useRef();
    const allSpan = useRef();
    const currentSpan = useRef();

    useEffect(()=> {
        if(audio.current.src !== null){
            state.play ? audio.current.play() : audio.current.pause();
            
        }
        
    }, [state.play]);

    useEffect(()=> {
        setInterval(updateInput, 50);
        setTimeCurrent();
        setInterval(setTimeCurrent, 1000);
        setTimeout(setTimeDuration, 100);

        return (clearInterval(updateInput));

    },[src]);

    useEffect(()=>{
        audio.current.src = state.src;

    }, []);

    function updateInput(){
        musicInput.current.value = audio.current.currentTime / audio.current.duration * 10000;
    }

    function setTimeCurrent (){
        let minute = Math.floor(audio.current.currentTime / 60);
        let seconde = Math.floor(audio.current.currentTime) % 60;

        if(minute < 10){
            minute = "0" + minute;
        }
        if(seconde < 10){
            seconde = "0" + seconde;
        }

        currentSpan.current.innerText = `${minute} : ${seconde}`;
    }
    
    function setTimeDuration (){
        let minute = Math.floor(audio.current.duration / 60);
        let seconde = Math.floor(audio.current.duration) % 60;

        if(minute < 10){
            minute = "0" + minute;
        }
        if(seconde < 10){
            seconde = "0" + seconde;
        }

        allSpan.current.innerText = `${minute} : ${seconde}`;
    }

    if(src === null) return;
    return {...state, setState, audio, musicInput, currentSpan, allSpan};
}

const useSound = ()=>{
    const soundInput = useRef();

    useEffect(()=> {
    }, []); 

    return {soundInput};
}

let MusicBar = () => {
    const {play, setState, audio, musicInput, currentSpan, allSpan} = useAudio("music/music.mp3");
    const {soundInput} = useSound();

    function soundControl(){
        audio.current.volume = soundInput.current.value / 100;
    }

    function musicSkip(){
        audio.current.currentTime = musicInput.current.value * audio.current.duration / 10000;
    }

    const fadeSound = useFade(0.2, 0);

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
                <SkipPrevious className="icon" ></SkipPrevious>
                {
                    play ?
                        <PauseCircleOutline onClick={()=>setState({play:false})} fontSize="large" className="player-icon icon"></PauseCircleOutline> :
                        <PlayCircleOutline onClick={()=>setState({play:true})} fontSize="large" color="primary" className="player-icon icon" ></PlayCircleOutline>
                }
                <SkipNext className="icon"></SkipNext>

                <input ref={musicInput} type="range" className="seek-slider" max="10000" onChange={musicSkip}></input>
            </div>
            <div className="music-system">
                <div className="music-time">
                    <span ref={currentSpan}>00:00</span>/
                    <span ref={allSpan}>00:00</span>
                </div>

                <div className="sound-player" onMouseEnter={(event) =>{
                    fadeSound.ref.current.style.opacity = 1;
                }}
                onMouseLeave={(event) => {
                    fadeSound.ref.current.style.opacity = 0;
                }}
                >
                    <div className="volume-box" ref={fadeSound.ref} style={{opacity : 0}}>
                        <input ref={soundInput} type="range" className="volume-slider" max="100" onChange={soundControl} ></input>
                    </div>
                    <VolumeUp className="icon" ></VolumeUp>

                </div>
            </div>
        </div>
        
    );
}

export default MusicBar;