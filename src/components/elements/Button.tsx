import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

interface ButtonProps {
  title: string
  url: string
  color?: string
}

const Button: React.FC<ButtonProps> = ({ title, url, color }) => {
  return (
    <ButtonContainer to={url} color={color}>
      {title}
    </ButtonContainer>
  )
}

const ButtonContainer = styled(Link)`
  color: ${({ color }) => (color === '#000' ? '#fff' : '#000')};
  background-color: ${({ color }) => `${color}`};
  height: 40px;
  width: 310px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease-in-out;
  &:hover {
    color: ${({ color }) => (color === '#000' ? '#000' : '#fff')};
    background-color: ${({ color }) => (color === '#000' ? '#dfdfdf' : '#000')};
  }
  @media (min-width: 768px) {
    width: 158px;
  }
`

export default Button
