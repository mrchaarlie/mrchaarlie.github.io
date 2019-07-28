import React from 'react'
import styled from 'styled-components'
import WidthWrapper from './WidthWrapper'
import StickyTitle from './StickyTitle'
import _IconCreate from './icons/Create'
import _IconDefine from './icons/Define'
import _IconDesign from './icons/Design'
import _IconPolish from './icons/Polish'
import _IconReferences from './icons/References'
import _IconResearch from './icons/Research'
import _IconValidate from './icons/Validate'

const _Process = styled.div``

const SvgWrapper = styled.div`
  height: 8rem;
  width: 8rem;

  &:active path {
    stroke-linecap: unset;
    animation: none !important;
  }

  path {
    stroke: ${props => props.theme.colors.primary};
    stroke-miterlimit: 0;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke 0.5s ease;

    // TODO
    &.animate {
      // stroke-linecap: unset;
      stroke-linecap: round;
    }
  }

  @keyframes animation-create {
    to {
      stroke-dasharray: 1038 1038;
      stroke-dashoffset: ${1038 * 2};
    }
  }
  @keyframes animation-define {
    to {
      stroke-dashoffset: 1330;
    }
  }
  @keyframes animation-design {
    to {
      stroke-dasharray: 339;
      stroke-dashoffset: ${339 * 2};
    }
  }
  @keyframes animation-polish {
    to {
      stroke-dashoffset: ${808 * 2};
    }
  }
  @keyframes animation-references {
    to {
      stroke-dasharray: 486 486;
      stroke-dashoffset: ${486 * 2};
    }
  }
  @keyframes animation-research {
    to {
      stroke-dashoffset: ${471 * 2};
    }
  }
  @keyframes animation-validate {
    to {
      stroke-dashoffset: 1595;
    }
  }
`
const IconCreate = styled(SvgWrapper)`
  path {
    stroke-dasharray: 0 1038;
    stroke-dashoffset: ${1038 / 2};
    animation: animation-create 2s ease-out forwards;
  }
`
const IconDefine = styled(SvgWrapper)`
  path {
    stroke-dasharray: 665;
    stroke-dashoffset: 665;
    animation: animation-define 2s ease-out forwards;
  }
`
const IconDesign = styled(SvgWrapper)`
  path {
    stroke-dasharray: 0 339;
    stroke-dashoffset: 178;
    animation: animation-design 2s ease-out forwards;
  }
`
const IconPolish = styled(SvgWrapper)`
  path {
    stroke-dasharray: 808;
    stroke-dashoffset: 808;
    animation: animation-polish 2s ease-out forwards;
  }
`
const IconReferences = styled(SvgWrapper)`
  path {
    stroke-dasharray: 0 486;
    stroke-dashoffset: 243;
    animation: animation-references 2s ease-out forwards;
  }
`
const IconResearch = styled(SvgWrapper)`
  path {
    stroke-dasharray: 471;
    stroke-dashoffset: 471;
    animation: animation-research 2s ease-out forwards;
  }
`
const IconValidate = styled(SvgWrapper)`
  path {
    stroke-dasharray: 780 793;
    stroke-dashoffset: 780;
    animation: animation-validate 2s ease-out forwards;
  }
`

const Process = () => (
  <_Process>
    <WidthWrapper>
      <StickyTitle>Process</StickyTitle>

      <IconResearch>
        <_IconResearch />
      </IconResearch>

      <IconDefine>
        <_IconDefine />
      </IconDefine>

      <IconCreate>
        <_IconCreate />
      </IconCreate>

      <IconDesign>
        <_IconDesign />
      </IconDesign>

      <IconPolish>
        <_IconPolish />
      </IconPolish>

      <IconValidate>
        <_IconValidate />
      </IconValidate>

      <IconReferences>
        <_IconReferences />
      </IconReferences>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia atque
        perferendis a laboriosam ea sequi nihil fugiat molestiae totam
        architecto tenetur, inventore quam impedit repellendus hic non fugit
        voluptate dolore quasi id. Ab unde voluptates hic eos odit saepe
        voluptatum!
      </div>
    </WidthWrapper>
  </_Process>
)
export default Process
