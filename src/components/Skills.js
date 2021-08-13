import React from 'react'
import styled from 'styled-components'
import WidthWrapper from './WidthWrapper'
import SvgSearch from './animatedIcons/SvgSearch'
import SvgRocket from './animatedIcons/SvgRocket'
import SvgGem from './animatedIcons/SvgGem'
import SvgIterate from './animatedIcons/SvgIterate'

const _Skills = styled.div`
  margin-bottom: 8rem;
`

const Wrapper = styled.div`
  margin: 2rem 0;
`

const Title = styled.h5`
  color: ${props => props.theme.colors.darkGrey};
  text-align: center;
  width: 100%;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin: 3rem 0 0;
`

const SkillItem = styled.div`
  align-self: center;
  justify-self: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: ${props => props.item * 3 - 7.5}rem;

  svg {
    cursor: pointer;
    transition: all 0.25s ease-out;

    &:hover {
      opacity: 0.6;
    }
  }
`

const Caption = styled.div`
  color: ${props => props.theme.colors.darkGrey};
`

const Skills = () => {
  return (
    <_Skills>
      <WidthWrapper>
        <Wrapper>
          <Title>I specialize in</Title>

          <Grid>
            <SkillItem item={1}>
              <SvgSearch delay={0} opacity={0.7} />
              <Caption>Research</Caption>
            </SkillItem>

            <SkillItem item={2}>
              <SvgRocket delay={2 * 300} opacity={0.7} />
              <Caption>Strategy</Caption>
            </SkillItem>

            <SkillItem item={3}>
              <SvgGem delay={4 * 300} opacity={0.7} />
              <Caption>Visual design</Caption>
            </SkillItem>

            <SkillItem item={4}>
              <SvgIterate delay={6 * 300} opacity={0.7} />
              <Caption>Validation</Caption>
            </SkillItem>
          </Grid>
        </Wrapper>
      </WidthWrapper>
    </_Skills>
  )
}

export default Skills
