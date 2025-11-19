import React, { use } from 'react'
import { Contextapi } from '../context/Authcontext'
import { Link, useNavigate } from 'react-router'

const Profile = () => {
  const{user}=use(Contextapi)
  const navigate = useNavigate()
  user|| navigate('/')
  return (
    <div className="flex items-center justify-center">
    <div className="w-full max-w-xl p-10 card ">
      <div className="flex flex-col items-center space-y-6">
        <img src={user?.photoURL} className="w-32 h-32 rounded-full border-4 border-primary"/>
        <div className="text-center">
          <h2 className="text-3xl font-bold">{user?.displayName}</h2>
          <p className="text-lg text-gray-500">{user?.email}</p>
        </div>
        <button className="btn btn-lg btn-primary px-10"><Link to={'/update'}>Update Profile</Link></button>
      </div>
    </div>
  </div>
  )
}

export default Profile