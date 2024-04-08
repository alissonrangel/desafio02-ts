# Desenvolvendo o Dio Bank
desenvolvido por [Nathally Souza](https://github.com/nathyts)

respondido por [Alisson Rangel](https://github.com/nathyts)

## Projeto desenvolvido com React

### Tecnologias
- Typescript

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências
    
    npm install

3 - Execute o projeto

    npm start

### Desafios
[x] Crie os componentes referentes aos elementos na página inicial
  - Crie um componente para o header, com o título da aplicação
  - Crie um componente para o botão, que aceite onClick como uma das props do componente
  - Refatore o componente Card para receber o formulário de login. Ao invés de chamar elemento por elemento na página inicial, apenas o componente Card deve ser chamado.

[x] Crie uma função de Boas vindas
  - Ao clicar no botão, deve aparecer um alert com uma mensagem de boas vindas
  - Crie o teste unitário da função

### Extras
 - adicionei ícones usando o IconButton e os ícones do react-icons
 - adicionei um botão de logout
 - adicionei mensagens com o Toast do chakra ui para as mensagens de login e logout
 - adicionei uma verificação simples caso email e/ou senha esteja(m) em branco, com um alert
 - atualizei o Footer