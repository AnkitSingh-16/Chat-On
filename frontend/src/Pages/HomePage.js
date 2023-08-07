import React, { useEffect } from 'react'
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from '../components/autthentication/Login'
import SignUp from "../components/autthentication/SignUp";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const HomePage = () => {

  const history = useHistory();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
  

    if (user) { history.push("/chats"); }
    
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="	#f9d2d2"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        color="black"
      >
        <Text fontSize="4xl" fontFamily="Work sans" align={"center"}>
          Chat On
        </Text>
      </Box>
      <Box
        bg="#f9d2d2"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        color="white"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage