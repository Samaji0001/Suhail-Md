const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349015754699";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_28_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg2LFxuICAgICAgICA3LFxuICAgICAgICAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyOCxcbiAgICAgICAgNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDgwLFxuICAgICAgICA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUyLFxuICAgICAgICA3MixcbiAgICAgICAgODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDcwLFxuICAgICAgICA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDksXG4gICAgICAgIDgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODEsXG4gICAgICAgIDIxLFxuICAgICAgICA0MSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0LFxuICAgICAgICA1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUyLFxuICAgICAgICA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU3LFxuICAgICAgICA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYxLFxuICAgICAgICA4NixcbiAgICAgICAgMTM1LFxuICAgICAgICA0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiclZxT3ppM016TG1RZ1RxTENiYTV5MFlYdWV4TlNUY2JrbEJEN0s4c0h6WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUURLalUzeUZTVS1qN2c3djZDLUs3d1wiLFxuICBcInBob25lSWRcIjogXCJkNTE0YTY0YS04YmIyLTRjNmUtOTIxMC02Nzc1OGNkMjc3YmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE5LFxuICAgICAgMzIsXG4gICAgICA4NCxcbiAgICAgIDIwLFxuICAgICAgMTUxLFxuICAgICAgNjMsXG4gICAgICAxNjUsXG4gICAgICAyMzksXG4gICAgICA4NyxcbiAgICAgIDI0OCxcbiAgICAgIDE2LFxuICAgICAgMTc1LFxuICAgICAgNTUsXG4gICAgICAyMDEsXG4gICAgICAxMDEsXG4gICAgICAxMDQsXG4gICAgICAyNDEsXG4gICAgICAzNSxcbiAgICAgIDIxMSxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAyMDMsXG4gICAgICA0NCxcbiAgICAgIDIwOCxcbiAgICAgIDY5LFxuICAgICAgMjAxLFxuICAgICAgMjExLFxuICAgICAgMTcxLFxuICAgICAgODYsXG4gICAgICA1LFxuICAgICAgMTIwLFxuICAgICAgMjI1LFxuICAgICAgMjM4LFxuICAgICAgNzcsXG4gICAgICAyMjksXG4gICAgICAxOTcsXG4gICAgICAyLFxuICAgICAgMjcsXG4gICAgICAxNjksXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1NMU0xSTjlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTU3NTQ2OTk6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjg4MTg2NDY4ODQ1Nzg6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUEUvb01GRU9YUHNyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVVSGIvL20zd0JFR3Q1bE16SU5sUmZGMWhZRXNhRUtGRE9iQnRsM0JraE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY0xJeXVqVlBYWXlJZW5jWmdkNnhhQi9jUmxIcThFYXJCaHBVbEc2WmM2eG9yMkdaMHlaT3ZVV1BudEJpdGdpMVRoSHViK2JTRHEwTEFhNmllNEZCQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTm9YSzBSU3ZvVWw5MDk3U00yUGw5VkphVUZzNHV5TmRsT0trOGxjVUlVYzlIRFY5bEM3bXhsWTNTWE85NGJpZkJIL2NPd1I4NUN0VjQ1RHcxN1BVZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNTc1NDY5OTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNTc1NDY5OTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODM5NjkwNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
