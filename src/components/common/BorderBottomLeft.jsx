import React from 'react'
import styled from 'styled-components'

const BorderBottomLeft = ({ size = 16, clipId = 'mask' }) => {
  const viewBox = `0 0 ${size} ${size}`
  const pathSize = `M${size} 0H0V${size}C0 ${size * 0.448} ${size *
    0.448} 0 ${size} 0Z`
  const pathStyle = {
    transform: 'rotate(-90deg) translate(-1px, 0px)',
    transformOrigin: '50% 50%',
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute' }}>
      <clipPath id={clipId}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={pathSize}
          fill="black"
          style={pathStyle}
        />
      </clipPath>
    </svg>
  )
}

export default BorderBottomLeft
