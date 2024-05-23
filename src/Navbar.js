import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className='sitename'>Campus
          <Link className='ebayLink' to='/'>
            <h1 className="ebay">
                <div className="e">e</div>
                <div className="b">b</div>
                <div className="a">a</div>
                <div className="y">y</div>
            </h1>
          </Link>
        </h1>
        <div className="link">
            <Link className='homeLink' to="/">HOME</Link>
            <Link className='profileLink' to="/userprofile">PROFILE</Link>
        </div>
    </div>
  )
}

export default Navbar