import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MusicList from './musicList';
import '../css/downloadbutton.css';

import '../css/home.css';

let api = "AIzaSyCFYSD6tJOcz2YoB45nP7qZYKpTmD0YiE4";
let api2 = "AIzaSyDXRkhYhznJVHsazwLBwPVz9pqR-u1zVRU";
let api3 = "AIzaSyBr-ZHAPTFEJFcCZn2s9fY1OA9jmAGIDF0";
let api4 = "AIzaSyCaMFv45HM8saJFfpp9LkpcscbcFxQfHJE";
let api5 = "AIzaSyDqVFD5c-fQP2Lyd5dGSHWGuVpRtS96BKM";
let api6 = "AIzaSyB_OXIWUx1EOsDRAMTbxxCHW5GSk6ZQONE";

let Home = ()=>{
    //await axios.get(api.key);
    let [musicListArr, setMusicListArr] = useState([]);
    let temp = []
    let [loading, setLoading] = useState(true);
    let [sing, setSing] =useState("");
    let singString = []
    let num = 0;

    useEffect(()=> {
        singString.push("justin bieber");
        singString.push("아이유");
        singString.push("악동뮤지션");
        singString.push("태연");
        singString.push("방탄소년단");
        singString.push("이무진");
        singString.push("디핵");
        singString.push("헤이즈");
        singString.push("멜로망스");
        singString.push("ed sheeran");
        // singString.push("");
        // singString.push("");
        // singString.push("");
        // singString.push("");
        // singString.push("");
        // singString.push("");
        // singString.push("");
        
        num = Math.floor(Math.random() * singString.length);
        HomeSearchMusic(singString[num]);
        setSing(singString[num])

    }, [])

    const HomeSearchMusic= (text, last)=> {
        
        var request=require('request');
        
        var optionParams={
            q:"신호등",
            part:"snippet",
            key:api,
            maxResults:5,
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

        const axios = require('axios');

        axios.get(url)
            .then(function(response) {
                console.log(response.data)
                console.log(response.data.items)
                for(let i = 0; i < response.data.items.length; i++) {
                    temp.push(response.data.items[i])

                }
                
            })
            .then(function(response) {
                setMusicListArr([...temp]);
                if(last == true) {
                    setLoading(false);
                    console.log("마지막")
                
                }
            })
            .catch(function(error) {
                console.log(error)
            })
        }
    
    return(
        <div className="home">
            <h1 className="sub-title">추천하는 음악</h1>        
            <h2>가수: {sing}</h2>
            <div className="resultMusic">
            {loading ?  <MusicList music={musicListArr}></MusicList> : <h1>로딩중</h1>}
            </div>
        </div>
    )
}


export default Home;