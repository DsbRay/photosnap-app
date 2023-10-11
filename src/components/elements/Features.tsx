import React from 'react'
import styled from 'styled-components'
import { FeaturedProps } from '../../utils/queries/features'

const Features: React.FC<{ data: FeaturedProps[] }> = ({ data }) => {
  const isHomePage = data.length < 4
  return (
    <FeaturesContainer className={isHomePage ? 'home' : ''}>
      {data.map((feature: FeaturedProps, i: number) => {
        const { title, icon, description } = feature.node
        return (
          <div key={i}>
            <div className='img-block'>
              <img src={icon.file.url} alt={icon.file.fileName} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        )
      })}
    </FeaturesContainer>
  )
}

const FeaturesContainer = styled.div`
  display: grid;
  text-align: center;
  padding: 100px 20px;
  gap: 50px;
  h3 {
    padding: 30px 0 20px 0;
  }
  .img-block {
    height: 72px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: auto;
      height: auto;
    }
  }
  @media (min-width: 768px) {
    &.home {
      grid-template-columns: 1fr;
    }
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    &.home {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`

export default Features
