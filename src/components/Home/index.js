import { useState } from 'react'

import { Link } from 'react-router-dom'

import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-a2.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import styles from './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = 'smeet Singh'.split('')
  const jobArray = 'Software Developer'.split('')

  

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Asmeet Singh" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            
          </h1>
          <h2>
          Building Responsive Designs | Designing Seamless Interfaces | Crafting User-Centric Solutions
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      
    </>
  )
}

export default Home
