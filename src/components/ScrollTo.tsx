'use client'

import useScrollTo from '@/utils/hooks/useScrollTo'

type ScrollToPropsType = {
  scrollTarget: number
}

export const ScrollTo = ({ scrollTarget }: ScrollToPropsType) => {
  useScrollTo(scrollTarget)
  return <></>
}
