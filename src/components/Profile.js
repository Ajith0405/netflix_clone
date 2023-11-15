import React from 'react'
import "./profile.css"
import Nav from './Nav'
import {useSelector} from 'react-redux'
import {selectUser} from '../features/UserSlice'
import { signOut } from 'firebase/auth'
import {auth} from '../firbaseConfig'

const Profile = () => {
  const user = useSelector(selectUser);

  const logout =()=>{
    signOut(auth)
  }

  return (
    <div className='profileScreen'>
          <Nav/>
          <div className='profileScreen__body'>
          <h1>Edit Profile</h1>
          <div className='profileScreen__info'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""/>
            <div className='profileScreen__details'>
              <h2>{user.email}</h2>
              <div className='profileScreen__plans'>
                <h3>Plans</h3>
                {/* plans */}
                <button className='profileScreen__signOut' onClick={logout} >Sign Out</button>
              </div>
            </div>
          </div>        
          </div>
    </div>
  )
}

export default Profile