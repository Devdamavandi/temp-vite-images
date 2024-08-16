import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useGlobalContext } from './context'

// import Cats from './data'

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`

const Gallery = () => {
  
  
  
  const {searchQuery} = useGlobalContext()
  

  const response = useQuery({
    queryKey: ['images', searchQuery],
    queryFn: async () => {
      const res = await axios.get(`${url}&query=${searchQuery}`)
      return res.data
    }
  })

  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    )
  }
  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>There was an error...{response.error}</h4>
      </section>
    )
  }

  const results = response.data.results
  if (results.length === 0) {
    return (
      <section className='image-container'>
        <h4>No results found...</h4>
      </section>
    )
  }

  return (
    <section className='image-container'>
      {results.map((item) => (
        <img key={item.id} src={item?.urls?.small} alt={`Cat ${item.alt_description}`}/>
      ))}
    </section >
  )
}

export default Gallery