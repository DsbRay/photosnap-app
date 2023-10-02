import React from 'react'
import { Link } from 'gatsby'
import { LinkProps } from '../Navbar/data'
import styled from 'styled-components'

const NavLink: React.FC<LinkProps> = ({ url, title, isNav }) => {
  return (
    <LinkContainer to={url} color={isNav ? '#000' : '#fff'}>
      {title}
    </LinkContainer>
  )
}

const LinkContainer = styled(Link)<{ color: string }>`
  color: ${({ color }) => `${color}`};
`

export default NavLink
