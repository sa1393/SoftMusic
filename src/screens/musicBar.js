import React from 'react';
import './musicBar.css';

import {Howl, Howler} from 'howler';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeDown, faHome, faSearch, faChartLine } from '@fortawesome/free-solid-svg-icons'


 

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
                <div className="music-play">

                </div>
                <div className="music-system">


                </div>

                
            </div>
        )
    }
}

export default MusicBar;