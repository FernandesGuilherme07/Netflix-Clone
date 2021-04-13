/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './movierow.css'


export default ({title, itens}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className='movierow--listarea'>
                {itens.results.length > 0 && itens.results.map((item, key)=>(
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path} alt={item.origianal_title}`}/>
                ))}
            </div>
        </div>
    )
}