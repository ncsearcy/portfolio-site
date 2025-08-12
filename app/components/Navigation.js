'use client'

import {
  Box,
  Flex,
  HStack,
  Button,
  useColorMode,
  useColorModeValue,
  IconButton,
  Container,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Navigation({ activeSection, setActiveSection }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <Box
      position="fixed"
      top={0}
      w="100%"
      bg={bg}
      backdropFilter="blur(10px)"
      zIndex={1000}
      borderBottom="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container maxW="container.lg">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box fontWeight="bold" fontSize="lg">
           Nicholas Searcy
          </Box>

          <HStack spacing={8}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => setActiveSection(item.id)}
                color={activeSection === item.id ? 'blue.400' : 'inherit'}
                _hover={{ color: 'blue.400' }}
              >
                {item.label}
              </Button>
            ))}
            
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}