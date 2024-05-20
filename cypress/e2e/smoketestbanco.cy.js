describe("Test Suite - Conjunto de Prueba",()=>{
    beforeEach(() => {
        // runs before each test in the block
        cy.visit("http://zero.webappsecurity.com")

      })
    it("Validar Pagina de Inicio - Test Git merge", ()=>{
        
        cy.get(".active >img").should("be.visible")
        cy.get(".active > .custom >h4").contains("Jorge Vega")        

    })

    it("Prueba E2E - Transferencia de Fondos", ()=>{
        
        cy.get("#signin_button").click()
        cy.get("#user_login").type("username")
        cy.get("#user_password").type("password")
        cy.get(".btn").click()
        cy.get("#transfer_funds_tab > a").click()
        cy.get("#tf_fromAccountId").select("1")
        cy.get("#tf_Amount").select("5")
        cy.get("#tf_Amount").type("300")
        cy.get("#tf_description").type("transferencia de prueba 300")
        cy.get("#btn_submit").click()
        cy.get("#btn_submit").click()
        cy.get(".alert").contains("You successfully your transaction.")        
    })

    it.only("Prueba de actualizacion del grafico", ()=>{
       
        cy.get("#signin_button").click()
        cy.get("#user_login").type("username")
        cy.get("#user_password").type("password")
        cy.get(".btn").click()
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1259').should("be.visible")
        cy.get('#ext-sprite-1167 > tspan').click()
    
    })
})