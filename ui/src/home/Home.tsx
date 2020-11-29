import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Redirect } from 'react-router';

const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if(isLoading) {
    return <p>Loading...</p>
  }

  if(!isAuthenticated) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}

export default Home;