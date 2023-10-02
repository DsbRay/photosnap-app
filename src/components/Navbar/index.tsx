import React, { useState } from 'react'
import styled from 'styled-components'
import { Logo } from '../elements'
import { NavLink, Button } from '../elements'
import { LINK_DATA, LinkProps } from './data'
import Menu from './Menu'
import Dropdown from './Dropdown'

const Navbar = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false)
  const toggleDropdown = () => setIsDropdownActive(!isDropdownActive)
  return (
    <>
      <Nav className='desktop'>
        <Logo />
        <div className='link-container'>
          {LINK_DATA.map((link: LinkProps, i: number) => {
            return <NavLink key={i} title={link.title} url={link.url} isNav={link.isNav} />
          })}
        </div>
        <Button title='GET AN INVITE' color='#000' url='/' />
      </Nav>
      <Nav className='mobile'>
        <Logo />
        <Dropdown isDropdownActive={isDropdownActive} />
        <Menu isDropdownActive={isDropdownActive} toggleDropdown={toggleDropdown} />
      </Nav>
    </>
  )
}

const Nav = styled.div`
  height: 72px;
  width: 100%;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  &.desktop {
    display: none;
  }
  .link-container {
    display: flex;
    gap: 37px;
  }
  @media (min-width: 768px) {
    padding: 0 50px;
    &.mobile {
      display: none;
    }
    &.desktop {
      display: flex;
    }
  }
  @media (min-width: 1200px) {
    padding: 0 165px;
  }
`
export default Navbar
