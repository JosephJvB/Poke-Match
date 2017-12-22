Feature('Index HTML tests')

Scenario('see app-div', I => {
  I.amOnPage('/')
  I.seeElement('#app')
})

Scenario('see bulma script', I => {
  I.seeInSource('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.css">')
})

Scenario('see title', I => {
  I.seeInTitle('Catch \'em all!')
})

Scenario('see bundle.js', I => {
  I.seeInSource('<script src="bundle.js"></script>')
})
