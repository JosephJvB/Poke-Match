Feature('Board component tests')

Scenario('see margin', I => {
  I.seeElement('#niceMargin')
})

Scenario('see boardcontainer', I => {
  I.seeElement('.boardcontainer')
})