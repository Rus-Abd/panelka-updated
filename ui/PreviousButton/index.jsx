import React from 'react'
import { useRouter } from 'next/router'

export const PreviousButton = ({ link }) => {
  const router = useRouter()
  return (
    <button class="arrow left" onClick={() => router.push(link)}>
      <svg width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
        <polyline
          fill="none"
          stroke="#FFFFFF"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          points="
	45.63,75.8 0.375,38.087 45.63,0.375 "
        />
      </svg>
    </button>
  )
}
