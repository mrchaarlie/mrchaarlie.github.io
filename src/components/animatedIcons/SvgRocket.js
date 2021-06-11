import React from 'react'
import useIntersect from '../../utils/useIntersect'
import SvgIconWrapper from '../SvgIconWrapper'

const SvgRocket = props => {
  const [ref, entry] = useIntersect({
    threshold: 1.0,
  })

  return (
    <div {...props} ref={ref}>
      <SvgIconWrapper
        name="rocket"
        showAnimation={entry.intersectionRatio == 1 ? true : false}
        strokeColor={props.color}
        strokeArray={339}
        delay={props.delay}
        opacity={props.opacity}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128">
          <title>Rocket, animated icon</title>
          <path
            fill="transparent"
            stroke="#000000"
            strokeWidth="2.5"
            d="M67.7,120.6c0.4,0,0.7-0.1,0.9-0.3c0.6-0.5-1-4.6,1.6-10.6c2.3-5.3,8.7-8.6,9.1-12.7c0.6-7-5.1-12.2-12.6-12.2
            H64v-1.6h2l2.5-3.2h4.6c0.4,0,0.7-0.2,0.8-0.6l3.6-8.5c0.2-0.4,0.7-0.7,1.1-0.5L90.3,74c0.6,0.2,1.2-0.3,1.2-0.9v-7.9
            c0-5.4-3-10.1-7.5-12.6l-0.1-1.4c-0.4-7.1-2.1-14.1-4.8-20.7C76.8,25,73.7,19.7,70,15l-6-7.6L58,15c-3.8,4.8-6.8,10-9.2,15.7
            c-2.7,6.6-4.3,13.6-4.8,20.7v1.4c-4.4,2.4-7.5,7.1-7.5,12.6v7.9c0,0.6,0.6,1,1.2,0.9l11.6-3.7c0.4-0.1,0.9,0.1,1.1,0.5l3.6,8.5
            c0.1,0.3,0.5,0.6,0.8,0.6h4.6l2.5,3.2H64v-0.1v1.5h-2.6c-4.4,0-8.6,1.3-11.2,5.1c-1.9,2.7-2.4,5.2-2,9.3c0.4,3.4,2.3,5.9,3,5.9
            s3.6-4.7,5.2-4.7c1.6,0,0.7,2.5,1.1,6.6c0.2,2.9,1,6.5,3.2,9.3c2.1,2.8,5.1,4.4,6.8,4.4L67.7,120.6z"
          />
        </svg>
      </SvgIconWrapper>
    </div>
  )
}

export default SvgRocket
