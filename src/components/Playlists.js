import React from 'react'
import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import { Link } from 'react-router-dom'

const Playlists = props => {
  const dataPlaylists = [
    {
      id: 101,
      category_id: 1,
      catg: 'mood',
      name: 'Romentic',
      img:
        'https://img.lovepik.com/background/20211028/medium/lovepik-romantic-couple-beautiful-mood-poster-background-image_605627555.jpg',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 1,
      catg: 'mood',
      name: 'Party',
      img:
        'https://t4.ftcdn.net/jpg/01/20/28/25/360_F_120282530_gMCruc8XX2mwf5YtODLV2O1TGHzu4CAb.jpg',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 1,
      catg: 'mood',
      name: 'Lonely',
      img:
        'https://images.unsplash.com/photo-1519238425857-d6922ed3d613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZWx5fGVufDB8fDB8fHww&w=1000&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 2,
      catg: 'old',
      name: '80s',
      img:
        'https://i.scdn.co/image/ab67706c0000da84333aef4e921d8934024b0f08',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 2,
      catg: 'old',
      name: '90s',
      img:
        'https://i.scdn.co/image/ab67616d0000b273aef192e7554df697dd83c690',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 2,
      catg: 'old',
      name: '00s',
      img:
        'https://i.scdn.co/image/ab67706f0000000257210e5a0bd9ebeebcbfec6a',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 2,
      catg: 'lofi',
      name: 'So-fi',
      img:
        'https://i.scdn.co/image/ab67706c0000da841c31b4669183b5dc18d41f49',
      desc: 'Lorem ipsum',
    }
  ]

let filetr_Playlist= dataPlaylists.filter(filetrList=>filetrList.catg===props.catg)

  return (
    <div className="cardsWrapInner">
      {filetr_Playlist.map((playlist, id) => (
        <Link to={`/${props.catg}/` + playlist.name} key={id}>
          <div className="card" key={id}>
            <div className="cardImage">
              <img src={playlist.img} alt="Pic 1" />
            </div>
            <div className="cardContent">
              <h3>{playlist.name}</h3>
              {/* <span>{playlist.desc}</span> */}
            </div> 
            <span className="playIcon">
              <PlayIcon />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Playlists
