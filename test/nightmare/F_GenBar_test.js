Feature('Genbar component tests')

Scenario('see gen container', I => {
  I.seeElement('#gens')
})

Scenario('see starter pictures', I => {
  I.seeElement('.gen')
  I.seeInSource('/images/kantoStarters.jpg')
  I.seeInSource('/images/johtoStarters.jpg')
  I.seeInSource('/images/hoennStarters.jpg')
})

Scenario('see gen buttons', I => {
  I.seeElement('#genBut')
  I.see('KANTO')
  I.see('JOHTO')
  I.see('HOENN')
})

// yuck I dont know
Scenario('testlol', function * (I) {
  let style = yield I.grabAttributeFrom('img[src=/images/hoennStarters.jpg]', 'style')
  let realStyle = yield I.grabAttributeFrom('#hoenn', 'style') // cop out
})
