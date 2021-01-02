import styled from 'styled-components'

const StickyTitle = styled.h3`
  position: sticky;
  z-index: 99999;
  margin-bottom: 0;
  top: 0.5rem;
  text-shadow:
  0 0 2px ${props => props.theme.colors.offWhite},
  -2px -6px 4px ${props => props.theme.colors.offWhite},
  -2px 6px 4px ${props => props.theme.colors.offWhite},
  2px 6px 4px ${props => props.theme.colors.offWhite},
  2px -6px 4px ${props => props.theme.colors.offWhite};
  }
`
export default StickyTitle
