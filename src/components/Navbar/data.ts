export interface LinkProps {
  url: string
  title: string
  isNav: boolean
}
export interface DropdownProps {
  isDropdownActive: boolean
  toggleDropdown?: () => void
}
export const LINK_DATA = [
  {
    url: '/stories',
    title: 'Stories',
    isNav: true
  },
  {
    url: '/features',
    title: 'Features',
    isNav: true
  },
  {
    url: '/pricing',
    title: 'Pricing',
    isNav: true
  },
]