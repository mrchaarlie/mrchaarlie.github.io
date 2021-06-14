import React from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import StickyTitle from './StickyTitle'
import WidthWrapper from './WidthWrapper'
import TextWrapper from './TextWrapper'
import DashedUnderline from './DashedUnderline'
import mauiImg1 from '../img/maui-1.jpg'
import mauiImg2 from '../img/maui-2.jpg'
import mauiImg3 from '../img/maui-3.jpg'
import mauiImg4 from '../img/maui-4.jpg'

const CatImg = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 4px;
`

const About = () => (
  <WidthWrapper>
    <StickyTitle>About</StickyTitle>
    <TextWrapper>
      <p>
        Throughout the past 11 years, I've journeyed my way through the
        evolution of web and mobile technologies. I've built plenty of websites
        &amp; applications, eventually realizing that what I really loved doing,
        was creating designs that <em>look cool </em>😎.
      </p>
      <p>
        Having said that, I believe that form <strong>follows</strong> function.
        Good functionality is the key to problem-solving; good design elevates
        it. Like the conspicuousness of{' '}
        <DashedUnderline
          data-tip
          data-for="norman-doors"
          data-effect="solid"
          data-background-color="transparent"
          data-background-color="#000"
          data-delay-show="200">
          Norman doors
        </DashedUnderline>
        , I find myself constantly noticing problems and coming up with ways on
        how to improve them. Problems are brain-teasers to me: if I apply enough
        thought and research, a solution will present itself.
      </p>
      <ReactTooltip id="norman-doors">
        Doors that have the affordances that suggest the opposite of how the
        door actually functions.
      </ReactTooltip>
      <p></p>

      <p>
        The products I've worked on have all been unique, so they've had
        different constraints, problems, and solutions; what I have found to be
        constant though, is the willingness of peers (and of users) to help me
        design. Whenever I find myself in a rut, the people I work with have
        always shared their insights and knowledge to help out. I would not be
        where I am without the guidance of my past co-workers, mentors, and
        managers.
      </p>

      <p>
        In my free time, I like to hike, boulder, play (beach) volleyball,
        experiment with crypto, and play with my cat{' '}
        <DashedUnderline>
          <span data-tip data-for="maui-1" data-background-color="transparent">
            M
          </span>
          <span data-tip data-for="maui-2" data-background-color="transparent">
            a
          </span>
          <span data-tip data-for="maui-3" data-background-color="transparent">
            u
          </span>
          <span data-tip data-for="maui-4" data-background-color="transparent">
            i
          </span>
        </DashedUnderline>
        .
      </p>

      <ReactTooltip id="maui-1">
        <CatImg src={mauiImg1} alt="My cat Maui" />
      </ReactTooltip>
      <ReactTooltip id="maui-2">
        <CatImg src={mauiImg2} alt="Maui curled in a ball, sleeping" />
      </ReactTooltip>
      <ReactTooltip id="maui-3">
        <CatImg
          src={mauiImg3}
          alt="Maui lying on the ground with all 4 paws against the wall"
        />
      </ReactTooltip>
      <ReactTooltip id="maui-4">
        <CatImg src={mauiImg4} alt="Maui with a cat-sized santa hat on" />
      </ReactTooltip>

      <p>
        Design is problem-solving. Design is for everyone. Design is never done.
      </p>
    </TextWrapper>
  </WidthWrapper>
)
export default About
