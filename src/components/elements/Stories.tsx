import React from 'react'
import { StoryProps } from '../../utils/queries/stories'
import styled from 'styled-components'
import ArrowLink from './ArrowLink'

const Stories: React.FC<{ data: StoryProps[] }> = ({ data }) => {
  return (
    <StoryListContainer>
      {data.map((story: StoryProps, i: number) => {
        const { author, date, desktop, mobile, title } = story.node
        return (
          <StoryContainer key={i} bannerlg={desktop.file.url} bannersm={mobile.file.url}>
            <div className='story-details'>
              <p>{date}</p>
              <h3>{title}</h3>
              <p>{author}</p>
              <div className='divider' />
              <ArrowLink url='/' title='READ STORY' color='#FFF' className='flex' />
            </div>
          </StoryContainer>
        )
      })}
    </StoryListContainer>
  )
}

const StoryListContainer = styled.div`
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
const StoryContainer = styled.div<{ bannerlg: string; bannersm: string }>`
  position: relative;
  height: 375px;
  background-image: ${(props) => `url(${props.bannersm})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: bottom 1s ease;
  bottom: 0;
  .story-details {
    position: absolute;
    bottom: 0;
    padding: 20px;
    width: 100%;
    color: var(--white);
    .divider {
      width: 100%;
      height: 1px;
      background-color: var(--grey);
      margin: 20px 0;
    }
  }
  @media (min-width: 768px) {
    height: 500px;
    background-image: ${(props) => `url(${props.bannerlg})`};
  }
  @media (min-width: 1200px) {
    &:hover {
      bottom: 20px;
    }
  }
`
export default Stories
