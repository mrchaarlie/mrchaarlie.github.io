import React from 'react'
import useIntersect from '../../utils/useIntersect'
import SvgIconWrapper from '../SvgIconWrapper'

const SvgWorkflow = props => {
  const [ref, entry] = useIntersect({
    threshold: 1.0,
  })

  return (
    <div {...props} ref={ref}>
      <SvgIconWrapper
        name="workflow"
        showAnimation={entry.intersectionRatio == 1 ? true : false}
        strokeColor={props.color}
        strokeArray={780}
        delay={props.delay}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          height="128px"
          width="128px">
          <title>Workflow, animated icon</title>
          <path
            fill="transparent"
            stroke="#000000"
            strokeWidth="2"
            d="M64.7,113.3h14.7c1.1,0,2-0.9,2-2V96.6c0-1.1-0.9-2-2-2H64.3V82.2h42.4c1.1,0,2,0.9,2,2v10.4H93.5
            c-1.1,0-2,0.9-2,2v14.7c0,1.1,0.9,2,2,2h30.3c1.1,0,2-0.9,2-2V96.6c0-1.1-0.9-2-2-2h-15.2V84.2c0-1.1-0.9-2-2-2H83.2v-12h15.2
            c1.1,0,2-0.9,2-2V53.5c0-1.1-0.9-2-2-2H68c-1.1,0-2,0.9-2,2v14.7c0,1.1,0.9,2,2,2h30.3c1.1,0,2-0.9,2-2V53.5c0-1.1-0.9-2-2-2H83.2
            v-10c0-1.1-0.9-2-2-2H64V27.1h15.2c1.1,0,2-0.9,2-2V10.4c0-1.1-0.9-2-2-2H64.4h-0.8H48.9c-1.1,0-2,0.9-2,2v14.7c0,1.1,0.9,2,2,2H64
            v12.4H44.8c-1.1,0-2,0.9-2,2v10H27.6c-1.1,0-2,0.9-2,2v14.7c0,1.1,0.9,2,2,2h30.3c1.1,0,2-0.9,2-2V53.5c0-1.1-0.9-2-2-2H27.6
            c-1.1,0-2,0.9-2,2v14.7c0,1.1,0.9,2,2,2h15.2v12H21.9c-1.1,0-2,0.9-2,2v10.4H4.7c-1.1,0-2,0.9-2,2v14.7c0,1.1,0.9,2,2,2h30.4
            c1.1,0,2-0.9,2-2V96.6c0-1.1-0.9-2-2-2H19.9V84.2c0-1.1,0.9-2,2-2h20.9h21.5v12.4H49.1c-1.1,0-2,0.9-2,2v14.7c0,1.1,0.9,2,2,2h15.3
            H64.7z"
          />
        </svg>
      </SvgIconWrapper>
    </div>
  )
}

export default SvgWorkflow
