import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import Connect from './Connect'

function Main() {
    return (
        <main>
            <Routes>
            <Route exact path= '/' element= {<Home />} />
            <Route exact path= '/about-me' element= {<AboutMe />} />
            <Route exact path='/connect' element= {<Connect />} />
            </Routes>
        </main>
    )
}

export default Main