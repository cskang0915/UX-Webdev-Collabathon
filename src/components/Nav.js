import React, { Component } from 'react'

function Nav() {
    return(
        // <nav className='mainheader'>
        //     <h1>Club Face Melter</h1>
        // </nav>
    <div className='nav'>
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                <a href="#"><li>Home</li></a>
                <a href="#"><li>Privacy Policy</li></a>
                <a href="#"><li>Upcoming Events</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Nav;