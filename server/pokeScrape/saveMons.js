const fs = require('fs')

const { scrape } = require('./scrape')
const { pokeArr } = require('./pokeArr')

saveMons(0)

function saveMons (idx) {
  fs.readFile(`${__dirname}/pokeLibrary.json`, 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      let mons = JSON.parse(data)
      let searchMon = pokeArr[idx]
      let findMon = exists(searchMon)
      let pokeAlreadyCaught = mons.find(p => p.includes(findMon))
      if (pokeAlreadyCaught) {
        return saveMons(idx + 1)
      }
      console.log('-------')
      console.log('gonna catch a ', searchMon)
      scrape(searchMon)
        .then(res => {
          mons.push(res)
          fs.writeFile(`${__dirname}/pokeLibrary.json`, JSON.stringify(mons), (err) => {
            if (err) console.log(err)
            else console.log(searchMon, ' was caught!')
          })
          saveMons(idx + 1)
        })
    }
  })
}

function exists (mon) {
  switch (mon) {
    case 'Nidoran♀': return '029Nidoran'
    case 'Nidoran♂': return '032Nidoran'
    case 'Farfetch\'d': return '083Farfetch%27d'
    default:
      return mon
  }
}
