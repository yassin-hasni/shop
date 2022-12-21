import React from 'react'
import {Link} from 'react-router-dom';

export default function Cart({elem}) {
  return (
    <div className='card col m-5 d-flex flex-column justify-content-center align-items-center' style={{maxWidth: '25vh'}}>
        {elem.sale && <span className='notify-badge'>Sale</span>}
        <img className='card-img-top' style={{height: "18vh"}} src={`./${elem.img}`} />
        <div className='card-body'>
            <h5 className='card-title'>{elem.title}</h5>
            <div className='card-text d-flex justify-content-center'>
              {elem.sale ? <p className='px-1'><del>${elem.price}</del></p> : <p className='px-1'>${elem.price}</p>}
              {elem.sale && <p className='px-1'>${elem.sale}</p>}
            </div>
            <Link to={`/${elem.id}`}><button className='btn btn-outline-dark'>Open product</button></Link>
        </div>
    </div>
  )
}

