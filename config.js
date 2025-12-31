import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 


global.owner = [
  [ 'numero', 'name', true ]
]; 

global.suittag = ['50432955554'] 
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.Jadibts = true
global.packname = ' 𝙈𝙚𝙡𝙞𝙤𝙙𝙖𝙨';
global.botname = 'ʍɛʟɪօɖǟֆ';

global.dev = ' © ρσɯҽɾҽԃ Ⴆყ ʍɛʟɪօɖǟֆ';
global.textbot = '╰• Meliodas •╯';
global.ch = {
ch1: 'id_canal@newsletter',
ch2: 'id_canal@newsletter',
}
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.api_url = 'https://api.dynlayer.xyz'
global.moment = moment   

let icono1 = [
  'https://i.postimg.cc/c4t9wwCw/1756162596829.jpg',
  'https://i.postimg.cc/c4MvC5Wz/1756167144046.jpg',
  'https://i.postimg.cc/qMdtkHPn/1756167135980.jpg',
]

global.inc = icono1[Math.floor(Math.random() * icono1.length)];

const res = await fetch(inc);
const img = Buffer.from(await res.arrayBuffer());


async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdM.length)
let id = canalIdM[randomIndex]
let name = canalNombreM[randomIndex]
return { id, name }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
