//my secript by @deltatech 𝐕𝟏6
//not sale this script

require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝗗𝗲𝗹𝘁𝗮𝗥𝗬𝘂𝗫𝗶𝗩𝟭𝟲🐉"
global.dana = "chat admin"
global.qris = "kosong"


// GLOBAL SETTING
global.owner = "6285840351569"
global.namabot = "𝗗𝗲𝗹𝘁𝗮𝗥𝗬𝘂𝗫𝗶𝗩𝟭𝟲🐉"
global.nomorbot = "6289517977390"
global.nameCreator = "𝗗𝗲𝗹𝘁𝗮𝗥𝗬𝘂𝗫𝗶𝗩𝟭𝟲🐉"
global.linkyt = "https://whatsapp.com/channel/0029Vau2a6EEawdpbbQgbv2z"
global.autoJoin = false
global.antilink = true
global.versisc = '30'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://pomf2.lain.la/f/y9gjy0sz.jpg'
global.isLink = "https://whatsapp.com/channel/0029Vau2a6EEawdpbbQgbv2z"
global.packname = "𝗗𝗲𝗹𝘁𝗮𝗥𝗬𝘂𝗫𝗶𝗩𝟭𝟲🐉"
global.author = "ཀ͡༑𝗗𝗲𝗹𝘁𝗮𝗥𝗬𝘂𝗫𝗶𝗩𝟭𝟲🐉"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})