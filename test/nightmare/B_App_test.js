Feature('App component tests')

Scenario('see hr', I => {
  I.seeElement('hr')
})

Scenario('see app elements', I => {
  I.seeElement('.app-container')
  I.seeElement('hr')
})