import React, { useState } from 'react'
import './from.scss';
import axios from 'axios';

export default function Addsong() {

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [img, setImg] = useState('')
    const [artist, setArtist] = useState('')
    const [catg, setCatg] = useState('old')
    const [playlist_name, setplaylist_name] = useState('00s')
    return (
        <div className='addSong'>
            <form>

                <fieldset>

                    <legend><span className="number">1</span> Song Info</legend>

                    <label htmlFor="name">Name:</label>
                    <input type="text" name="user_name" onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="Url">Url:</label>
                    <input type="text" name="" onChange={(e) => setUrl(e.target.value)} />

                    <label htmlFor="img">Img:</label>
                    <input type="text" name="user_password" onChange={(e) => setImg(e.target.value)} />
                    <label htmlFor="artist">Artist:</label>
                    <input type="text" name="user_password" onChange={(e) => setArtist(e.target.value)} />
                    <label htmlFor="catg">Catg:</label>
                    <input type="text" name="user_password" onChange={(e) => setCatg(e.target.value)} value={'old'} />
                    <label htmlFor="playlist">playlist:</label>
                    <input type="text" name="user_password" onChange={(e) => setplaylist_name(e.target.value)} value={'00s'}/>

                    {/* <label>Age:</label>
                            <input type="radio" id="under_13" value="under_13" name="user_age" /><label for="under_13" className="light">Under 13</label><br />
                            <input type="radio" id="over_13" value="over_13" name="user_age" /><label for="over_13" className="light">Over 13</label> */}

                </fieldset>


                <button onClick={addSong_btn}>Add Song</button>

            </form>
        </div>
    );




    function addSong_btn(e) {
        const data = { name, url, img, artist, catg, playlist_name }
        axios.post(`http://localhost:8000/api/addSong`, data, { withCredentials: true }).then((response) => {
            console.log(response.data);
        });
    }
}
