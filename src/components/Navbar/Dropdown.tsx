import React from 'react'
import styled from 'styled-components'
import { Button, NavLink } from '../elements'
import { LINK_DATA, LinkProps, DropdownProps } from './data'

const Dropdown: React.FC<DropdownProps> = ({ isDropdownActive }) => {
  return (
    <DropdownContainer className={isDropdownActive ? 'display' : ''}>
      {LINK_DATA.map((link: LinkProps, i: number) => {
        return <NavLink key={i} title={link.title} url={link.url} isNav={link.isNav} />
      })}
      <div className='divider' />
      <Button title='GET AN INVITE' color='#000' url='/' />
    </DropdownContainer>
  )
}

const DropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: var(--white);
  left: 0;
  height: 253px;
  z-index: 0;
  top: 72px;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px 10px;
  align-items: center;
  display: none;
  &.display {
    display: flex;
  }
  .divider {
    height: 1px;
    background-color: var(--grey);
    width: 100%;
    width: 310px;
  }
`

export default Dropdown
