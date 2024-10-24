import { Flex, Text, Heading, Card, Stack, Separator } from "@chakra-ui/react";

export default function ServiceInfo() {
  return (
    <Flex
      flexDir={"column"}
      marginTop={"8%"}
      alignItems={"center"}
      justifyContent={"center"}
      marginBottom={"100px"}
    >
      <Heading size={"4xl"}>Real work, hallucination-proof reliability</Heading>
      <Text color={"gray"}>
        Autotab uses a mouse and keyboard like you—so anything you can do, it
        can do.
      </Text>

      <Stack
        gap="4"
        direction="row"
        wrap="wrap"
        width={"80%"}
        justifyContent={"center"}
        marginTop={"50px"}
      >
        {Array.from({ length: 4 }).map((_, idx) => (
          <Card.Root
            width="500px"
            height={"180px"}
            key={idx}
            backgroundColor={"#242424"}
          >
            <Card.Body gap="2" alignItems={"center"}>
              <Card.Title mb="2">Nue Camp</Card.Title>
              <Card.Description textAlign={"center"}>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. This is the card body. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. This is the card body. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </Stack>
      <Separator marginTop={"100px"} width={"70%"}></Separator>
    </Flex>
  );
}
