import { createRequire } from "module";
const require = createRequire(import.meta.url);
 
//acquiring packages
import { franc } from 'franc'
const langs = require('langs')
const colors = require('colors')
 
//get language code
const text = process.argv[2]
const lCode = franc(text)
 
//get language name 
if (lCode === 'und')
  console.log('Sorry, I do not recognize this language...'.red)
else {
  const lang = langs.where("3", lCode)
  console.log(colors.green(`Language code: ${lCode} \nLanguage:      ${lang.name} \nLocal:         ${lang.local}`))
}
