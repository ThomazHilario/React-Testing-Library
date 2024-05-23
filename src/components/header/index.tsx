import { Link } from "react-router-dom"

// import css
import './header.css'

export const Header = () => {
    return(
        <header>
            <nav id="navigation__bar">
                <Link to='/'>All Files</Link>
                <Link to='/favorites'>Favorites</Link>
                <Link to='/new'>New</Link>
            </nav>
        </header>
    )
}