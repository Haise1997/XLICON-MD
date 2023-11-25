const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "212644111551"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '212644111551' 
global.devs = '212644111551';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9ubEhHTWZ2RWVocGJyVDNlT2pxM205TGZISll2aTNzelYvMzdpQXhscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDI3V2g2RTUraDFjTFd6dFhSUWxlWGlqTjVkWUFQSjBXbGFIU1p2ZDJuVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQ3krRzZXUkVoZEZuYjZoR012L1grZlQ5a1lEYXVXQnp6VWl1LzFpcG1jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6SnNpYnEyckg4TStyUnJERm9HZ0xMVTNHWkxZbE9ldXhnS2x2NXlVaHk0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDajhJNkEyQ3JaeC9vcE1yWkZBL2pZMXZkT2NzOExnY0V0M0tlT3JSbnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZsZ2JFaXh3bHdUQmtVaWM4aHBlclhvN2NZNENGRVRMcG5BUDhuQ1kreE09In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVeWZVUWVCOThLS0N2RXFkZnA3bXJEa21EWHlpcW5JT1R5UjNxaUR5dW5vaWU1MUc3RWpNTUFwWVgycGwrUmliVksrMWlSN3FLTHZBN2REMTNqaTZpZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4NywiYWR2U2VjcmV0S2V5IjoiQWdWRVIwL0w0KzNUcTBIVDREM1MrOVcvN2J6bzk5RnIwVENDcTFDeStFMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNXZfRFZpcWNRZWVkR2sxREZnZmx4QSIsInBob25lSWQiOiJlNzBjMmJjNS03OGUyLTRhNGEtYjJjMC1lOTNhOTRjNWQ5NzkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1BQmp3dUJTODNlK08yeExJR3k2bm9UZzJzPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3ZDFWKzBOT3Mydk9NazRtU3hyTFI0Uk9uSjg9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJN201SWNCRU11VGlhc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1oVlVMMHdXR1g4MTI1YjRJTy9sVjFQd0tYQlVNdDd3UTV3VWhYcWpiUkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9HZTZFVnVyQXBxdlloT1pMS241c2FxWjYzMVB0MkdsSlhQOEx0aVA5aDFNM1RRNWhLbWpJL0ZNdzZtUk5SZFlJWDdOVm5sZ1J2TmVvWUF1MWd3U0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvVFRWN2cxMXNUT285dnNHOURTWS9UT081Q0F1THFqYzlnQllKVTAyNjB6QU5JWVFrN2I5UUVsSmdINGIrUWZXTWpDUzZleWFGbnNsVU1UdUN3YURnUT09In0sIm1lIjp7ImlkIjoiMjEyNjQ0MTExNTUxOjEwQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxMjY0NDExMTU1MToxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJab1ZWQzlNRmhsL05kdVcrQ0R2NVZkVDhDbHdWRExlOEVPY0ZJVjZvMjBRIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAwOTQwMjQwfQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'haise',
  packname:  process.env.PACK_NAME || 'hotoke',
   
  botname:   process.env.BOT_NAME === undefined ? "Haise-AG" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hi there' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
