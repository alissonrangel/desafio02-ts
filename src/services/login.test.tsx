import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        const email = 'alisson@mail.com'
        login(email)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vinda(o), ${email}! Obrigado por acessar o sistema!`)
    })
})