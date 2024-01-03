import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>halamn home</h1>

      {/* <a href="/login">login</a> */}
      <Link to="/login">login</Link>
    </div>
  )
}

export default Home