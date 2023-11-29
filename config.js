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
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0pGbWw2RGZVZmhvRHVWMjJka1hDcDBmdW1qVzBxWlBsZzJKQmc0YWhtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNi9lQmJQRi9kOGVxQk5KOTk4OGYyajRNQzYxaStqNVFyengxeGVveGVVbz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTGxMV2ZJbTNsMUhhTkd0UzdoanNhYXdudUhjNEhKcDRuc0tmcVh6aG5rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2a3lpb0pmZ0h4dzE4cUVHNjR1QlNGRVh5ZW8yWHI0eURnemlmS1o4ZzFzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitQb3NWZHdncVNpaThKTTdMdUU3NDNJRUhNbVphUW1hZTB6ajlSRUhpVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFTZTVaQlZITVYvQnF5M0l3bVAxZ0JqRDBXaG92M2hqMDJISVdUZllKbFE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHOVQzcXp5VzU3a2c4Y2Qzam5mb1hZZENkOWhzdWpsbTl4QXRwMDVNNWI0Ty93SkszTHZmVEEzdzRPRmVCQWR0dThyZWVIa1NQUkdGMllXVllaa2VnZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjExNywiYWR2U2VjcmV0S2V5IjoiYTRLUDJQVzI2dW9xdGk2N0x1RElnOFNVQjVjT1RqUFhuR2JVbm9KN2lEYz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTHdxVXA2T2RSbE9YWGlJTDd3YUNBUSIsInBob25lSWQiOiI0NWZmNWVhYS0xYTc5LTQ4OGItYTcxNi0xYzU2OGVlMDJiMzAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSndHMyttbWU4WGYzY0pOMStCdTI3NFRiMmMwPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLYTF3MmxpNENqNTVTczBWS3oySVc1QTRoR0E9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOU0o0Zk1CRUlUb25Lc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1LVjVYYmEyZ1ZwUVZPbkp6b2VJNzk3U1RNOFRDWTRNWHhySWduNHBERGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imc2RFJ4THd5KzdBUE5KT3lzaW9jMVc2T1h0ZjIvbytoM0RpNjdFZVl4WmxCZDNvVkx3V25NTWg0WXhSR0VqWnBVMUdmU2NLVWtreldTMjR1ZmtFWER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4cFlMcFRqbmJCUWFETGZYeGQwTjArRnhZak0zYTh1cWxVTEF4SWpiNlcreExBejNyOU9qc2VqdWtVTDRkeFdidmJQaUg4SjVWM3ByZTZ2REZTUEVpdz09In0sIm1lIjp7ImlkIjoiMjEyNjQ0MTExNTUxOjExQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxMjY0NDExMTU1MToxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaaWxlVjIydG9GYVVGVHB5YzZIaU8vZTBrelBFd21PREY4YXlJSitLUXc0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAxMjYyMzQzfQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'haise',
  packname:  process.env.PACK_NAME || 'hotoke',
   
  botname:   process.env.BOT_NAME === undefined ? "Haise" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'hotoke' : process.env.OWNER_NAME,  
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
