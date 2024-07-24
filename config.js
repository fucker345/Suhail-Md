const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94761339509";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "94761339509,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94761339509,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_08_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDcyLFxuICAgICAgICA3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICA2MixcbiAgICAgICAgMTkzLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDU3LFxuICAgICAgICAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAzMixcbiAgICAgICAgODQsXG4gICAgICAgIDM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDc0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMixcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1LFxuICAgICAgICAzMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXMllEaWswN1EwNDgzNHprT1d4SXRsRjBaSGdvRUx1RXBMR1lsbWUvMlRJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwajh4blZ1N1JoZVQ2TnpybHRWY0FnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA1OGE2YzFiLWVkMTAtNDljZS05ZDRjLWZiZjU5MjQ2MzZkYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDY3LFxuICAgICAgMjQxLFxuICAgICAgMTg5LFxuICAgICAgNDksXG4gICAgICA5LFxuICAgICAgMTk1LFxuICAgICAgMjMzLFxuICAgICAgMTU3LFxuICAgICAgMjQ3LFxuICAgICAgMTI1LFxuICAgICAgMTI2LFxuICAgICAgNDMsXG4gICAgICA5NixcbiAgICAgIDEzLFxuICAgICAgMTk4LFxuICAgICAgNDIsXG4gICAgICAxNTQsXG4gICAgICA4OCxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzQsXG4gICAgICAyNTQsXG4gICAgICAxNDIsXG4gICAgICAxMjcsXG4gICAgICAxMDAsXG4gICAgICAxNDcsXG4gICAgICA3NSxcbiAgICAgIDIyNSxcbiAgICAgIDEyNixcbiAgICAgIDYyLFxuICAgICAgMTAsXG4gICAgICAxNDUsXG4gICAgICAyMjcsXG4gICAgICAyMjEsXG4gICAgICAwLFxuICAgICAgMTU2LFxuICAgICAgMTg1LFxuICAgICAgODQsXG4gICAgICAxNjUsXG4gICAgICAyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNTkpLOFc1V1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjEzMzk1MDk6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMDQ3MjI0MDA4MzAwMjoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdm16ZGtIRUwzZGc3VUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlExTnJCa1QremZjb0tVR1VLMW5nVkwwZWNOQUtPcWgvV3l0VlpXM3dpSGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSnFyLzlDVFYza2hxeXJFZmdzYm1aK0NhMk1lOHZWczJkdUVUT1hRLzJDN051OEpORDVjNTdNNDE2bGZVdHlzL0pjdlZQczlLUDBTa0s0bGMveWV0QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUlovQXROdnhZRlpXSW9xOUp1ODZoSGFlRGRNS1NlNkV4bkNOVEZjKyszaGFrZE9FWGxpaHZxdG9rS2tLQjkxYTd0dEJVcWdjZTlORW4ySU9WN0gxRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjEzMzk1MDk6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODIyOTEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSE1mXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFITWYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJieFNFWWVmK1FPaFhteEdVN1VrVmYxb1pjRkpUbkNYeHJ3RnlvRUlDNGtvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNjY5NjkzODUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxMzg2NTI0NzA3OFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "dewwa-md",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "dewwa-md",
  ownername:process.env.OWNER_NAME|| "dewwa_boy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
