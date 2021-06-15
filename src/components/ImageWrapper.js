import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const _ImageWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  margin: 1rem auto;
  flex-direction: column;
`

const _Img = styled.img`
  width: ${props => (props.fill ? '100%' : 'auto')};
  max-height: ${props => (props.fill ? 'auto' : '18rem')};
  object-fit: contain;
  border-radius: 4px;
`

const Caption = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.darkGrey};
  margin-top: 0.5rem;
  text-align: center;
`

const ImageWrapper = ({
  src,
  alt,
  title,
  caption,
  fill,
  children,
  ...rest
}) => (
  <_ImageWrapper fill={fill}>
    <_Img src={src} alt={alt} title={title} {...rest} />
    <Caption>
      {caption} {children}
    </Caption>
  </_ImageWrapper>
)

ImageWrapper.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
}
export default ImageWrapper
