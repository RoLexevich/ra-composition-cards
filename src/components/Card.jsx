import React from 'react';

export default function Card({children, ...item}) {
  return (
    <div className="card" style={{width: '18rem'}}>
      {item.img && <img src={item.img} className="card-img-top" alt={item.title}/>}
      <div className="card-body">
        {children}
        <button href="#" className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  )
}