import './App.css'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import { light, dark } from './components/Theme'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState(light);
  

  return (
   <ThemeProvider theme={mode}>
   <NavBar setMode={setMode} mode={mode}/>
   <Hero/>
   </ThemeProvider>
  )
}

export default App
