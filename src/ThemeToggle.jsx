import React from 'react'
import { useGlobalContext } from './context'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import './css/ThemeToggle.css'

const ThemeToggle = () => {

  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()

  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className='sun-icon' />
        ) : (
          <BsFillMoonFill className='moon-icon'/>
        )}
      </button>
    </section>
  )
}

export default ThemeToggle