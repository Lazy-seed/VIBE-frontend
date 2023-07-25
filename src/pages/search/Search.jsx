import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../../svgs/play.svg'
import { ReactComponent as NoteIcon } from '../../svgs/note.svg'
import { Base_URL } from '../../config/URL'
import axios from 'axios'
import './search.scss';

export default function Search({ setsongPlaying_ID }) {

    useEffect(() => {
        axios.get(`${Base_URL}/api/searchSong/${Srchtext}`, { withCredentials: true }).then((response) => {
            setsongList(response.data.result);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const [songList, setsongList] = useState('')
    const [Srchtext, setSrchtext] = useState('lonely')

    console.log(songList);
    return (
        <div className='srch_conatiner'>

            <div className="srch_input_cont">
                <form >
                <div className="search_box">
                    <input placeholder="Search..." type="text" onChange={(e) => setSrchtext(e.target.value)} defaultValue={Srchtext} />
                    <button type="submit" onClick={srchData}>Go</button>
                </div>
                </form>
            </div>

            <ul className="songList">

                {songList === '' && <>No song found</>}
                {
                    songList && songList.map((song_info, index) => {
                        return (
                            <li onClick={() => setsongPlaying_ID(song_info._id)} key={index}>

                                <h4 style={{ fontWeight: "100", fontSize: "16px", marginRight: "20px", marginTop: "5px" }}>{index + 1}</h4>
                                <div className="songIcon">
                                    <NoteIcon className="noteI" />
                                    <PlayIcon className="playI" />
                                </div>
                                <div className="songDetails">
                                    <h3>{song_info.name}</h3>
                                    <span>{song_info.artist}</span>
                                </div>
                                <div className="songTime">
                                    {/* <span>4:07</span> */}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )



    function srchData(e) {
        e.preventDefault()
        setsongList('');
        if (Srchtext.trim() === '') {
            return false
        }
        axios.get(`${Base_URL}/api/searchSong/${Srchtext}`, { withCredentials: true }).then((response) => {
            setsongList(response.data.result);
            setsongList(response.data.result);
        }).catch((err) => {
            console.log(err);
        })

    }
}
