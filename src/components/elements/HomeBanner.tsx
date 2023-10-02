import React from 'react'
import styled from 'styled-components'
import { HomeBannerProps } from '../../utils/queries/homeBanners'
import ArrowLink from './ArrowLink'

const HomeBanner: React.FC<HomeBannerProps> = ({ node, mirror, linkText }) => {
  const { title, description, desktop, tablet, mobile } = node
  return (
    <Container className={mirror ? 'mirror' : ''}>
      <div className='text-block'>
        <h2>{title}</h2>
        <p>{description}</p>
        {linkText && <ArrowLink title={linkText} color={mirror ? '#000' : '#fff'} url='/stories' />}
      </div>
      <Banner className='mobile' bannersm={mobile.file.url} bannermd={tablet.file.url} bannerlg={desktop.file.url} />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background-color: var(--black);
  overflow: hidden;
  min-height: 420px;
  &.mirror {
    background-color: var(--white);
    color: var(--black);
  }
  .text-block {
    display: block;
    justify-content: center;
    align-items: center;
    max-width: 387px;
    margin: 20px auto;
    padding: 0 35px;
    h2 {
      text-transform: uppercaseww;
    }
    p {
      padding: 20px 0 30px 0;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 273px;
    &.mirror {
      grid-template-columns: 273px 1fr;
      color: var(--black);
      .text-block {
        order: 1;
      }
    }
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 830px;
    &.mirror {
      grid-template-columns: 830px 1fr;
    }
  }
`
const Banner = styled.div<{ bannersm: string; bannermd: string; bannerlg: string }>`
  background-image: ${(props) => `url(${props.bannersm})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  min-height: 271px;
  min-width: 100vw;
  overflow: hidden;
  @media (min-width: 768px) {
    min-width: auto;
    background-image: ${(props) => `url(${props.bannermd})`};
  }
  @media (min-width: 1200px) {
    background-image: ${(props) => `url(${props.bannerlg})`};
  }
`

export default HomeBanner
