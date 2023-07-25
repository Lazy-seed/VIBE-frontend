import React, { useEffect, useState } from 'react'
import './App.scss'
import Nav from './components/leftbar/Nav'
import Player from './components/player/Player'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'

export default function App() {


  const [songPlaying_ID, setsongPlaying_ID] = useState('');
  const [showLogin, setshowLogin] = useState(false);



  return (
    <div className="outerWrap">
      {
        showLogin !== true ?
          <>
            <div className="App">
              <Nav />
              <Home setsongPlaying_ID={setsongPlaying_ID} songPlaying_ID={songPlaying_ID} />
            </div>
            <Player setsongPlaying_ID={setsongPlaying_ID} songPlaying_ID={songPlaying_ID} />
          </>
          :
          <Routes>
            <Route path='/' element={<Login/>} />
            {/* <Route path='/login' element={<Login/>} /> */}
          </Routes>
      }

    </div>
  )
}

