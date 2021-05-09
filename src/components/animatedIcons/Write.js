import React from 'react'
import useIntersect from '../../utils/useIntersect'
import SvgIconWrapper from '../SvgIconWrapper'


const SvgWrite = props => {
    const [ref, entry] = useIntersect({
      threshold: 1.0
    });
  
    return (
      <div {...props} ref={ref}>
        <SvgIconWrapper name='write' showAnimation={(entry.intersectionRatio) == 1 ? true : false } strokeArray={665}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
            <path
            fill="transparent"
            stroke="#000000"
            strokeWidth="2.5"
            d="M110.3,108H18.2L28,82.6l15.2,15.2l65.6-65.4c2.1-2.1,2.2-5.6,0-7.8l-7.5-7.5c-2.1-2.1-5.6-2.1-7.8,0L28,82.6
            l15.2,15.2l-16.5,6.8l-5.1-5.1l-3.3,8.5l8.4-3.4"
            />
        </svg>
        </SvgIconWrapper>
      </div>
    );
  };

  export default SvgWrite