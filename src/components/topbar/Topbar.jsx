import React from 'react'
import './topbar.scss';
import menu from './menu.png'
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../../store/slice/menu';


export default function Topbar() {
  const showMenu = useSelector((state) => state.showMenuSlice.showMenu)
const dispatch=useDispatch();

  return (
      <div className="topbar">
        <div className="prev-next-buttons">
          <button type="button" className="fa fas fa-chevron-left"></button>
          <button type="button" className="fa fas fa-chevron-right"></button>
          <img src={menu} alt=""  onClick={()=>dispatch(setMenu(!showMenu))}/>
        </div>

        <div className="navbar">
          <ul>
            {/* <li>
              <a href="./">Premium</a>
            </li> */}
            <li>
              <a href="./">Support</a>
            </li>
            <li>
              <a href="./">Download</a>
            </li>
            <li className="divider">|</li>
            <li>
              {/* <a href="/login">Sign Up</a> */}
            </li>
          </ul>
          {/* <button type="button">Log In</button> */}
        </div>

        <img className='logo_img' src="https://martech.org/wp-content/uploads/2017/09/spotify-logo-1920x1080.jpg" alt="" />
      </div>
  )
}
