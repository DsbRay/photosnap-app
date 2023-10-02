import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logoImg from '../../images/shared/desktop/logo.svg'

const Logo: React.FC<{}> = () => {
  return (
    <LogoContainer to='/'>
      <img src={logoImg} alt='' />
    </LogoContainer>
  )
}

const LogoContainer = styled(Link)``

export default Logo
