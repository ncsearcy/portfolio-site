'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Fade,
} from '@chakra-ui/react'

export default function About() {
  const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Box minH="100vh" display="flex" alignItems="center" py={20}>
      <Container maxW="container.lg">
        <Fade in={true}>
          <VStack spacing={8} align="start">
            <Heading
              size="2xl"
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
            >
              Hi, I'm Nicholas!
            </Heading>
            
            <Text fontSize="xl" color={textColor} maxW="2xl">
              A passionate full-stack developer with expertise in modern web technologies. 
              I create beautiful, functional, and user-centered digital experiences.
            </Text>
            
            <Text color={textColor} maxW="2xl" lineHeight="tall">
              With a background in API Integrations and years of experience as a API Integration Consultant, 
              I specialize in React, Next.js, Node.js, and modern JavaScript frameworks. 
              I'm always excited to work on projects that challenge me to learn and grow.
            </Text>
            
            <Text color={textColor} maxW="2xl" lineHeight="tall">
              When I'm not coding, you can find me exploring new technologies, gardening, 
              or enjoying a good cup of coffee at my local cafe or on one of the beaches of Lake Michigan.
            </Text>
          </VStack>
        </Fade>
      </Container>
    </Box>
  )
}