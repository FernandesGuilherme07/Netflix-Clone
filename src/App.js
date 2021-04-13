/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react'
import tmdb from './tmdb'
import Movielist from './components/movierow'


export default () => {

  const [Movielist, setmovielist] = useState([])

  useEffect(()=>{
    const loadAll = async () => {
      //get list total

      let list = await tmdb.getHomeList()
      setmovielist(list)
    }

    loadAll()
  },[])

  return (
    <div className='page'>
      <section className='list'>
        {Movielist.map((item,key)=>
        <div>
          <movierow key={key} title= {item.title} itens={item.itens}/>
        </div>
        )}
      </section>
    </div>
  );
}