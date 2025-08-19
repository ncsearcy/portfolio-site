'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useColorModeValue,
  Fade,
  Icon,
  useToast,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { EmailIcon, ExternalLinkIcon, DownloadIcon } from '@chakra-ui/icons'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const inputBg = useColorModeValue('white', 'gray.800')
  const toast = useToast()
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: 'Message sent!',
          description: 'Thank you for reaching out. I\'ll get back to you soon.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        const error = await response.json()
        throw new Error(error.message || 'Failed to send message')
      }
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: error instanceof Error ? error.message : 'Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResumeClick = () => {
    // Open the HTML resume in a new tab
    window.open('./Resume.html', '_blank', 'noopener,noreferrer')
  }

  return (
    <Box minH="100vh" display="flex" alignItems="center" py={20}>
      <Container maxW="container.lg">
        <Fade in={true}>
          <VStack spacing={12} align="stretch">
            <VStack spacing={4} align="start">
              <Heading
                size="2xl"
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
              >
                Get In Touch
              </Heading>
              <Text fontSize="lg" color={textColor} maxW="2xl">
                I'm always interested in new opportunities and collaborations. 
                Feel free to reach out if you'd like to work together!
              </Text>
            </VStack>

            <HStack spacing={12} align="start" flexDirection={{ base: 'column', md: 'row' }}>
              <VStack spacing={6} align="start" flex={1}>
                <Heading size="md">Let's Connect</Heading>
                <VStack spacing={4} align="start">
                  <Button
                    as="a"
                    href="mailto:nicholas@nicholassearcy.com"
                    leftIcon={<EmailIcon />}
                    variant="ghost"
                    justifyContent="start"
                    p={0}
                  >
                    nicholas@nicholassearcy.com
                  </Button>
                  
                  <Button
                    onClick={handleResumeClick}
                    leftIcon={<ExternalLinkIcon />}
                    variant="ghost"
                    justifyContent="start"
                    p={0}
                    cursor="pointer"
                  >
                    View Resume
                  </Button>

                  <Button
                    as="a"
                    href="https://linkedin.com/in/nicholassearcy"
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<ExternalLinkIcon />}
                    variant="ghost"
                    justifyContent="start"
                    p={0}
                  >
                    LinkedIn
                  </Button>
                  
                  <Button
                    as="a"
                    href="https://github.com/ncsearcy"
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<ExternalLinkIcon />}
                    variant="ghost"
                    justifyContent="start"
                    p={0}
                  >
                    GitHub
                  </Button>
                  
                </VStack>
              </VStack>

              <Box flex={1}>
                <form onSubmit={handleSubmit}>
                  <VStack spacing={6}>
                    <Heading size="md" alignSelf="start">Send a Message</Heading>
                    
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        bg={inputBg} 
                        placeholder="Your name" 
                      />
                    </FormControl>
                    
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        bg={inputBg} 
                        placeholder="email@example.com" 
                      />
                    </FormControl>
                    
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        bg={inputBg} 
                        placeholder="Tell me about your project or just say hi!" 
                        rows={5}
                      />
                    </FormControl>
                    
                    <Button
                      type="submit"
                      colorScheme="blue"
                      size="lg"
                      alignSelf="start"
                      isLoading={isSubmitting}
                      loadingText="Sending..."
                      _hover={{ transform: 'translateY(-2px)' }}
                    >
                      Send Message
                    </Button>
                  </VStack>
                </form>
              </Box>
            </HStack>
          </VStack>
        </Fade>
      </Container>
    </Box>
  )
}