import React from 'react'
import "./header.css"
import Netflixlogo from '../../assets/images/netflix_logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div className='header_outer_container'>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    <li> <img src={Netflixlogo} alt='Netflix logo' width="100"></img></li>

                    <li>Home</li>
                    <li>TvShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyLists</li>
                    <li>Browse by Language</li>
                </ul>
            </div>
            <div className='header-right'>
            <ul>
                    <li><SearchIcon /> </li>
                    <li><NotificationsNoneIcon /> </li>
                    <li><AccountBoxIcon /> </li> 
                    <li><ArrowDropDownIcon /> </li>
                
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header