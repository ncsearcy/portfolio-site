'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Button,
  useColorModeValue,
  Card,
  CardBody,
  CardFooter,
  Fade,
  HStack,
  Badge,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Portfolio() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://github.com/yourname/ecommerce-project',
      demo: 'https://your-ecommerce-demo.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application built with Next.js and PostgreSQL. Includes real-time updates and advanced Authentication features provdied by Clerk.',
      technologies: ['Next.js', 'Tailwind CSS', 'Clerk Auth', 'PostgreSQL', 'Prisma ORM', 'Shadcn/ui'],
      link: 'https://github.com/ncsearcy/task-app',
      demo: 'https://task-app-gules.vercel.app/'
    },
    {
      title: 'Print On Demand Project',
      description: 'A Print on Demand Console Application that was developed for my employer. It is used to help process Book requests from our clients',
      technologies: ['C#'],
      link: 'https://github.com/nsearcy-clgx/PrintOnDemand',
      demo: 'https://github.com/nsearcy-clgx/PrintOnDemand'
    },
    {
      title: 'Portfolio Website',
      description: 'This very website! Built with Next.js, Three.js, and Chakra UI. Features interactive 3D elements and smooth animations.',
      technologies: ['Next.js', 'Three.js', 'Chakra UI', 'Framer Motion'],
      link: 'https://github.com/ncsearcy/Portfolio',
      demo: 'https://portfolio-brown-rho-64.vercel.app/'
    }
  ]

  return (
    <Box minH="100vh" py={20}>
      <Container maxW="container.lg">
        <Fade in={true}>
          <VStack spacing={12} align="stretch">
            <VStack spacing={4} align="start">
              <Heading
                size="2xl"
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
              >
                My Portfolio
              </Heading>
              <Text fontSize="lg" color={textColor} maxW="2xl">
                Here are some of the projects I've worked on. Each project represents 
                a unique challenge and learning experience.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {projects.map((project, index) => (
                <Card key={index} bg={cardBg} shadow="lg" _hover={{ transform: 'translateY(-4px)' }} transition="all 0.3s">
                  <CardBody>
                    <VStack align="start" spacing={4}>
                      <Heading size="md">{project.title}</Heading>
                      <Text color={textColor} noOfLines={3}>
                        {project.description}
                      </Text>
                      <HStack wrap="wrap" spacing={2}>
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} colorScheme="blue" variant="subtle">
                            {tech}
                          </Badge>
                        ))}
                      </HStack>
                    </VStack>
                  </CardBody>
                  <CardFooter>
                    <HStack spacing={4}>
                      <Button
                        as="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftIcon={<ExternalLinkIcon />}
                        colorScheme="blue"
                        variant="outline"
                        size="sm"
                      >
                        Code
                      </Button>
                      <Button
                        as="a"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftIcon={<ExternalLinkIcon />}
                        colorScheme="blue"
                        size="sm"
                      >
                        Demo
                      </Button>
                    </HStack>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
        </Fade>
      </Container>
    </Box>
  )
}