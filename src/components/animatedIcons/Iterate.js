import React from 'react'
import useIntersect from '../../utils/useIntersect'
import SvgIconWrapper from '../SvgIconWrapper'


const SvgIterate = props => {
    const [ref, entry] = useIntersect({
      threshold: 1.0
    });
  
    return (
      <div {...props} ref={ref}>
        <SvgIconWrapper name='iterate' showAnimation={(entry.intersectionRatio) == 1 ? true : false } strokeArray={780}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
            <path
              fill="transparent"
              stroke="#000000"
              strokeWidth="2"
              d="M39.7,77.3l-10.4-3.5l-2.6,10.5l2.6-10.4l0.1,0l18.5,32l0.9,1.4c0.1,0.2,0.3,0.4,0.4,0.5
            c4.5,6.2,11.8,10.3,20,10.3c9.1,0,17.1-4.9,21.3-12.3l0.3-0.5c2-3.5,3.1-7.6,3.1-11.9c0-13.6-11.1-24.7-24.7-24.7
            S44.3,79.8,44.3,93.4s11.1,24.7,24.7,24.7c9.1,0,17.1-4.9,21.3-12.3l28.5-49.2l2.2-3.7c1.8-3.4,2.7-7.2,2.7-11.3
            c0-13.6-11.1-24.7-24.7-24.7l-0.2,0C85.3,16.9,74.4,28,74.4,41.5c0,13.6,11.1,24.7,24.7,24.7s24.7-11.1,24.7-24.7
            s-11.1-24.7-24.7-24.7l-17.5,0h-43C25.2,17,14.3,28,14.3,41.5c0,13.6,11.1,24.7,24.7,24.7s24.7-11.1,24.7-24.7
            C63.7,28,52.8,17,39.4,16.8l-35.8,0"
            />
         </svg>
        </SvgIconWrapper>
      </div>
    );
  };

  export default SvgIterate