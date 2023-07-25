import React, { useEffect } from 'react';
import './home.scss';
import Categories from '../../components/Categories'
import { Routes, Route } from 'react-router-dom'
import Songlist from '../songlist/Songlist'
import Addsong from '../../admin/form'
import Topbar from '../../components/topbar/Topbar'
import Search from '../search/Search';

export default function Home  ({setsongPlaying_ID,songPlaying_ID}) {
  useEffect(() => {
  }, [])
  
  return (
    <div className="home">
      <Topbar/>
      <div className="homeContent"> 

        {/* <Categories/> */}
        <Routes>
          <Route path="/" exact element={<Categories/>}/>
          <Route path="/search" element={<Search   setsongPlaying_ID={setsongPlaying_ID}/>} />
          <Route path="/your-library"  element={<>Your libraryx</>}  />
          <Route path="/:catg/:playlist" element={<Songlist  setsongPlaying_ID={setsongPlaying_ID} songPlaying_ID={songPlaying_ID}/>} />




          <Route path="/addSongs" element={<Addsong/>} />
        </Routes>
      </div>
    </div>
  )
}


