import "../styles/navbarr.css"
import { useState } from "react"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return(
        <nav>
            <button className={`nav__toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <ul className={`nav__menu ${isOpen ? "open" : ""}`}>
                <li className="nav__menu__item">
                    <a href="#home" className="nav__link">
                        <h3 className='nav__name'>Home</h3>
                    </a>
                </li>
                <li className="nav__menu__item">
                    <a href="#misdatos" className="nav__link">
                        <h3 className='nav__name'>mis datos</h3>
                    </a>
                </li>
                <li className="nav__menu__item">
                    <a href="#habilidades" className="nav__link">
                        <h3 className='nav__name'>habilidades</h3>
                    </a>
                </li>
                <li className="nav__menu__item">
                    <a href="#portafolio" className="nav__link">
                        <h3 className='nav__name'>Portafolio</h3>
                    </a>
                </li>
                <li className="nav__menu__item">
                    <a href="#contacto" className="nav__link">
                        <h3 className='nav__name'>Contacto</h3>
                    </a>
                </li>
                
            </ul>
        </nav>
    )
}
export default NavBar
