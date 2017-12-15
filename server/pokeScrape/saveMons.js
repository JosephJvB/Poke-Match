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
      let pokeAlreadyCaught = mons.find(p => p.includes(searchMon))
      if (pokeAlreadyCaught) {
        console.log(searchMon, ' is already caught!')
        return saveMons(idx + 1)
      }
      console.log('gonna catch a ', searchMon)
      scrape(searchMon)
        .then(res => {
          mons.push(res)
          fs.writeFile(`${__dirname}/pokeLibrary.json`, JSON.stringify(mons), (err) => {
            if (err) console.log(err)
            else console.log(searchMon, ' was caught!')
          })
        })
    }
  })
}
