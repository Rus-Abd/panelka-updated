import React from 'react'
import { useRouter } from 'next/router'

export const ForwardButton = ({ link }) => {
  const router = useRouter()
  return (
    <button class="arrow right" onClick={() => router.push(link)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="60px"
        height="80px"
        viewBox="0 0 50 80"
        xmlSpace="preserve"
      >
        <polyline
          fill="none"
          stroke="#FFFFFF"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          points="
	0.375,0.375 45.63,38.087 0.375,75.8 "
        />
      </svg>
    </button>
  )
}
