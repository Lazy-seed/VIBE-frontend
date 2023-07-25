import React, { useEffect, useState } from 'react';
import "./player.scss"
import { Grid, Slider } from "@material-ui/core"
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
// img
import play_img from './img/play.png'
import pause_img from './img/pause.png'
import next_img from './img/next.png'
import back_img from './img/back.png'

import {Base_URL} from '../../config/URL'

import axios from 'axios';

// import songList from '../../pages/songlist/songs/songsList';

export default function Player({ songPlaying_ID }) {
    
    
    useEffect(() => {
        if (songPlaying_ID) {
            axios.get(`${Base_URL}/api/getOneSong/${songPlaying_ID}`, { withCredentials: true }).then((response) => {
                setsongData(response.data.result)
                // console.log(response.data.result)
                playSong_first(response.data.result.url)
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [songPlaying_ID])


    const [songIsPlaying, setsongIsPlaying] = useState(false);
    const [songNumber, setsongNumber] = useState(0);
    const [songData, setsongData] = useState('')

    if (!songData) {
        return <div className='player'>song not load</div>
    }

    // console.log("START");
    // console.log(songList[songNumber].url);


    setInterval(() => {
        var audio = document.querySelector('#audio')
        var current_time = document.querySelector(".current-time")
        const seekBar = document.querySelector(".seek-bar");

        current_time.innerHTML = formatTime(seekBar.value);
        seekBar.value = audio.currentTime;
        current_time.innerHTML = formatTime(audio.currentTime);
    }, 500);


    return (
        <div className="player">
            <div className="left">
                <img className="albumLogo" src={songData.img} alt=""/>

                <div className="songInfo">
                    {/* <h4>{songList[songNumber].name}</h4> */}
                    <h4>{songData.name}</h4>
                    <p>{songData.artist}</p>
                </div>
            </div>

            <audio id="audio" >
                <source src={songData.url} type="audio/mpeg" />
            </audio>

            <div className="center">
                <div className="control">
                    <img src={back_img} alt="" onClick={() => setsongNumber_fun("back")} />
                    {songIsPlaying === true ? <img src={pause_img} alt="" onClick={playSong} /> : <img src={play_img} alt="" onClick={playSong} />}
                    <img src={next_img} alt="" onClick={() => setsongNumber_fun("next")} />
                </div>


                <div className="song-slider">
                    <input type="range" className="seek-bar" onChange={setCurrentTime} defaultValue={0} />
                    <span className="current-time">00 : 00</span>
                    <span className="song-duration">00 : 00</span>
                </div>
            </div>

            <div className="right">
                <Grid container spacing={2}>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider id='slider' />
                    </Grid>
                </Grid>
            </div>
        </div>
    )




    // play first
    function playSong_first(url) {
        const audio = document.querySelector("#audio")
        const song_duration = document.querySelector(".song-duration");
        const seekBar = document.querySelector(".seek-bar");
        audio.src = url;
        audio.play()
        setsongIsPlaying(true)
        
        setTimeout(() => {  seekBar.max = audio.duration;
            console.log(seekBar.max);
            song_duration.innerHTML = formatTime(audio.duration); }, 2000);
        
    }

    // play pause
    function playSong() {
        const audio = document.querySelector('#audio')
        const seekBar = document.querySelector(".seek-bar");
        const song_duration = document.querySelector(".song-duration");
        if (!songIsPlaying) {
            audio.play()
        } else {
            audio.pause()
        }
        
        setsongIsPlaying(!songIsPlaying)

        seekBar.max = audio.duration;
        song_duration.innerHTML = formatTime(audio.duration);
    }

    // curent time
    function setCurrentTime() {
        var audio = document.querySelector('#audio')
        const seekBar = document.querySelector(".seek-bar");
        audio.currentTime = seekBar.value;
        
    }


    // next back 
    function setsongNumber_fun(value) {
        var audio = document.querySelector('#audio')

        var songNum = songNumber
        if (value === 'next') {
            songNum += 1
        } else {
            songNum -= 1
        }

        setsongNumber(songNum)

        // audio.src = songList[songNum].url;
        console.log(songNum);
        audio.play()
    }





    // formate time
    function formatTime(time) {
        let min = Math.floor(time / 60);
        if (min < 10) {
            min = `0${min}`;
        }
        let sec = Math.floor(time % 60);
        if (sec < 10) {
            sec = `0${sec}`;
        }
        return `${min} : ${sec}`;
    };




}
