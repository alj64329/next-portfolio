'use client'

import { useEffect, useState } from 'react'
import TerminalLoading from './components/Loading/TerminalLoading'


export default function Loading() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('hasSeenTerminal')

    if (!hasSeen) {
      setShow(true)

      const timer = setTimeout(() => {
        sessionStorage.setItem('hasSeenTerminal', 'true')
        setShow(false)
      }, 5500)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!show) return null

  return <TerminalLoading />
}