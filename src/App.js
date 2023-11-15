import React, { useEffect } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import HomeScreen from './pages/HomeScreeen/HomeScreen';
import Profile from './components/Profile';
import Login from './components/Login';
import {useDispatch, useSelector} from "react-redux"
import { login, logout, selectUser } from './features/UserSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firbaseConfig';

const App = () => {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }else{
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[])

  return (
    <div className='app' > 
    <Router>
      {!user?( 
      <Login/> ):(
      <Routes>
       
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/profile" element={<Profile/>} />

      </Routes>
      )}
    </Router>
    </div>
  )
}

export default App