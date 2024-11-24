/* eslint-disable no-unused-vars */
import { useRef } from 'react'

import LogoS from '../../../assets/images/logo-a.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        draggable="false"
        alt="JavaScript,  Developer"
      />

      
    </div>
  )
}

export default Logo
