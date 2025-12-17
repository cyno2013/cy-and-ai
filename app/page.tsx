// app/page.tsx
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, blue.100, cyan.100)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="container.sm">
        <VStack gap={8} p={8}>
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            color="blue.700"
            textAlign="center"
            fontWeight="bold"
          >
            Hi BabyLoves! 💙
          </Heading>

          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            color="blue.600"
            textAlign="center"
          >
            I made this just for you. Pick one below!
          </Text>

          <Link href="/greeting">
            <Button
              size="lg"
              colorScheme="blue"
              fontSize="xl"
              px={12}
              py={8}
              borderRadius="full"
              boxShadow="xl"
              _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
              transition="all 0.3s"
            >
              Open Your Message 💙
            </Button>
          </Link>
          <Link href="/memories">
            <Button
              size="lg"
              colorScheme="blue"
              fontSize="xl"
              px={12}
              py={8}
              borderRadius="full"
              boxShadow="xl"
              _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
              transition="all 0.3s"
            >
              Open Our Memories 📸
            </Button>
          </Link>
        </VStack>
      </Container>
    </Box>
  );
}
