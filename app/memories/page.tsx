// app/memories/page.tsx
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function MemoriesPage() {
  const memories = [
    {
      src: "/memory1.jpg",
      type: "image",
      title: "Birthday Date",
      description: "At Baclaran Church",
    },
    {
      src: "/memory2.jpg",
      type: "image",
      title: "Binondo Date",
      description: "Lord Stow Egg Tart",
    },
    {
      src: "/memory3.jpg",
      type: "image",
      title: "Pillow Gift",
      description: "Yakap yung unan",
    },
    {
      src: "/memory4.mp4",
      type: "video",
      title: "Going Home",
      description: "At the bus",
    },
    {
      src: "/memory5.jpg",
      type: "image",
      title: "Tierra Santa",
      description: "Visiting Sir Rolando (Papa)",
    },
    {
      src: "/memory6.mp4",
      type: "mp4",
      title: "Pinagtatawanan ako",
      description: "Nagaantay ng buko",
    },
  ];

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, blue.50, cyan.50)"
      position="relative"
      py={10}
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

      <Container maxW="container.xl">
        <VStack gap={10}>
          {/* Header */}
          <VStack gap={2} pt={8}>
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              color="blue.700"
              textAlign="center"
              fontWeight="bold"
            >
              Our Beautiful Memories
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="blue.600"
              textAlign="center"
            >
              Every moment with you is a treasure 📸
            </Text>
          </VStack>

          {/* Memories Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={8}
            w="full"
            px={4}
          >
            {memories.map((memory, index) => (
              <VStack
                key={index}
                bg="white"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="xl"
                _hover={{ transform: "translateY(-8px)", boxShadow: "2xl" }}
                transition="all 0.3s"
              >
                <Box position="relative" w="full" h="300px" bg="gray.100">
                  {memory.type === "image" ? (
                    <Image
                      src={memory.src}
                      alt={memory.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <video
                      src={memory.src}
                      controls
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </Box>
                <VStack gap={2} p={6} w="full">
                  <Heading fontSize="xl" color="blue.700" textAlign="center">
                    {memory.title}
                  </Heading>
                  <Text fontSize="md" color="gray.600" textAlign="center">
                    {memory.description}
                  </Text>
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>

          {/* Footer Message */}
          <VStack
            gap={4}
            bg="white"
            p={8}
            borderRadius="xl"
            boxShadow="lg"
            maxW="600px"
            w="full"
            mb={8}
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.700"
              textAlign="center"
              lineHeight="tall"
              fontStyle="italic"
            >
              "Every photo and video holds a piece of us, and every piece is a
              treasure I hold dear."
            </Text>
            <Text fontSize="xl" color="blue.600" fontWeight="bold">
              Forever and always 💙
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
