import React from 'react'
import articles from './articles.json'
import {Routes, Route, useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = articles.find(product => product.id == productId);
return (
  <div className='card col m-5 d-flex flex-column justify-content-center align-items-center' style={{maxWidth: '25vh'}}>
        {product.sale && <span className='notify-badge'>Sale</span>}
        <img className='card-img-top' style={{height: "18vh"}} src={`./${product.img}`} />
        <div className='card-body'>
            <h5 className='card-title'>{product.title}</h5>
            <div className='card-text d-flex justify-content-center'>
              {product.sale ? <p className='px-1'><del>${product.price}</del></p> : <p className='px-1'>${product.price}</p>}
              {product.sale && <p className='px-1'>${product.sale}</p>}
            </div>
            <button className='btn btn-outline-dark'>Add to cart</button>
        </div>
        
    </div>
)
}
