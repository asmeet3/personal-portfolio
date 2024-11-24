import { useState } from 'react'
import { useRef } from 'react'

import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { ClipLoader } from 'react-spinners'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const contactArray = 'Contact Me'.split('')

  const sendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)


    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,   // Email service ID
        process.env.REACT_APP_TEMPLATE_ID,         // Template ID (to customize your email template)
        form.current,                              // Form reference
        process.env.REACT_APP_PUBLIC_KEY          // Public key
      )
      .then(
        () => {
          toast.success('Message successfully sent!', {
            position: 'bottom-center',
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
          const timeout = setTimeout(() => {
            form.current.reset()
            setLoading(false)
          }, 3800)

          return () => clearTimeout(timeout)
        },
        () => {
          setLoading(false)
          toast.error('Failed to send the message, please try again', {
            position: 'bottom-center',
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
        }
      )
  }

  

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <p>
            I’m open to new opportunities and collaborations! If you’re looking
            for someone who can bring fresh ideas and deliver impactful results,
            let’s get in touch!
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button
                    type="submit"
                    className="flat-button"
                    disabled={loading}
                  >
                    {loading ? <ClipLoader color="#fff" size={20} /> : 'SEND'}
                  </button>
                </li>
              </ul>
              <ToastContainer />
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <div className="info-map">
            Asmeet Singh
            <br />
            Noida, <br />
            Uttar Pradesh, <br />
            India
            <br />
          </div>
          <MapContainer center={[28.630812, 77.372090]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.630812, 77.372090]}>
              <Popup>
                Asmeet lives here, come over for a cup of coffee :{')'}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Contact
