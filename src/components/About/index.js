/* eslint-disable no-unused-vars */
import { useState } from 'react'

import {
  faFigma,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')



  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I’m a Software Developer with hands-on experience in
            building intuitive user interfaces, optimizing web performance,
            and integrating efficient backend systems. My work spans across
            designing seamless user experiences with React, implementing robust
            APIs, and enhancing software performance through innovative solutions.
            I enjoy tackling challenges and delivering user-focused applications that make an impact.
          </p>
          <p>
            With a passion for solving real-world problems, I thrive on continuous
            learning and staying updated with the latest technologies. Whether
            it's crafting responsive designs, streamlining workflows, or
            collaborating on team projects, I approach every task with a
            focus on creating scalable and impactful solutions.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#61DAFB" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faFigma} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <svg fill="#00599c" width="95px" height="95px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                <title>C++ icon</title>
                <path d="M22.393 6c-.167-.29-.398-.543-.652-.69L12.925.22c-.508-.293-1.339-.293-1.847 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.689l8.816 5.091c.508.293 1.339.293 1.847 0l8.816-5.091c.254-.146.485-.399.652-.689s.271-.616.271-.91V6.91c.002-.294-.102-.62-.269-.91zM12 19.109c-3.92 0-7.109-3.189-7.109-7.109S8.08 4.891 12 4.891a7.133 7.133 0 0 1 6.156 3.552l-3.076 1.781A3.567 3.567 0 0 0 12 8.445c-1.96 0-3.554 1.595-3.554 3.555S10.04 15.555 12 15.555a3.57 3.57 0 0 0 3.08-1.778l3.077 1.78A7.135 7.135 0 0 1 12 19.109zm7.109-6.714h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.789v-.79h.789v-.79h.79v.79h.79v.79z" />
              </svg>

            </div>
            <div className="face5">
              <svg fill="#000000" width="95px" height="95px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>flask</title>
                <path d="M14.319 9.028c0.35-0.62-1.443-0.835-0.235-0.219 0.112 0.037 0.087 0.262 0.235 0.219zM4.542 3.761c-0.762-0.995 1.432 0.167 0.659-0.875-0.652-0.519-1.278 0.585-0.659 0.875zM6.138 5.011c1.082-0.144-0.275-0.466-0.217-0.013zM5.283 4.806c0.232-0.315-0.407 0.16 0 0zM7.008 6.705c0.672 0.016-0.289-0.902 0.511-0.487-0.131-0.429-0.932-0.509-1.325-0.68-0.22 0.392 0.45 1.172 0.812 1.167zM4.916 6.619c0.575-0.434 1.984 0.257 1.080-0.431-0.087-0.077-1.982 0.522-1.080 0.431zM4.326 7.747c1.007-0.342 2.383-0.726 2.858 0.169-0.484-0.582-0.195-1.155 0.262-0.304 0.645 0.861 0.968-0.391 0.547-0.681 0.479 0.595 1.023 0.875 0.321 0.037 0.762-0.917-1.528 0.121-2.049 0.11-0.25 0.112-2.588 0.596-1.938 0.669zM6.2 10.881c0.246-0.304-0.337-0.081 0 0zM5.613 12.452c-0.060-0.362-0.175 0.192 0 0zM5.116 12.2c0.562-0.037 0.882-0.621-0.109-0.587-1.537-0.159 1.355 0.525-0.197 0.33-0.209 0.137 0.295 0.296 0.306 0.259zM29.116 27.445c0.696 0 2.109-0.216 0.594-0.216-0.237 0.038-1.386 0.030-0.595 0.216zM25.78 25.486c0.075-0.51-0.337 0.046 0 0zM28.395 27.273c0.015-0.444-0.38 0.2 0 0zM2.65 11.165c0.499-0.381-0.589-0.145 0 0zM4.549 12.515c0.306-0.325-0.663-0.132 0 0zM3.906 12.335c0.871-0.534-0.926-0.462 0 0zM10.348 8.28c0.291-0.765 1.132-0.306 0.135-0.154 0.021 0.081-0.030 0.395-0.135 0.154zM9.548 8.285c-0.069-1.517 1.398 0.54-0 0zM6.736 8.718c0.462-0.555 2.618-0.354 1.040-0.054-0.422-0.319-0.747 0.187-1.040 0.054zM6.541 8.848c0.277-0.325 0.080 0.287-0 0zM5.782 9.154c0.040-0.514 1.272 0.272 0.204 0.185zM5.226 9.144c0.437-0.325 0.232 0.182-0 0zM5.167 9.687c0.304-1.117 1.625 0.918 0.497 0.147-0.121-0.095-0.275-0.152-0.443-0.152-0.019 0-0.038 0.001-0.057 0.002l0.002-0zM2.050 11.274c-0.116-0.669-0.1-1.842 1.015-1.445-1.488 0.295 1.030 1.849 0.712 0.622 0.625 0.030 1.225-0.37 0.895 0.237 1.233-0.137 2.087-1.205 3.279-1.056 1.082-0.090 2.082-0.299 3.033-0.615l-0.091 0.026c0.822-0.060 1.612-0.945 1.162-1.468-0.218-0.013-0.473-0.021-0.73-0.021-0.993 0-1.96 0.114-2.888 0.329l0.086-0.017c-1.372 0.285-2.619 0.827-4.005 1.061-1.35 0.181 0.271 0.5-0.115 0.57-0.705 0.245 0.84 0.41-0.091 0.667-0.575-0.11-1.175-0.307-0.928-0.912-1.293 0.166-2.431 0.704-1.408 2.019h0.075zM4.22 12.726c0.069-0.475-0.512 0.094-0 0zM26.941 27.412c0.165-0.49-0.417 0.062 0 0zM24.474 26.133c0.412-0.379-0.525-0.117 0 0zM4.062 13.526c0.647-0.254-1.175-0.525-0.13-0.050zM2.538 12.615c-0.044-0.4-0.237 0.050 0 0zM2.263 12.823c-0.025-0.337-0.18 0.127 0 0zM4.12 14.028c-0.087-0.731-1.050-0.11 0-0zM7.719 16.687c0.152-0.14-0.362-0.104 0 0zM4.463 14.6c-0.15-0.121-0.117 0.152 0 0zM3.946 14.347c0.011-0.312-0.829-0.28 0 0zM3.041 14.119c-0.172-0.968-0.656-0.147-0 0zM6.836 16.754c0.011-0.509-0.396-0.019 0 0zM23.985 27.436c0.64-0.13 2.097 0.325 2.332-0.17-0.775-0.019-2.687-0.547-2.777 0.125l0.17 0.029zM6.378 16.639c-0.009-0.166-0.152 0.062 0 0zM4.933 15.939c0.499-0.169-0.459-0.112 0 0zM16.467 23.725c-0.009-0.501-0.494 0.125 0 0zM5.241 16.65c0.775-0.3-0.83-0.212 0 0zM20.249 26.297c0.27-0.2-0.337-0.025 0 0zM17.435 24.523c-0.050-0.194-0.196 0.037 0 0zM17.093 24.274c-0.135-0.347-0.535-0.008 0 0zM9.994 19.796c0-0.506-0.906-0.205 0 0zM9.174 19.606c-0.332-0.279-0.016-0.040 0 0zM3.771 16.275c0.115-0.479-1.066-2.633-0.557-1.080 0.182 0.325 0.162 0.942 0.557 1.080zM6.715 18.599c0.646 0.145 2.582 1.592 1.44 0.1-0.585-0.172-0.234-1.603-0.831-1.35 0.4 0.669 0.33 0.953-0.512 0.532-1.056-0.516-0.592 0.255-0.387 0.467-0.28 0.065 0.374 0.245 0.291 0.25zM22.891 29.012c0.482-0.322-0.586-0.104 0 0zM21.166 27.865c0.717-0.602-0.759 0.266-0 0zM21.503 28.028c0.881-0.637-0.535-0.122-0.185 0.12zM11.639 22.174c-0.181-0.371-0.28 0.059 0 0zM11.064 21.841c-0.025-0.3-0.364 0.025 0 0zM20.399 27.727c0.689-0.444-0.157-0.375-0.125 0.040zM6.272 18.818c0.204-0.302-0.525-0.039 0 0zM20.625 28.018c0.712-0.61-0.45-0.128 0-0zM19.543 27.593c1.418-0.917-0.582-0.4 0-0zM4.51 18.178c-0.657-0.937-0.409-1.36-1.043-2.124-0.12-0.587-1.087-1.916-0.5-0.507 0.537 0.823 0.697 2.098 1.543 2.632zM19.784 27.853c0.771-0.817-0.747 0.049 0 0zM19.783 28.115c0.004-0.187-0.3 0.082-0 0zM18.333 27.121c0.697-0.585-0.675 0.26-0 0zM11.964 23.185c0.452 0.4 2.077 0.295 0.55 0.050-0.227-0.337-1.438-0.255-0.55-0.050zM7.327 20.39c-0.302-0.502-1.080-0.455 0 0zM6.513 19.855c-0.125-0.491-0.875-0.487 0-0zM18.624 27.462c0.406-0.394 0.016 0.629 0.675-0.096 0.006-0.519-0.021-0.825-0.757-0.195-0.202 0.112-0.292 0.591 0.082 0.291zM17.861 27.141c0.025-0.35-0.241 0.3 0-0zM10.438 22.644c1.762 0.567-0.864-0.695 0-0zM8.988 21.811c0.425 0.316 1.6 0.898 0.605 0.12 0.336-0.39-0.642-0.597-0.317-0.857-0.825-0.505-0.65-0.46-0.072-0.445-0.992-0.442 0.142-0.41 0.087-0.637-0.381-0.075-1.899-0.675-1.005 0.050-0.907-0.462-0.216 0.172-0.49 0.105-0.928-0.252 0.825 0.706-0.147 0.469 0.531 0.421 1.432 1.080 0.225 0.446-0.16 0.229 0.862 0.575 1.115 0.75zM11.726 23.628c0.769 0.2 0.765-0.119 0.069-0.212-0.375-0.35-1.557-0.719-0.5-0.044 0.071 0.177 0.294 0.174 0.43 0.257zM10.339 22.928c-0.16-0.139 0.020 0.087-0-0zM11.013 9.666c0.117-0.144 0.025 0.174-0-0zM10.61 12.069c-0.27-0.475 0.34-2.091 0.407-1.087-0.284 0.781-0.081 1.218 0.116 0.17 0.366-0.825-0.079 1.628-0.525 0.918zM10.218 12.706c-0.066-0.4 0.225 0.505 0 0zM10.459 13.343c-0.393-0.97 0.365 0.512-0-0zM10.623 13.706c-0.003-0.209 0.054 0.302-0-0zM7.795 12.132c0.257-0.542 0.475 0.604-0-0zM6.793 11.535c0.161-0.069 0.085 0.215-0-0zM11.076 14.879c0.146-1.18 0.129 0.691-0-0zM7.234 12.625c0.211-0.31-0.562-1.4 0.111-0.391 0.29 0.231 0.84 0.387 0.354 0.484 0.762 0.674-0.187 0.182-0.465-0.092zM11.296 15.203c0.055-1.037 0.31-0.619 0.002 0.147zM6.848 12.985c0.519-0.11 2.147 0.911 0.65 0.292-0.165-0.185-0.52-0.1-0.65-0.293zM11.586 16.261c0.162-0.577 0.012 0.381 0 0zM9.484 14.913c-0.082-1.012 0.184 0.167 0 0zM6.715 13.444c-0.871-1.203 2.533 1.216 0.559 0.305-0.206-0.054-0.455-0.075-0.559-0.305zM11.521 16.702c0.067-0.275 0.009 0.322 0 0zM11.771 16.95c0.060-0.641 0.124 0.437-0 0zM10.334 16.1c-0.587-0.352-0.154-2.479 0.046-1.025 0.571-0.185-0.031 0.75 0.394 0.742-0.066 0.591-0.257 0.804-0.437 0.282zM6.448 13.841c-1.357-1.207 1.706 0.632 0.221 0.225zM7.319 14.674c-0.41-0.771 0.5 0.322 0 0zM6.881 14.533c0.271-0.269 0.144 0.265 0 0zM6.169 14.552c-0.467-0.462-0.805-0.891 0.021-0.287 0.319 0.012-0.707-0.972 0.075-0.312 0.825 0.15 0.409 1.352-0.096 0.6zM7.524 15.601c0.27-0.569 0.457 0.792 0 0zM6.961 15.408c0.050-0.754 0.287 0.516 0 0zM8.215 16.271c-0.262-0.448-0.417-0.987-0.417-1.562 0-0.001 0-0.002 0-0.003v0c0.095 0.472 1.005 2.033 0.446 0.647-0.617-1.162 0.737 0.377 0.877 0.667 0.062 0.287-0.381-0.079-0.080 0.597-0.55-0.771-0.325 0.425-0.826-0.347zM12.271 18.977c-0.44-0.987 0.312-0.54 0.097 0.162zM9.919 18.222c-0.194-0.347 0.404 0.325 0 0zM12.658 20.128c0.168-0.63 0.198 0.53 0 0zM8.78 18.026c0.274-0.075 0.135 0.467 0 0zM13.653 21.39c-0.465-0.9 0.587 0.255 0 0zM14.056 21.931c-0.012-0.585 0.134 0.45 0 0zM18.687 25.45c0.231-0.014 0.008 0.175 0 0zM14.64 22.879c-0.37-0.387-0.466-1.112-0.066-0.481 0.205 0.082 0.656 1.183 0.066 0.481zM15.883 26.388c0.966-0.577 0.647 1.352 1.638 0.162 0.977-0.712-0.843 0.883 0.362 0.129 0.87-0.584 2.157 0.275 2.969 0.556 0.585-0.029 1.153 0.506 1.753 0.181 1.153-0.312-2.257-0.462-1.362-1.012-0.138 0.031-0.297 0.049-0.46 0.049-0.805 0-1.509-0.435-1.89-1.082l-0.006-0.010c-1.299-0.215-2.402-0.92-3.136-1.914l-0.009-0.013c-0.24-0.394 0.35 0.055-0.207-0.587-0.606-0.61-1.123-1.311-1.527-2.079l-0.023-0.047c-0.571-0.305-0.637-1.203-0.696-0.030 0.005-0.741-0.691-1.24-0.86-1.032-0.002-0.714 0.744-0.356 0.22-0.884-0.112-0.74-0.482-1.512-0.594-2.346-0.172-0.402-0.025-1.263-0.591-0.352-0.206 0.962-0.069-1.183 0.252-0.475 0.421-0.725-0.15-0.637-0.175-0.537 0.275-0.61 0.175-1.475-0.071-1.145 0.146-0.646 0.231-2.377-0.219-2.069 0.272-0.675 0.517-3.090-0.667-2.169-0.62 0.025-1.202 0.159-1.736 0.382l0.033-0.012c1.232 0.679-0.125 0.245-0.625 0.137-0.065 0.627-0.562 0.356-1.182 0.362 0.991 0.122-0.482 1.012-1.051 0.667-0.737 0.352 0.637 1.233 0.015 1.506 0.075 0.41-1.131-0.15-1.037 0.8-0.716-0.301-0.097 1.125 0.261 0.642 1.218 0.33 0.857 1.082 0.887 1.796-0.197 0.416-0.98-0.978-0.175-0.914-0.634-1.033-0.701-0.375-1.23 0.106-0.125 0.035 1.348 0.684 0.425 1.003 0.812 0.125 0.835 0.837 1 1.287 0.487 0.509 0.387-0.562 0.973 0.050-0.37-0.545-1.958-1.535-0.68-1.217-0.006-0.55-0.231-0.991 0.161-0.98 0.387-0.702-0.406 1.733 0.469 0.84 0.241-0.106 0.3-0.704 0.737 0.056 0.631 0.622 0.227 1.072-0.664 0.504 0.159 0.541 1.192 0.734 0.998 1.581 0.206 0.744 0.494 0.47 0.745 0.427 0.197 0.722 0.309 0.191 0.319-0.154 0.9 0.194 0.69 0.725 0.972 1.1 0.621 0.28-0.89-1.902 0.177-0.657 1.122 1.012 0.421 1.437-0.587 1.275 0.637-0.051 0.844 0.862 1.641 0.83 0.727 0.346 1.218 1.675-0.034 1.121-0.435-0.391-1.974-0.875-0.716-0.13 1.282 0.525 2.335 1.039 3.35 1.611l-0.15-0.077c0.8 0.572 1.147 1.227 1.45 1.357-0.672 0.321-2.028-0.257-1.021-0.435-0.629-0.114-1.335-0.431-0.734 0.35 0.512 0.429 1.812 0.382 2.046 0.431-0.199 0.435-0.537 0.47 0.008 0.504-0.607 0.325 0.195 0.375 0.251 0.56zM12.289 24.179c1.033 0.132-1.231-0.704-0.226-0.075zM15.045 26.050c0.897-0.356-0.875-0.175 0 0zM9.746 22.754c0.575-0.062-0.925-0.389 0 0zM12.877 24.744c0.075-0.319-0.66-0.096 0 0zM17.456 27.709c-0.012-0.246-0.229 0.094 0 0zM13.25 25.129c-0.142-0.162-0.068 0.035 0 0zM6.493 20.836c-0.096-0.371-0.842-0.667 0 0zM9.067 22.501c0.775-0.046-1.060-0.341 0 0zM11.239 24.068c-0.080-0.239-0.42-0.010 0 0zM17.025 27.637c0.035-0.454-0.441 0.337 0 0zM8.94 22.657c-0.052-0.25-0.332 0.023 0 0zM14.743 26.356c1.35 0.012-1.218-0.184 0 0zM12.277 24.931c1.425 0.404-1.197-0.9-0.351-0.147l0.187 0.085 0.162 0.062zM13.507 25.91c0.241-0.412-1.018-0.237 0 0zM9.458 23.438c0.582 0.447 2.349 0.057 0.892-0.266-0.662-0.354-2.158-0.595-1.14 0.212zM12.687 25.653c0.537-0.202-0.87-0.204 0 0zM11.48 24.912c0.375-0.262-0.776-0.2 0 0zM10.043 24.075c-0.050-0.209-0.77-0.231 0 0zM14.943 27.892c0.496 0.312 2.899 0.687 1.393 0.129-0.25 0.052-2.787-0.717-1.395-0.129zM11.856 25.965c-0.017-0.207-0.22 0.094 0 0zM11.239 25.657c0.609-0.394-0.787-0.005 0 0zM13.947 27.548c0.239-0.352-0.762-0.134 0 0zM12.538 26.761c0.39-0.375-0.605-0.235 0 0zM11.714 26.417c-0.067-0.331-0.3 0.185 0 0zM11.056 26.177c0.269-0.12-0.387-0.15 0 0zM6.115 21.807c0.041-0.182 0.221 0.396 0 0zM9.606 25.64c1.212 0.449-0.005-0.852-0.562-0.777-0.245-0.426-0.938-0.696-0.45-0.925-0.88 0.305-0.921-1.162-1.337-0.953-0.93-0.294-0.362-1.337-1.47-1.974-0.101-0.675-1.102-1.26-1.422-2.277-0.141-0.52-1.131-2.016-0.522-0.625 0.648 1.386 1.378 2.579 2.221 3.68l-0.034-0.047c0.545 1.179 1.346 2.158 2.336 2.898l0.020 0.014c0.362 0.348 0.71 0.879 1.221 0.987zM11.985 27.322c1.11 0.571 2.398 1.016 3.753 1.268l0.088 0.014c1.303 0.299 2.799 0.47 4.336 0.47 0.798 0 1.586-0.046 2.36-0.136l-0.094 0.009c-0.987-0.446-2.009 0.175-2.993-0.319-0.35 0.040-0.756 0.062-1.167 0.062-0.879 0-1.734-0.103-2.553-0.298l0.075 0.015c-1.631-0.594-2.987-1.206-4.292-1.902l0.179 0.087c-1.596-0.582 0.825 0.747 1.256 0.856 0.997 0.566-1.096-0.291-1.392-0.526-0.835-0.469-0.942-0.371-0.082 0.105 0.174 0.1 0.345 0.207 0.525 0.294zM9.967 26.447c-1.228-0.845-2.28-1.828-3.171-2.945l-0.023-0.029c-1.676-2.057-3.041-4.451-3.971-7.051l-0.053-0.168c-0.557-1.693-0.75-3.509-1.467-5.136-0.145-0.266-0.23-0.583-0.23-0.92 0-0.972 0.711-1.779 1.641-1.928l0.011-0.001c0.575-0.109 1.59-0.652 0.366-0.264-1.097 0.805-1.203-0.731-0.079-0.827 0.489-0.005 0.884-0.402 0.884-0.892 0-0.147-0.036-0.286-0.099-0.409l0.002 0.005c-0.825-0.537 1.999-1.128 0.579-1.929-1.478-1.598 2.071-1.904 1.196-0.092-0.209 1.393 2.479-0.256 1.856 1.353 0.634 0.774 2.374 0.175 2.331 1.261 0.925 0.062 1.241 0.84 2.108 0.9 0.9 0.406 2.527 0.725 2.832 1.737-0.891 0.707-2.954-1.456-3.053 0.497 0.023 3.075 0.48 6.034 1.312 8.832l-0.057-0.225c0.67 1.664 1.62 3.085 2.804 4.271l-0-0c1.079 1.202 2.376 2.182 3.834 2.884l0.074 0.032c1.16 0.548 2.508 0.98 3.918 1.228l0.097 0.014c0.56-0.429 1.55-2.021 2.422-1.35 0.041 0.755-1.735 1.578-0.084 1.495 0.97-0.292 1.642 0.75 2.441-0.19 0.735 0.871 3.057-0.557 2.533 1.225-0.707 0.455-1.739 0.18-2.448 0.807-1.168-0.584-2.099 0.522-3.393 0.382-1.271 0.231-2.734 0.363-4.228 0.363-0.044 0-0.089-0-0.133-0l0.007 0c-2.548-0.045-4.986-0.444-7.29-1.149l0.187 0.049c-1.394-0.471-2.603-1.091-3.7-1.86l0.046 0.031z"></path>
              </svg>
            </div>
            <div className="face6">

              <svg fill="#000000" width="95px" height="95px" viewBox="-8.78 0 70 70" version="1.1" xmlns="http://www.w3.org/2000/svg">

                <path d="m 852.97077,1013.9363 c -6.55238,-0.4723 -13.02857,-2.1216 -17.00034,-4.3296 -2.26232,-1.2576 -3.98589,-2.8032 -4.66223,-4.1807 l -0.4024,-0.8196 0,-25.70807 0,-25.7081 0.31843,-0.6465 c 1.42297,-2.889 5.96432,-5.4935 12.30378,-7.0562 2.15195,-0.5305 5.2586,-1.0588 7.79304,-1.3252 2.58797,-0.2721 9.44765,-0.2307 12.02919,0.073 6.86123,0.8061 12.69967,2.6108 16.29768,5.0377 1.38756,0.9359 2.81137,2.4334 3.29371,3.4642 l 0.41358,0.8838 -0.0354,25.6303 -0.0354,25.63047 -0.33195,0.6744 c -0.18257,0.3709 -0.73406,1.1007 -1.22553,1.6216 -2.99181,3.1715 -9.40919,5.5176 -17.8267,6.5172 -1.71567,0.2038 -9.16916,0.3686 -10.92937,0.2417 z m 12.07501,-22.02839 c -0.0252,-0.0657 -1.00472,-0.93831 -2.17671,-1.93922 -1.17199,-1.00091 -2.18138,-1.86687 -2.24309,-1.92436 -0.0617,-0.0575 0.15481,-0.26106 0.48117,-0.45237 0.32635,-0.19131 0.95163,-0.7235 1.3895,-1.18265 1.2805,-1.34272 1.88466,-3.00131 1.88466,-5.17388 0,-2.1388 -0.65162,-3.8645 -1.95671,-5.1818 -1.31533,-1.3278 -2.82554,-1.8983 -5.02486,-1.8983 -3.39007,0 -5.99368,1.9781 -6.82468,5.1851 -0.28586,1.1031 -0.28432,3.33211 0.003,4.31023 0.74941,2.55136 2.79044,4.40434 5.33062,4.83946 0.8596,0.14724 0.97605,0.21071 1.5621,0.85144 0.34829,0.38078 1.06301,1.14085 1.58827,1.68904 l 0.95501,0.9967 2.53878,0 c 1.39633,0 2.51816,-0.0537 2.49296,-0.11939 z m -8.70653,-7.10848 c -0.61119,-0.31868 -0.84225,-0.56599 -1.19079,-1.27453 -0.26919,-0.54724 -0.31522,-0.85851 -0.31824,-2.15197 -0.003,-1.3143 0.0388,-1.5983 0.31987,-2.169 0.45985,-0.9339 1.09355,-1.376 2.07384,-1.4469 1.36454,-0.099 2.15217,0.5707 2.56498,2.1801 0.50612,1.97321 -0.0504,4.07107 -1.26471,4.76729 -0.63707,0.36527 -1.58737,0.40659 -2.18495,0.095 z m -11.25315,3.66269 c 2.66179,-0.5048 4.1728,-2.0528 4.1728,-4.27495 0,-1.97137 -0.97548,-3.12004 -3.6716,-4.32364 -1.54338,-0.689 -2.10241,-1.1215 -2.10241,-1.6268 0,-0.4188 0.53052,-0.8777 1.14813,-0.993 0.60302,-0.1126 2.20237,0.1652 3.14683,0.5467 l 0.79167,0.3198 0,-1.7524 0,-1.7525 -0.85923,-0.1906 c -0.53103,-0.1178 -1.64689,-0.1885 -2.92137,-0.1849 -1.80528,0 -2.15881,0.044 -2.83818,0.3138 -1.98445,0.7878 -2.92613,2.1298 -2.91107,4.1485 0.0141,1.8898 1.01108,3.06864 3.49227,4.12912 1.46399,0.62572 2.05076,1.10218 2.05076,1.66522 0,1.1965 -1.99362,1.34375 -4.10437,0.30315 -0.57805,-0.28498 -1.09739,-0.54137 -1.1541,-0.56976 -0.0567,-0.0284 -0.10311,0.79023 -0.10311,1.81917 0,1.86239 0.002,1.87137 0.33919,1.99974 1.26979,0.48278 4.07626,0.69787 5.52379,0.42335 z m 30.4308,-1.72766 0,-1.58098 -2.40584,0 -2.40583,0 0,-5.43035 0,-5.4303 -2.13089,0 -2.13088,0 0,7.0113 0,7.01131 4.53672,0 4.53672,0 0,-1.58098 z m -14.84745,-27.70503 c 4.23447,-0.2937 7.4086,-0.8482 10.20178,-1.7821 2.78264,-0.9304 4.42643,-2.0562 4.79413,-3.2834 0.14166,-0.4729 0.13146,-0.6523 -0.0665,-1.1708 -0.88775,-2.3245 -5.84694,-4.1104 -13.42493,-4.8345 -3.24154,-0.3098 -9.13671,-0.2094 -12.22745,0.2081 -4.71604,0.6372 -8.54333,1.8208 -10.2451,3.1683 -3.44251,2.726 0.19793,5.7242 8.66397,7.1354 3.67084,0.6119 8.42674,0.828 12.30414,0.559 z" fill="#00bcf2" transform="translate(-830.906 -943.981)" />

              </svg>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About
