import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className= "nav-links">
            <Link to= "/"> Home </Link>
            <Link to= "/about-me"> About Me </Link>
            <Link to= "/connect"> Connect </Link>
        </div>
    )
}