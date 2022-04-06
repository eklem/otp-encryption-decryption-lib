import { encryptabelCharactersRegex } from './regex.mjs'
import fs from 'fs'

const emojisTxt = fs.readFileSync('./emojis.txt', 'utf8').toString().trim()
const regex = new RegExp(encryptabelCharactersRegex, 'g')

const emojisArr = emojisTxt.match(regex)
let emojisCodebook = emojisArr.map((element, index) => {
  index = String(index).padStart(5, '0')
  return { txt: element, plaincode: index }
})
emojisCodebook = JSON.stringify(emojisCodebook, null, 2)

fs.writeFileSync('./codebook-emojis.json', emojisCodebook)
