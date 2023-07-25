import React, { useRef, useEffect, useState } from 'react'
import Playlists from './Playlists'

export default function Categories() {
  const [limiter, setLimiter] = useState(0)
  const mainInnerRef = useRef()


  useEffect(() => {
    // function
    const handleWindowResize = () => {
      // calculation
      const calculation = Math.floor(
        mainInnerRef.current.getBoundingClientRect().width / 195
      )

      setLimiter(calculation)
    }

    handleWindowResize()

    // assign event listener
    window.addEventListener('resize', handleWindowResize)

    // remove event listener
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (


    <div className="mainInner" ref={mainInnerRef}>
      <div className="cardsWrap" >
        <h2>Mood</h2>
        <p className="subText">Feel the Air</p>

          <Playlists catg={'mood'} />

      </div>
      <div className="cardsWrap" >
        <h2>Old is gold</h2>
        <p className="subText">Nostalgic Feel</p>
        <Playlists catg={'old'} />
      </div>
      <div className="cardsWrap" >
        <h2>Lofi</h2>
        <p className="subText">Slow Rain</p>
        <Playlists catg={'lofi'} />
      </div>
    </div>
  )
}

