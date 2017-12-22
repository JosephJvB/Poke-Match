Feature('Info component tests')

Scenario('see info container', I => {
  I.seeElement('#info')
})

Scenario('see info text', I => {
  I.see('Turn Count:')
  I.see('Poke-Pairs Caught:')
})

Scenario('see reset button', I => {
  I.seeElement('.button is-danger is-large')
  I.see('RESET')
})
