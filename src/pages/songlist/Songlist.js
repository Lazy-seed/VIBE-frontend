import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../../svgs/play.svg'
import { ReactComponent as HeartIcon } from '../../svgs/heart.svg'
import { ReactComponent as NoteIcon } from '../../svgs/note.svg'
import {Base_URL} from '../../config/URL'

import './Songlist.scss'; 
import axios from 'axios'
import Loader from '../../components/loader/Loader'


const Songlist = ({setsongPlaying_ID}) => {
  let { catg,playlist } = useParams()

  useEffect(() => {
    axios.get(`${Base_URL}/api/SongsByCtg/${catg}/${playlist}`, {withCredentials:true}).then((response) => {
       setsongList(response.data.result);
  }).catch((err) => {
      console.log(err);
  })
}, [])

const [songList, setsongList] = useState('')
  if (!songList) {
    return <Loader/>
  }

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img src={`https://source.unsplash.com/200x200/?${catg},heart`} alt="pic" />
          </div>
          <div className="playlistPageContent">
            <p className="smallText uppercase bold">Playlist</p>
            <h1>{playlist}</h1>

            <p className="tagline">
              Minimalism, electronica and modern classical to concentrate to.
            </p>
            <div className="playlistPageDesc">
              <p className="spotify">Spotify</p>
              <span>699,428 likes</span>
              <span>4hr 35 min</span>
            </div>
          </div>
        </div>
        <div className="playlistPageSongs">
          <div className="playlistButtons">
            <span className="playIcon">
              <PlayIcon />
            </span>
            <div className="icons">
              <div className="icon iconsHeart">
                <HeartIcon />
              </div>
              <div className="icon iconsDots"></div>
            </div>
          </div>



          <ul className="songList">
            {
              songList && songList.map((song_info,index) => {
                return (
                  <li onClick={()=>setsongPlaying_ID(song_info._id)}>
                    
                    <h4 style={{fontWeight:"100",fontSize:"16px",marginRight:"20px",marginTop:"5px"}}>{index+1}</h4>
                    <div className="songIcon">
                      <NoteIcon className="noteI" />
                      <PlayIcon className="playI" />
                    </div>
                    <div className="songDetails">
                      <h3>{song_info.name}</h3>
                      <span>{song_info.artist}</span>
                    </div>
                    <div className="songTime">
                      <span>4:07</span>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Songlist
