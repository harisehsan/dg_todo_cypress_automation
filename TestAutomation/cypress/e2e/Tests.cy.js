
describe('High-Level Specification Testing', () => {
  var LISTSIZE = 10;
  it('Add and verify Todo list items', () => {
    var Name = 'Haris'
    cy.visit('http://localhost:8080/todo')    
    for(var i=1; i<= LISTSIZE; i++) {
      cy.get('#newtodo',{timeout:6000}).type(Name+i)
      cy.get('[type="submit"]').click()
      cy.get('ul > :nth-child('+i+')').should('contain',Name+i)
    }
  }) 

it('Modify todo list items and verify Todo list', () => {
  var ModifiedName = 'Ehsan' 
  for(var i=0; i< LISTSIZE; i++) {    
    cy.get('[href="/todo/'+i+'"]').click()  
    cy.get('#editTodo').type(ModifiedName+(i+1))
    cy.get('[type="submit"]').click()
    cy.get('ul > :nth-child('+(i+1)+')').should('contain',ModifiedName+(i+1))
  }
  })  

  it('Remove all existing Todo items and verify no item in list', () => {
    for(var i=(LISTSIZE-1); i>=0 ;i-- )
      cy.get('[href="/todo/delete/'+i+'"]',{timeout:6000}).click()
      cy.get('ul > :nth-child(1)').should('not.exist')
    })
})

describe('Bonus Testing', () => {
  
// After running tests: Display test coverage??
//directory called 'reports' in cypress folder are used to generate reports to determine the test coverage after execution.
// The directory called screen
// To use the report add '--reporter mochawesome' in command line for execution

  it('XSS vulnerability Testing', () => {
    var INPUTALERT = 'Hacked by Haris!'
      cy.get('#newtodo',{timeout:6000}).type('<script>alert("'+INPUTALERT+'")</script>')
      cy.get('[type="submit"]').click()
      cy.on('window:alert' , (str) => {
        expect(str).to.not.equal(INPUTALERT,'Application is exposed to vulnerability')
      })
    
})

it('After test',() => {
  // cy.on("window:confirm")
  cy.get('[href="/todo/delete/0"]',{timeout:6000}).click()
})

})


   
