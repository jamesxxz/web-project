import MainNavBar from "@/components/components/mainNavbar";
import About from "@/components/components/About";
import ServiceInfo from "@/components/components/ServiceInfo";
import { Center, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <MainNavBar />
      <About />
      <ServiceInfo />
      <footer>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          color={"gray"}
          gap={"50px"}
          marginBottom={"50px"}
          wrap={"wrap"}
        >
          <Text>Company name.... All rights reserved.</Text>
          <Text>Terms of Service • Privacy Policy • placeholder...</Text>
        </Flex>
      </footer>
    </>
  );
}
