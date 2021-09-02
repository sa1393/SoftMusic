import React, { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faChartLine } from '@fortawesome/free-solid-svg-icons';

import "../css/musicSearch.css";
import DownloadButton from "./downloadButton";
import MusicList from "./musicList";

let api = "AIzaSyCFYSD6tJOcz2YoB45nP7qZYKpTmD0YiE4";
let api2 = "AIzaSyDXRkhYhznJVHsazwLBwPVz9pqR-u1zVRU";
let api3 = "AIzaSyBr-ZHAPTFEJFcCZn2s9fY1OA9jmAGIDF0";
let api4 = "AIzaSyCaMFv45HM8saJFfpp9LkpcscbcFxQfHJE";
let api5 = "AIzaSyDqVFD5c-fQP2Lyd5dGSHWGuVpRtS96BKM";
let api6 = "AIzaSyB_OXIWUx1EOsDRAMTbxxCHW5GSk6ZQONE";
let api7 = "AIzaSyBGV5rxcrndSVBOuFkTuVKpKWc3Uu_Cjfs";

let MusicSearch = ()=>{
    const [musicList, setMusicList] = useState([]);
    const [text, setText] = useState('');

    const onKeyPress=(e, value)=> {
        if(e.key == 'Enter') {
            searchMusic();
        }
    }
    const searchMusic= (e)=> {
        
        var request=require('request');
        
        var optionParams={
            q:"ㅇㅇ",
            part:"snippet",
            key:api7,
            maxResults:8,
            type:"video",
            regionCode:"KR",
            videoDuration:"short"
        };
        optionParams.q = text;

        optionParams.q=encodeURI(optionParams.q);

        var url="https://www.googleapis.com/youtube/v3/search?";
        for(var option in optionParams){
            url+=option+"="+optionParams[option]+"&";
        }

        url=url.substr(0, url.length-1);

        request(url, function(err, res, body){
            
            setMusicList([]);
            //json형식을 서버로 부터 받음
            var data=JSON.parse(body).items;
            let tempMusicList = [];
            for(var content in data){
                //youtube downloader에 videoId 넘기면 됨.
                // console.log(data[content].snippet.title+" : "+data[content].id.videoId);
                tempMusicList.push(data[content]);
                
            }
            setMusicList([...tempMusicList]);
            console.log(musicList);
        });
        
    }

    const ChangeText = (e) => {
        setText(e.target.value);
    }
    
    return(
        <div className="search">
            <div className="searchBarArea">
                <FontAwesomeIcon icon={faSearch} className="searchIcon"></FontAwesomeIcon>
                <input type="text" value={text} onChange={ChangeText} className="searchBar" onKeyPress={onKeyPress}></input>
            </div>
            <div className="resultMusic">
                {<MusicList music={musicList}></MusicList>}
            </div>
        </div>
    )
}

export default MusicSearch;
