import React from 'react'
import styled from 'styled-components'
import WidthWrapper from './WidthWrapper'
import StickyTitle from './StickyTitle'
import useIntersect from '../utils/useIntersect'
import SvgIconWrapper from './SvgIconWrapper'
import SvgSearch from './animatedIcons/Search'
import SvgWrite from './animatedIcons/Write'
import SvgRocket from './animatedIcons/Rocket'
import SvgGem from './animatedIcons/Gem'
import SvgIterate from './animatedIcons/Iterate'

const _Skills = styled.div``

const Wrapper = styled.div`
  margin: 2rem 0;
`

const SkillRow = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 1rem ${props => props.item *1.25}rem;
`

const Title = styled.h4`
  margin-left: 1rem;
`


const Skills = () => {

  return (
    <_Skills>
      <WidthWrapper>
        
        {/* <StickyTitle>Skills</StickyTitle> */}
        <h3>Skills</h3>
        
        <Wrapper>
          <SkillRow item={1}>
            <SvgSearch />
            <Title>Research</Title>
          </SkillRow>

          <SkillRow item={2}>
            <SvgWrite />
            <Title>Planning/Documentation</Title>
          </SkillRow>

          <SkillRow item={3}>
            <SvgRocket />
            <Title>Design</Title>
          </SkillRow>

          <SkillRow item={4}>
            <SvgGem />
            <Title>Polish</Title>
          </SkillRow>

          <SkillRow item={5}>
            <SvgIterate />
            <Title>Support</Title>
          </SkillRow>
          
        </Wrapper>
        
          
      </WidthWrapper>
    </_Skills>
  )
}

export default Skills
