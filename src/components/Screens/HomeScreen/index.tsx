import React from 'react'
import { HomeBanner } from '../../elements'
import { getHomeBanners } from '../../../utils/queries'
import { HomeBannerProps } from '../../../utils/queries/homeBanners'
const HomeScreen = () => {
  const HOME_BANNERS = getHomeBanners()
  return (
    <>
      {HOME_BANNERS.map((banner: HomeBannerProps, i: number) => {
        const { node } = banner
        const isOdd = i % 2 !== 0
        const linkText = i === 0 ? 'GET AN INVITE' : 'VIEW THE STORIES'
        return <HomeBanner key={i} node={node} mirror={isOdd} linkText={linkText} />
      })}
    </>
  )
}

export default HomeScreen
