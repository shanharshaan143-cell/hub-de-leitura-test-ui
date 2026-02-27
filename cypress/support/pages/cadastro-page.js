class CadastroPage{

    //seletores
    CampoNome(){return cy.get('#name')}
    CampoEmail(){return cy.get('#email')}
    CampoTelefone(){return cy.get('#phone')}
    CampoSenha(){return cy.get('#password')}
    CampoConfirmarSenha(){return cy.get('#confirm-password')}
    CheckTermos(){return cy.get('#terms-agreement')}
    BotaoCriarConta(){return cy.get('#register-btn')}





    //metodos
    visitarPaginaCadastro(){
        cy.visit('register.html')

    }

    PreencherCadastro(nome,email,telefone,senha,confirmasenha){
        if(nome) this.CampoNome().clear().type(nome)
        this.CampoEmail().clear().type(email)
        this.CampoTelefone().clear().type(telefone)
        this.CampoSenha().clear().type(senha)
        this.CampoConfirmarSenha().clear().type(confirmasenha)
        this.CheckTermos().check()
        this.BotaoCriarConta().click()


    }




}

export default new CadastroPage()