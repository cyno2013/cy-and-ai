// app/greeting/page.tsx
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  IconButton,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function GreetingPage() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, blue.50, cyan.50)"
      position="relative"
    >
      {/* Back Button */}
      <Link href="/">
        <Button
          position="absolute"
          top={4}
          left={4}
          colorScheme="blue"
          size="lg"
          borderRadius="full"
          boxShadow="lg"
          _hover={{ transform: "scale(1.1)", boxShadow: "xl" }}
          transition="all 0.3s"
          zIndex={10}
          minW="auto"
          px={4}
        >
          ←
        </Button>
      </Link>

      <Container maxW="container.md">
        <VStack gap={8}>
          {/* Header */}
          <VStack gap={2}>
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              color="blue.700"
              textAlign="center"
              fontWeight="bold"
              paddingTop={"5"}
            >
              To My BabyLoves
            </Heading>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              color="blue.500"
              textAlign="center"
              fontWeight="semibold"
            >
              Aira Martin Lopez
            </Heading>
          </VStack>

          {/* Image */}
          <Box
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="2xl"
            border="4px solid"
            borderColor="white"
            maxW="400px"
            w="full"
          >
            <Box position="relative" w="full" h="400px">
              <Image
                src="/main.jpg"
                alt="Aira Martin Lopez"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </Box>

          {/* Message */}
          <VStack
            gap={4}
            bg="white"
            p={8}
            borderRadius="xl"
            boxShadow="lg"
            maxW="600px"
            w="full"
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.700"
              textAlign="center"
              lineHeight="tall"
            >
              Every moment with you is a blessing. Your smile brightens my
              darkest days, and your love fills my heart with joy.
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.700"
              textAlign="center"
              lineHeight="tall"
            >
              You are my sunshine, my inspiration, and my forever love.
            </Text>
            <Text fontSize="2xl" color="blue.600" fontWeight="bold" mt={2}>
              Merry Christmas ❤️
            </Text>
          </VStack>

          {/* Footer */}
          <Text fontSize="sm" color="blue.600" fontStyle="italic" mb={8}>
            Made with love, just for you
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
