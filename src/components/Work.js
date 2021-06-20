import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import StickyTitle from './StickyTitle'

import WidthWrapper from './WidthWrapper'

import imgTaxonomyAnnotatorHero from '../img/work/taxonomy-annotator-hero.png'
import imgJobTracker from '../img/work/job-tracker-hero.png'
import img100Accelerator from '../img/work/100+-accelerator-hero.png'
import imgFemaleFunders from '../img/work/female-funders-hero.jpg'

const workData = {
  taxonomyAnnotator: {
    title: 'Taxonomy Annotator',
    subtitle: 'LivePerson',
    image: imgTaxonomyAnnotatorHero,
    category: 'Web tool',
    linkTo:
      '//www.figma.com/proto/dcvfNqQNpBMSNqUI9P5qkV/Charles-Wu-Taxonomy-Annotator?page-id=0%3A1&node-id=1%3A2&viewport=-720%2C-314%2C0.12367748469114304&scaling=contain',
    externalLink: true,
    className: 'position-1',
  },
  careerJsm: {
    title: 'Job Tracker',
    subtitle: 'CareerJSM',
    image: imgJobTracker,
    category: 'Web app',
    linkTo:
      '//www.figma.com/proto/5dLkiVYyUAFQZViWR5kv7i/Portfolio-Charles-Wu-Job-Tracker?page-id=0%3A1&node-id=109%3A4826&viewport=-497%2C-2295%2C0.16505616903305054&scaling=contain',
    externalLink: true,
    className: 'position-2',
  },
  oneHundredAccelerator: {
    title: '100+ Accelerator',
    subtitle: 'Highline Beta + AB InBev',
    image: img100Accelerator,
    category: 'Website',
    linkTo: '/100-accelerator',
    externalLink: false,
    className: 'position-3',
  },
  femaleFunders: {
    title: 'Female Funders',
    subtitle: 'Highline Beta',
    image: imgFemaleFunders,
    category: 'Website',
    linkTo: '/female-funders',
    externalLink: false,
    className: 'position-4',
  },
}

const WorkContainer = styled.div`
  position: relative;
  margin: 2rem 0;
  display: grid;
  grid: auto-flow / repeat(6, 1fr);
  gap: 2rem;
  text-align: left;

  @media ${props => props.theme.media.small} {
    grid: auto-flow / repeat(12, 1fr);
  }
`

const ItemBody = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  z-index: 100;
  text-decoration: none;
  color: ${props => props.theme.colors.darkerGrey};
  border-radius: 0.25rem;

  &:hover {
    color: ${props => props.theme.colors.darkGrey};
  }
  &:active,
  &:focus {
    outline: none;
    box-shadow: 0 0 1px 2px ${props => props.theme.colors.primaryDark};
  }
`
const ItemImageWrapper = styled.div`
  width: 65%;
  perspective: 900px;
  position: relative;
  z-index: 10;
  ${props => props.theme.transforms.defaults};

  @media ${props => props.theme.media.small} {
    width: 80%;
  }
  @media ${props => props.theme.media.large} {
    width: 100%;
  }
`
const ItemImage = styled.img`
  flex: 1;
  height: auto;
  width: 100%;
  object-fit: contain;
  transition: all 0.4s ${props => props.theme.easings.easeOutCubic};
`
const ItemImageShadow = styled.div`
  position: absolute;
  top: auto;
  bottom: 0;
  width: 100%;
  height: 120%;
  width: 130%;
  z-index: 50;
`

const ItemTitle = styled.div`
  font-family: ${props => props.theme.fonts.heading};
  line-height: 1;
  font-size: 1.953rem;
  font-weight: 400;
  line-height: 1.15;
  color: ${props => props.theme.colors.black};
  border-bottom: 0.25rem solid ${props => props.theme.colors.primary};
  transition: all 0.25s ease-out;
  text-shadow: ${props => props.theme.shadows.text};

  @media ${props => props.theme.media.medium} {
    font-size: 2rem;
  }
`
const ItemSubtitle = styled.div`
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.grey};
  font-size: 1rem;
  line-height: 1;
`

const ItemCategory = styled.div`
  font-size: 1.125rem;
`
const WorkItem = styled.div`
  position: relative;
  margin: 2rem 0;
  height: 30vh;
  min-height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  grid-column: span 6;
  overflow: hidden;

  @media ${props => props.theme.media.small} {
    &.position-1 {
      grid-column: 1 / span 5;
    }
    &.position-2 {
      grid-column: 6 / span 5;
    }
    &.position-3 {
      grid-column: 2 / span 5;
    }
    &.position-4 {
      grid-column: 7 / span 5;
    }
  }

  @media ${props => props.theme.media.small} {
    height: 40vh;
    overflow: unset;
  }

  //Odd
  :nth-child(2n-1) {
    ${ItemBody} {
      align-items: flex-start;

      @media ${props => props.theme.media.large} {
        transform: translate(-8rem);
        width: calc(100% + 6rem);
      }
    }

    ${ItemImageWrapper} {
      transform: translate(5rem, -0.5rem);

      @media ${props => props.theme.media.small} {
        transform: translate(2rem, -2rem);
      }

      @media ${props => props.theme.media.medium} {
        transform: none;
      }
    }

    ${ItemImage} {
      ${props => props.theme.transforms.isometricLeft};
    }

    ${ItemImageShadow} {
      background: linear-gradient(
        20deg,
        rgba(249, 247, 246, 0.9) 15%,
        rgba(249, 247, 246, 0.45) 35%,
        rgba(249, 247, 246, 0) 75%
      );
      right: -5%;
    }
  }

  //Even
  :nth-child(2n) {
    align-items: flex-end;

    ${ItemBody} {
      align-items: flex-end;
      text-align: right;

      @media ${props => props.theme.media.large} {
        transform: translate(8rem);
        width: calc(100% + 6rem);
      }
    }

    ${ItemImageWrapper} {
      transform: translate(-5rem, -0.5rem);

      @media ${props => props.theme.media.small} {
        transform: translate(-2rem, -2rem);
      }

      @media ${props => props.theme.media.medium} {
        transform: none;
      }
    }

    ${ItemImage} {
      ${props => props.theme.transforms.isometricRight};
    }

    ${ItemImageShadow} {
      background: linear-gradient(
        340deg,
        rgba(249, 247, 246, 0.9) 15%,
        rgba(249, 247, 246, 0.45) 35%,
        rgba(249, 247, 246, 0) 75%
      );
      left: -5%;
    }
  }

  &:hover {
    ${ItemTitle} {
      border-bottom: 0.25rem solid ${props => props.theme.colors.primaryDark};
      color: ${props => props.theme.colors.primaryDark};
    }

    //Odd
    :nth-child(2n-1) {
      ${ItemImage} {
        ${props => props.theme.transforms.isometricZeroA};
      }
    }

    //Even
    :nth-child(2n) {
      ${ItemImage} {
        ${props => props.theme.transforms.isometricZeroB};
      }
    }
  }
`

const Work = () => {
  return (
    <>
      <WidthWrapper>
        <StickyTitle>Work</StickyTitle>

        <WorkContainer>
          {Object.values(workData).map((item, index) => (
            <WorkItem className={item.className} key={item.title}>
              <ItemImageWrapper>
                <ItemImage src={item.image} />
              </ItemImageWrapper>
              <ItemImageShadow />
              <ItemBody
                to={item.linkTo}
                target={item.externalLink ? '_blank' : ''}
                rel="noopener noreferrer">
                <ItemSubtitle>{item.subtitle}</ItemSubtitle>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemCategory>{item.category}</ItemCategory>
              </ItemBody>
            </WorkItem>
          ))}
        </WorkContainer>
      </WidthWrapper>
    </>
  )
}

export default Work
