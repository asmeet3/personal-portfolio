import React, { useEffect, useState } from 'react'

import TagCloud from 'TagCloud'

const WordCloud = () => {
  const container = '.content' // Target container for the word cloud
  const texts = [
    'c++',
    'sql',
    'react',
    'firebase',
    'flask',
    'git',
    'gitHub',
    'html5',
    'css3',
    'javascript',
    'C',
    'figma',
    'wireframing',
    'prototyping',
  ]
  const options = {
    radius: 240,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: true,
  }

  useEffect(() => {
    // Initialize TagCloud only once when the component is mounted
    TagCloud(container, texts, options)

    return () => {
      // Optional cleanup: If TagCloud needs to be destroyed to prevent memory leaks
      const element = document.querySelector(container)
      if (element) element.innerHTML = '' // Clear the container
    }
  }, []) // Empty dependency array ensures this runs only once

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud
