import {
  Flex,
  Text,
  Image,
  Button,
  Heading,
  Stack,
  Box,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Flex
      flexDir={"column"}
      justifyContent="center"
      alignItems={"center"}
      marginTop={"5%"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
        wrap={"wrap"}
      >
        <Flex
          flexDir={"column"}
          width={"500px"}
          height={"400px"}
          justifyContent={"center"}
        >
          <Heading size={"4xl"}>Placeholder intro title...</Heading>
          <Text marginTop={"10px"} marginBottom={"30px"}>
            AI that does your repetitive work end to end, with superhuman
            reliability.
          </Text>
          <Flex gap={"10px"}>
            <Button>placeholder</Button>
            <Button
              variant={"ghost"}
              border={"1px solid"}
              _hover={{
                backgroundColor: "#D3D3D3",
                color: "black",
              }}
            >
              placeholders
            </Button>
          </Flex>
        </Flex>

        <Box
          width="620px"
          height="340px"
          transform="perspective(800px) rotateX(5deg) rotateY(-15deg)"
          overflow="hidden"
          boxShadow="lg"
          border="2px solid gray"
          borderRadius="5px"
        >
          <video
            muted
            autoPlay
            loop
            style={{
              borderRadius: "5px",
              alignItems: "center",
            }}
          >
            <source src="/assets/instruction_video.mp4" type="video/mp4" />
          </video>
        </Box>
      </Flex>

      <Stack alignItems={"center"} marginTop={"6%"}>
        <Text>any text...</Text>
        <Flex gap={"30px"}>
          <Image
            src="/assets/google.png"
            h="30px"
            w="130px"
            fit={"contain"}
          ></Image>
          <Image
            src="/assets/meta.png"
            h="30px"
            w="130px"
            fit={"contain"}
          ></Image>
        </Flex>
      </Stack>
    </Flex>
  );
}
