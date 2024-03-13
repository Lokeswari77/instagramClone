import React, { useState } from 'react'
import './Signup.css'
import {createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'

function Signup() {
    const [email, setEmail] = useState("");
    const [Username, setUsername] =useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
      createUserWithEmailAndPassword(auth, email, password).then(
        signInWithEmailAndPassword(auth, email, password).then(
        updateProfile(auth.currentUser, {displayName: Username})
        )
        
        ).catch(err=> {
          alert(err)
        })
    }

  return (
    <div className='signup'>
        <img src ="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="" />
        <input value={email} onChange={e=> setEmail(e.target.value)} type="email" placeholder='Email' />
        <input value={Username} onChange={e=> setUsername(e.target.value)}  type="text" placeholder='Username' />
        <input value={password} onChange={e=> setPassword(e.target.value)}  type="password" placeholder='Password' />
        <button onClick={handleSignup}>Sign Up</button>
    </div>
  )
}

export default Signup