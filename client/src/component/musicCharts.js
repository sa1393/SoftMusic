import React, { useEffect, useState } from "react";
import "../css/musicCharts.css";
import MusicList from "./musicList";

import axios from 'axios';

let api = "AIzaSyCFYSD6tJOcz2YoB45nP7qZYKpTmD0YiE4";
let api2 = "AIzaSyDXRkhYhznJVHsazwLBwPVz9pqR-u1zVRU";
let api3 = "AIzaSyBr-ZHAPTFEJFcCZn2s9fY1OA9jmAGIDF0";
let api4 = "AIzaSyCaMFv45HM8saJFfpp9LkpcscbcFxQfHJE";
let api5 = "AIzaSyDqVFD5c-fQP2Lyd5dGSHWGuVpRtS96BKM";
let api6 = "AIzaSyB_OXIWUx1EOsDRAMTbxxCHW5GSk6ZQONE"

let MusicCharts = ()=>{
    let [musicListArr, setMusicListArr] = useState([]);
    let [loading, setLoading] = useState(true);
    let temp = [];
    
    useEffect(()=> {
        chartSearchMusic("신호등", false);
        chartSearchMusic("STAY" , false);
        chartSearchMusic("바라만 본다", false);
        chartSearchMusic("Next Level", true);
        // chartSearchMusic("Permission to Dance");
        // chartSearchMusic("낙하 (with 아이유");
        // chartSearchMusic("Weekend");
        // chartSearchMusic("Butter");
        // chartSearchMusic("OHAYO MY NIGHT");
    }, [])

    const chartSearchMusic= (text, last)=> {
        
        var request=require('request');
        
        var optionParams={
            q:"신호등",
            part:"snippet",
            key:api5,
            maxResults:1,
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
                console.log(response.data.items[0])
                temp.push(response.data.items[0])
                
            })
            .then(function(response) {
                setMusicListArr([...temp]);
                if(last == true) {
                    console.log("마지막")
                    setLoading(false);
                }
            })
            .catch(function(error) {
                console.log(error)
            })
            

        // request(url, function(err, res, body){
        //     var data=JSON.parse(body).items;
        //     console.log(data[0]);

        //     temp.push(data[0])
        // });

        
    }  

    return(
        <div className="charts">
            <h1>
                Charts
            </h1>
            {loading ? <h1>로딩중</h1> : <MusicList music={musicListArr}></MusicList>}

        </div>
    )
}

export default MusicCharts;
