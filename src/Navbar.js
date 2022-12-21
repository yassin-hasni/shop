import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='navbar navbar-expand-lg bg-light'>
        <div className='container'>
            <a className='navbar-brand' href='#'>Start Bootstrap</a>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link active'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>About</a>
                    </li>
                    <li className='nav-item dropdown'>
                        <a className="nav-link dropdown-toggle" href="#">Shop</a>
                    </li>
                </ul>
                <button className="btn btn-outline-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill mx-1" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    Cart
                    </button>
            </div>
        </div>

    </div>
  )
}

