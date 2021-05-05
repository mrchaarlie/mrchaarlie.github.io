import React, { useState } from 'react'
import styled from 'styled-components'
import WidthWrapper from './WidthWrapper'
import StickyTitle from './StickyTitle'
import useIntersect from '../utils/useIntersect'
import SvgIconWrapper from './SvgIconWrapper'

const _Skills = styled.div``

const Demo = styled.div`
color: blue;
`

const SvgSearch = props => {
  const [state, toggle] = useState(props.initial || 0);

  const [ref, entry] = useIntersect({
    threshold: 1.0
  });

  const componentName = state === 0 ? "FadeBox" : "WidthBox";

  return (
    <div {...props} ref={ref} ratio={entry.intersectionRatio}>
      {/* intersectionRatio: {(entry.intersectionRatio)} */}
      intersectionRatio: {(entry.intersectionRatio) == 1 ? "yes" : "no" }
      <SvgIconWrapper showAnimation={(entry.intersectionRatio) == 1 ? true : false } strokeArray={477}>
        <svg version="1.1" class="svg" id="svg-search" xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 128 128"
          style={{enableBackground: 'new 0 0 128 128'}} xmlSpace="preserve">
          <path class="path path--search" fill="transparent" stroke="#000000" stroke-width="2.5"
          d="M91,86l-4.7-4.9c7.7-8.8,12.2-20.5,11.5-33.3c-1.3-23.4-20-42.2-43.4-43.7C26.4,2.3,3.3,25.4,5.1,53.4
          c1.5,23.4,20.3,42.1,43.7,43.3c12.8,0.7,24.5-3.8,33.3-11.5l5,5l-1,1c-1.2,1.2-1.2,3.1,0,4.2l10.4-10.3l28.6,28.5L114.7,124
          c1.2,1.2,3.1,1.2,4.2,0l6.2-6.2c1.2-1.2,1.2-3.1,0-4.2L114.7,124L86.1,95.4l10.4-10.3c-1.2-1.2-3.1-1.2-4.2,0l-1.1,1.1L91,86z" />
        </svg>
      </SvgIconWrapper>
    </div>
  );
};

const Skills = () => {

  return (
    <_Skills>
      <WidthWrapper>
        
        <StickyTitle>Skills</StickyTitle>
        
        <Demo>
          <SvgSearch />
        </Demo>
        
          
      </WidthWrapper>
    </_Skills>
  )
}

export default Skills
