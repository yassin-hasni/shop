import React from 'react';
import Cart from './Cart';
import articles from './articles.json';

export default function Container() {
    const article = articles.map((elem)=><Cart key={elem.id} elem={elem} />);
  return (
    <div className='container-fluid'>
        <div className='row justify-content-center'>
            {article}
        </div>
    </div>
  )
}
