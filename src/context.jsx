
import { createContext, useState, useContext, useEffect } from "react"

const AppContext = createContext()
export const useGlobalContext = () => useContext(AppContext)

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedDarkMode = localStorage.getItem('darkTheme') === true;
  return storedDarkMode || prefersDarkMode
}

export const AppProvider = ({children}) => {

  const [isDarkTheme, setIsDarkTheme] = useState(() => getInitialDarkMode())
  const [searchQuery, setSearchQuery] = useState('cat')


  const toggleDarkTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme)
    localStorage.setItem('darkTheme', isDarkTheme)
  }

  useEffect(() => {
    // Update Background color based on the theme
    const bodyStyle = document.body.style
    bodyStyle.backgroundColor = isDarkTheme ? ('rgb(36, 34, 34)') : ('white') 
    bodyStyle.color = isDarkTheme ? 'white' : 'black'
    bodyStyle.transition = 'all 1s ease'
  },[isDarkTheme])


  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event) => {
      setIsDarkTheme(event.matches)
    }

    handleChange(mediaQueryList)

    mediaQueryList.addEventListener('change',handleChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  },[]);

  return <AppContext.Provider value={{isDarkTheme, toggleDarkTheme, searchQuery, setSearchQuery}}>
    {children}
  </AppContext.Provider>
}
