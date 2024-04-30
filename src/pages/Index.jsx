import { Box, VStack, Text, Button, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5} maxW="960px" m="auto" mt="5vh">
      <VStack spacing={8}>
        <Text fontSize="4xl" fontWeight="bold">Welcome to My Portfolio</Text>
        <Text fontSize="2xl">Hi, I'm [Your Name]! I'm a web developer and designer.</Text>
        
        <Box as="section" p={5} w="full" bg="gray.100" borderRadius="md">
          <Text fontSize="3xl" fontWeight="bold">About Me</Text>
          <Text fontSize="xl">I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.</Text>
        </Box>
        
        <Box as="section" p={5} w="full" bg="gray.200" borderRadius="md">
          <Text fontSize="3xl" fontWeight="bold">Portfolio</Text>
          <Text fontSize="xl">Here are some of my projects. [Placeholder for project descriptions]</Text>
        </Box>
        
        <Box as="section" p={5} w="full" bg="gray.300" borderRadius="md">
          <Text fontSize="3xl" fontWeight="bold">Contact</Text>
          <VStack spacing={3}>
            <Link href="https://github.com" isExternal><Button leftIcon={<FaGithub />}>GitHub</Button></Link>
            <Link href="https://linkedin.com" isExternal><Button leftIcon={<FaLinkedin />}>LinkedIn</Button></Link>
            <Link href="mailto:your.email@example.com" isExternal><Button leftIcon={<FaEnvelope />}>Email Me</Button></Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;