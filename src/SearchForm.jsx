import React, { useState } from 'react'
import './css/searchform.css'
import { useGlobalContext } from './context'

const SearchForm = () => {

  const {setSearchQuery} = useGlobalContext()

  // const handleChange = (e) => {
  //   setSearchQuery(e.target.value)
  // }

  const handleSubmit =(e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setSearchQuery(searchValue)
  }

  return (
    <>
      <header>
        <h1>Unsplash Images</h1>
      </header>

      <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='cat' name='search' className='input-search'/>
        <button type='submit' className='submit-btn'>search</button>
      </form>
    </div>

    </>

  )
}

export default SearchForm