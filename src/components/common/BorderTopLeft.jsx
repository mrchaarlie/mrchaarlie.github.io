import React from 'react'

const BorderTopLeft = ({ size = 16, clipId = 'mask' }) => {
  const viewBox = `0 0 ${size} ${size}`
  const pathSize = `M${size} 0H0V${size}C0 ${size * 0.448} ${size *
    0.448} 0 ${size} 0Z`

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
        />
      </clipPath>
    </svg>
  )
}

export default BorderTopLeft
