import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Connect from './components/Connect'


function App () {

  return (
    <div className= "App">
      <Header />

        <Routes>
          <Route exact path= '/' element= {<Home />} />
          <Route exact path= '/about-me' element= {<AboutMe />} />
          <Route exact path='/connect' element= {<Connect />} />
        </Routes>
    </div>

  )
}

export default App
