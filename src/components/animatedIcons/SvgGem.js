import React from 'react'
import useIntersect from '../../utils/useIntersect'
import SvgIconWrapper from '../SvgIconWrapper'

const SvgGem = props => {
  const [ref, entry] = useIntersect({
    threshold: 1.0,
  })

  return (
    <div {...props} ref={ref}>
      <SvgIconWrapper
        name="gem"
        showAnimation={entry.intersectionRatio == 1 ? true : false}
        strokeColor={props.color}
        strokeArray={808}
        delay={props.delay}
        opacity={props.opacity}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          height="128px"
          width="128px">
          <title>Polished gem, animated icon</title>
          <path
            fill="transparent"
            stroke="#000000"
            strokeWidth="2.5"
            d="M96.3,37.1l-0.2-0.2c1.1-6.7,6.9-11.7,13.8-11.7c-7.8,0-14-6.3-14-14c0,7.8-6.3,14-14,14
            c6.7,0,12.3,4.7,13.7,11l-3.4-4.9l-28.2-2.8L34.2,57H16.4h77.4h17.8H93.8L63.9,28.4l-28,2.8c0,0-1.6,25.2-1.7,25.7
            c0,0.5,29.7,57.9,29.7,57.9L93.8,57l-1.7-25.7l-28.2-2.8l-28,2.8L16.4,57l47.5,57.9L111.6,57L97,38.1L96.3,37.1z"
          />
        </svg>
      </SvgIconWrapper>
    </div>
  )
}

export default SvgGem
