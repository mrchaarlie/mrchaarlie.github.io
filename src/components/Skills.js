import React from 'react'
import styled from 'styled-components'
import WidthWrapper from './WidthWrapper'
import StickyTitle from './StickyTitle'
import useIntersect from '../utils/useIntersect'
import SvgIconWrapper from './SvgIconWrapper'
import SvgSearch from './animatedIcons/SvgSearch'
import SvgWrite from './animatedIcons/SvgWrite'
import SvgRocket from './animatedIcons/SvgRocket'
import SvgGem from './animatedIcons/SvgGem'
import SvgIterate from './animatedIcons/SvgIterate'

const _Skills = styled.div`
  margin-bottom: 8rem;
`

const Wrapper = styled.div`
  margin: 2rem 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
 `

const SkillItem = styled.div`
  align-self: center;
  justify-self: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  svg {
    cursor: pointer;
    transition: all 0.25s ease-out;
    
    &:hover {
      opacity: 0.6;
    }
  }
`

const Caption = styled.div`
  
`


const Skills = () => {

  return (
    <_Skills>
      <WidthWrapper>
        
        <Wrapper>
          <Grid>
            <SkillItem item={1}>
              <SvgSearch />
              {/* <Caption>Research</Caption> */}
            </SkillItem>
  {/* 
            <SkillItem item={2}>
              <SvgWrite />
              <Caption>Planning/Documentation</Caption>
            </SkillItem> */}

            <SkillItem item={2}>
              <SvgRocket delay={0.25}/>
              {/* <Caption>Design</Caption> */}
            </SkillItem>

            <SkillItem item={3}>
              <SvgGem delay={0.5}/>
              {/* <Caption>Polish</Caption> */}
            </SkillItem>

            <SkillItem item={4}>
              <SvgIterate delay={0.75}/>
              {/* <Caption>Validation</Caption> */}
            </SkillItem>
          </Grid>
          
          
        </Wrapper>
        
          
      </WidthWrapper>
    </_Skills>
  )
}

export default Skills
