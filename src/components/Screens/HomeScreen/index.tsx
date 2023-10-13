import React from 'react'
import { Banner, Stories, Features } from '../../elements'
import { getHomeBanners, getFeatures, getStories } from '../../../utils/queries'
import { BannerProps } from '../../../utils/queries/homeBanners'

const HomeScreen = () => {
  const HOME_BANNERS = getHomeBanners()
  const HOME_FEATURES = getFeatures(true)
  const HOME_STORIES = getStories(true)
  return (
    <>
      {HOME_BANNERS.map((banner: BannerProps, i: number) => {
        const { node } = banner
        const isOdd = i % 2 !== 0
        const linkText = i === 0 ? 'GET AN INVITE' : 'VIEW THE STORIES'
        return <Banner key={i} node={node} mirror={isOdd} linkText={linkText} />
      })}
      <Stories data={HOME_STORIES} />
      <Features data={HOME_FEATURES} />
    </>
  )
}

export default HomeScreen
