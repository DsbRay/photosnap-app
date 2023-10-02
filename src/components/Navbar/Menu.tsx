import React from 'react'
import menuIcon from '../../images/shared/mobile/menu.svg'
import closeIcon from '../../images/shared/mobile/close.svg'
import { DropdownProps } from './data'

const Menu: React.FC<DropdownProps> = ({ isDropdownActive, toggleDropdown }) => {
  return <div onClick={toggleDropdown}>{isDropdownActive ? <img src={closeIcon} /> : <img src={menuIcon} />}</div>
}

export default Menu
