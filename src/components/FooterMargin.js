import * as React from 'react'
import styled from 'styled-components'
import { FOOTER_HEIGHT } from './Footer'

const Margin = styled.div`
  padding-top: 1px;
  margin-bottom: ${FOOTER_HEIGHT};
`

const FooterMargin = () => (
  <Margin>
    {/* anchor necessary to scroll down to the bottom while tabbing, to reveal the hidden footer */}
    <a href="#footer"></a>
  </Margin>
)

export default FooterMargin
