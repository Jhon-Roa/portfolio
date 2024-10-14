'use client'

import React, { forwardRef } from 'react'

export const CubeSpinner = () => (
  <div className="absolute left-1/2 top-1/2 w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
)

export const CubeContainer = forwardRef(({ children }, ref) => (
  <div
    ref={ref}
    className="mx-auto relative
               w-[280px] h-[280px] -mt-5 -mb-10
               sm:w-[480px] sm:h-[480px] sm:-mt-[60px] sm:-mb-[140px]
               lg:w-[640px] lg:h-[640px] lg:-mt-[120px] lg:-mb-[200px]"
  >
    {children}
  </div>
))

const Loader = () => {
  return (
    <CubeContainer>
      <CubeSpinner />
    </CubeContainer>
  )
}

export default Loader