import { useState } from 'react'

import WordCloud from './wordcloud'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')


  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
          I have a strong foundation in software development and am proficient in 
          front-end technologies like ReactJS , JavaScript and UI/UX design tools including 
          Figma, wireframing, and prototyping. I also have experience in 
          languages such as SQL and C++. My back-end experience includes 
          working with Flask to build robust applications and integrating APIs for 
          seamless functionality. Additionally, I have an understanding of 
          data structures and algorithms, enabling me to solve problems efficiently.
          </p>
          <p>
          I’m always open to learning and working with new technologies to stay ahead in the ever-evolving tech landscape.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      
    </>
  )
}

export default Skills
