import { Box, Center, Flex, IconButton, Spacer, Text, useToast } from "@chakra-ui/react"
import { MdAccountBalance, MdLogout } from "react-icons/md";

export const Header = () => {

  const toast = useToast()

  const logout = () => {    
    toast({
      position: "top",
      duration: 3000,
      isClosable: true,      
      render: () => (
        <Box color={"white"} backgroundColor={"red.700"} padding={10} borderRadius={30}>
          <Center><h1>Log Out</h1></Center>
          <Center><h3>Logout feito com sucesso</h3></Center>
        </Box>
      )
    })    
  }

  return (
    <Flex height="150px" direction={"column"} justify={"center"} align={"center"}>
      <Box fontSize="50px" fontFamily="cursive" width="80%">
        <Flex direction={"row"} justify={"center"} align={"center"}>          
          <MdAccountBalance color="purple"/>
          <Text marginLeft={10}>Dio Mundial Bank</Text>
          <Spacer />
          <IconButton onClick={logout} aria-label='Search database' icon={<MdLogout color="red" />}/>
        </Flex>        
      </Box>
    </Flex>
  )
}
