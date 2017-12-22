Feature('Header component tests')

Scenario('see heading', I => {
  I.see('Poke-Match!')
})

Scenario('see header-div', I => {
  I.seeElement('#header')
})
