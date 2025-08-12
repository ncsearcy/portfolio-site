// app/components/ClientWrapper.js
'use client'

import { useState, useEffect } from 'react'
import { Box, useColorModeValue, useColorMode } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import Navigation from './Navigation'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

const ThreeScene = dynamic(() => import('./ThreeScene'), {
  ssr: false,
  loading: () => (
    <Box 
      position="fixed" 
      top={0} 
      left={0} 
      w="100%" 
      h="100%" 
      bg="rgba(255, 160, 224, 0.1)"
      zIndex={-1}
    />
  )
})

export default function ClientWrapper() {
  const [activeSection, setActiveSection] = useState('about')
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const bg = useColorModeValue('rgba(247, 250, 252, 0.85)', 'rgba(26, 32, 44, 0.85)') // Semi-transparent

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'portfolio', 'contact']
      const scrollY = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(sectionId)
  }

  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      {/* Three.js Background - Fixed positioning */}
      <Box
        position="fixed"
        top={0}
        left={0}
        w="100vw"
        h="100vh"
        zIndex={-1}
        pointerEvents="none" // Prevent interaction issues
      >
        <ThreeScene isDark={isDark} />
      </Box>

      {/* Content with semi-transparent background */}
      <Box bg={bg} position="relative" zIndex={1} minH="100vh">
        <Navigation 
          activeSection={activeSection} 
          setActiveSection={scrollToSection} 
        />

        <Box id="about">
          <About />
        </Box>

        <Box id="portfolio">
          <Portfolio />
        </Box>

        <Box id="contact">
          <Contact />
        </Box>
      </Box>
    </Box>
  )
}