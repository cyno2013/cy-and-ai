"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Button,
  Image,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function Home() {
  const [isValentines, setIsValenties] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  // Load saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("isValentines");
    if (saved !== null) {
      setIsValenties(JSON.parse(saved));
    }
  }, []);

  // Save preference when it changes
  const toggleValentines = () => {
    const newValue = !isValentines;
    setIsValenties(newValue);
    localStorage.setItem("isValentines", JSON.stringify(newValue));
  };

  // Add your image/video paths here
  const media = [
    { type: "image", src: "val1.jpg" },
    { type: "image", src: "val2.jpg" },
    { type: "image", src: "val3.jpg" },
    { type: "image", src: "val4.jpg" },
    { type: "image", src: "val6.jpg" },
    { type: "image", src: "val6.jpg" },
    { type: "image", src: "val7.jpg" },
    { type: "video", src: "valentines1.mp4" },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, blue.100, cyan.100)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="container.sm">
        <VStack gap={8} p={8} hidden={isValentines}>
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

        <VStack gap={8} p={8} hidden={!isValentines}>
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            color="pink.700"
            textAlign="center"
            fontWeight="bold"
            textTransform={"capitalize"}
          >
            Happy Valentines Day 💕
          </Heading>

          {/* Media Carousel */}
          <Box
            position="relative"
            width="100%"
            maxW="500px"
            height="500px"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="2xl"
          >
            {media[currentIndex].type === "image" ? (
              <Image
                src={media[currentIndex].src}
                alt={`Memory ${currentIndex + 1}`}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            ) : (
              <video
                src={media[currentIndex].src}
                controls
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}

            {/* Navigation Buttons */}
            <IconButton
              aria-label="Previous"
              position="absolute"
              left={2}
              top="50%"
              transform="translateY(-50%)"
              colorScheme="whiteAlpha"
              borderRadius="full"
              onClick={handlePrevious}
            >
              <ChevronLeftIcon boxSize={8} />
            </IconButton>
            <IconButton
              aria-label="Next"
              position="absolute"
              right={2}
              top="50%"
              transform="translateY(-50%)"
              colorScheme="whiteAlpha"
              borderRadius="full"
              onClick={handleNext}
            >
              <ChevronRightIcon boxSize={8} />
            </IconButton>
          </Box>

          {/* Show Message Button */}
          {!showMessage ? (
            <Button
              size="lg"
              colorScheme="pink"
              fontSize="xl"
              px={12}
              py={8}
              borderRadius="full"
              boxShadow="xl"
              _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
              transition="all 0.3s"
              onClick={() => setShowMessage(true)}
            >
              Ai 💌
            </Button>
          ) : (
            <Box
              bg="linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)"
              p={8}
              borderRadius="2xl"
              boxShadow="2xl"
              maxW="500px"
              width="100%"
              border="2px solid"
              borderColor="pink.300"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                borderBottom: "15px solid",
                borderBottomColor: "pink.300",
              }}
            >
              <Text
                color="pink.900"
                fontSize={{ base: "md", md: "lg" }}
                textAlign="center"
                lineHeight="tall"
                fontStyle="italic"
              >
                Ewan kung nasabi ko din dun sa unang letter, pero super thankful
                ako at nakilala kita, feeling ko ang swerte swerte ko sayo,
                kahit away bati tayo, kahit nagagalit tayo sa isa't isa, hindi
                ko ipagpapalit lahat ng memories na nagawa natin kahit ulitin ko
                pa yung march ba o april 2025 yun, ikaw at ikaw parin yung
                ichachat ko dun.
                <br />
                <br />
                Short message lang, happy valentines day and I love you so much
                :)
              </Text>
              <Text color="pink.700" fontSize="2xl" textAlign="center" mt={4}>
                ❤️
              </Text>
            </Box>
          )}
        </VStack>
      </Container>
      {/* Floating Toggle Button */}
      <IconButton
        aria-label="Toggle Theme"
        position="fixed"
        bottom={8}
        right={8}
        size="lg"
        colorScheme={isValentines ? "pink" : "blue"}
        borderRadius="full"
        boxShadow="2xl"
        _hover={{ transform: "scale(1.1)" }}
        transition="all 0.3s"
        onClick={toggleValentines}
      >
        {isValentines ? "💙" : "💕"}
      </IconButton>
    </Box>
  );
}
