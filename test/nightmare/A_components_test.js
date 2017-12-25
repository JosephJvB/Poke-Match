Feature('components load with correct elements')

Scenario('see indexHTML elements', I => {
  I.amOnPage('/')
  I.seeElement('#app')
  I.seeInSource('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.css">')
  I.seeInSource('<link rel="stylesheet" href="/main.css">')
  I.seeInTitle('Catch \'em all!')
  I.seeInSource('<script src="/bundle.js"></script>')
})

Scenario('see App elements', I => {
  I.seeElement('hr')
  I.seeElement('.app-container')
  I.seeElement('hr')
})

Scenario('see Info elements', I => {
  I.seeElement('.button', 'is-danger is-large')
  I.see('RESET')
  I.see('Turn Count:')
  I.see('Poke-Pairs Caught:')
  I.seeElement('#info')
})

Scenario('see Board elements', I => {
  I.seeElement('#boardcontainer')
  I.seeElement('#niceMargin')
})

Scenario('see Cell elements', I => {
  I.seeElement('.cell')
})

Scenario('see Header elements', I => {
  I.see('Poke-Match!')
  I.seeElement('#header')
})

Scenario('see GenBar elements', I => {
  I.seeElement('#gens')
  I.seeElement('.gen')
  I.seeInSource('/images/kantoStarters.jpg')
  I.seeInSource('/images/johtoStarters.jpg')
  I.seeInSource('/images/hoennStarters.jpg')
  I.seeElement('#genBut')
  I.see('KANTO')
  I.see('JOHTO')
  I.see('HOENN')
})
