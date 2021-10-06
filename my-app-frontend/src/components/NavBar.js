import React from 'react'
import { useHistory } from 'react-router';

function NavBar() {
    let history = useHistory()

    return (
        <div className="navbar">
          <div>
            <h1 onClick={() => history.push("/")}>GAMER GANG</h1>
          </div>
            <h3 className="navbarh3" onClick={() => history.push("/games")}>My Games</h3>
            <h3 className="navbarh3" onClick={() => history.push("/friends")}>My Friends</h3>
            <h3 className="navbarh3" onClick={() => history.push("/homepage")}>My Profile</h3>
        </div>
      )
}

export default NavBar;