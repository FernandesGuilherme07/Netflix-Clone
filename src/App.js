/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react'
import tmdb from './tmdb'
import movierow from './components/movierow'


export default () => {

  const [movielist, setmovielist] = useState([])

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
        {movielist.map((item,key)=>
        <div>
          <movierow key={key}/>
        </div>
        )}
      </section>
    </div>
  );
}