'use client'
import useScrollTo from '@/utils/useScrollTo'

type ScrollToPropsType = {
  scrollTarget: number
}

export const ScrollTo = ({ scrollTarget }: ScrollToPropsType) => {
  useScrollTo(scrollTarget)
  return <></>
}
