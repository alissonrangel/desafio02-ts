import { Box, Center, Input, useToast, InputGroup, InputLeftElement } from "@chakra-ui/react"

import { login } from "../services/login"
import { MdAlternateEmail, MdOutlinePassword } from 'react-icons/md';
import { Button } from "./Button";
import { Header } from "./Header";
import { useState } from "react";
import { Footer } from "./Footer";

export const Card = () => {
  const toast = useToast()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value)
  }
  const handleChangeSenha = (event: any) => {
    setSenha(event.target.value)
  }

  const boasVindas = () => {    

    if (!email || !senha) {
      alert("Campo(s) email e/ou senha em branco")
      return;
    }

    toast({
      position: "top",
      duration: 3000,
      isClosable: true,
      render: () => (
        <Box color={"white"} backgroundColor={"green.500"} padding={10} borderRadius={30}>
          <Center><h1>Boas Vindas</h1></Center>
          <Center><h3>Login feito com sucesso, {email}</h3></Center>
        </Box>
      )
    })
    login(email)
  }

  return (
    <>
      <Header />
      <Box minHeight='300px' backgroundColor='blackAlpha.600' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <InputGroup marginBottom={"5"}>
            <InputLeftElement pointerEvents='none'>
              <MdAlternateEmail color='gray.300' />
            </InputLeftElement>
            <Input placeholder="E-mail" id="email" type="email" onChange={handleChangeEmail}/>
          </InputGroup>
          <InputGroup marginBottom={"5"}>
            <InputLeftElement pointerEvents='none'>
              <MdOutlinePassword color='gray.300' />
            </InputLeftElement>
            <Input placeholder="Senha" id="senha" type="password" onChange={handleChangeSenha} />
          </InputGroup>

          <Center>
            <Button onClick={boasVindas} colorScheme='blackAlpha' size='md' ariaLabel='Boas vindas'>
              Entrar no Sistema
            </Button>
          </Center>
        </Box>
      </Box>
      <Footer />
    </>
  )
}