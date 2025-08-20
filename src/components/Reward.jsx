import React from 'react'
import tutt from '../Reward/tutt.png'
import tutt2 from '../Reward/tutt2.png'
import { Link } from 'react-router-dom'


function Reward() {
  return (
    <div className='tutt'>
      <img src={tutt} alt="" />
      <img src={tutt2} alt="" />
      <img src="https://media1.tenor.com/m/YceEyQdlx6EAAAAC/scott-weiland-cat.gif" alt="" />
      <img src="https://media.tenor.com/39c7_ZNzC4MAAAAm/silly-cat-silly.webp" alt="" />

      <div>
        <Link to={'/'}><button>BACK TO HOOOOOME</button></Link>
      </div>
    </div>
  )
}

export default Reward