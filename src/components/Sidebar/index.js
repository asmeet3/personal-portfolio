import './index.scss'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faBarsProgress,
  faEnvelope,
  faHome,
  faScrewdriverWrench,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'

import LogoSubtitle from '../../assets/images/Asmeet_logo_white.png'
import LogoS from '../../assets/images/logo-a2.png'


const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="asmeet" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="projects-link"
            to="/projects"
          >
            <FontAwesomeIcon icon={faBarsProgress} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/asmeet3/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/asmeet3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
            </a>
          </li>
          
        </ul>
      </div>
    </>
  )
}

export default Sidebar
