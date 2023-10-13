import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import arrowIconBlack from '../../images/shared/desktop/arrow.svg'
import arrowIconWhite from '../../images/shared/desktop/arrow-white.svg'

interface LinkProps {
  title?: string
  url: string
  color?: string
  className?: string
}

const ArrowLink: React.FC<LinkProps> = ({ title, url, color, className }) => {
  const icon = color === '#000' ? arrowIconBlack : arrowIconWhite
  return (
    <ButtonContainer to={url} color={color} className={className}>
      {title}
      <img src={icon} />
    </ButtonContainer>
  )
}

const ButtonContainer = styled(Link)<{ color: string }>`
  color: ${(props) => `${props.color}`};
  display: flex;
  gap: 15px;
  align-items: center;
  transition: opacity 0.25s ease-in-out;
  &.flex {
    justify-content: space-between;
  }
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

export default ArrowLink
