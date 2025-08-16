//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUd5bmVmaUs3R25LbXJ6aEgvRjl0WXBBUTBzSkdTQUJobHlqanhFWFZGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1RxcXpHZjFxZ0s4WGVkL3pra2RFM0ppYjJFZ2Q0Z21yb3EyZEg3QWhRUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TnpxZmFrckNMbUFHTU1qbU9lVEl6bitqOHk0b042b2dQblM3RUNod0dJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWRlpkUUxCd2lLMnFEbHltQkFXdVVSU0cwdUdrUWJDVlQvQ1c1M1lWTENFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdFTFYyKzdNRGloR08xV2pzV1A4TzNaSG5ONDMvbGFkWlp2ZGhIbUt5Vzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpneG53Z1ZaTS8vN3AvNUpoZVpTV2kwNnFEYnU5Rncwdk9JYWFvdTZTVlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOENwelpMVGpjQ1BjVTJpQStmVnlQUGZMT0hwOGh3OEZnSHViajRzSTYyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibko2WUZ5WmlGdkhYYVpFczNuaVhyMnpOaXh1NEdGTTZoTkthQ2d3b0VrTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpQSDRsNVFWMFA3ZEdzbGdWVVBUZEwrZFFoQzI5NVFScjM0QUxNZCtxOGdwSFpqOTA5YVg1Ni9VZ01RcWM5dmk2NGNhbTdaSGtqbzBScFhaeTlzWWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzcsImFkdlNlY3JldEtleSI6ImFhV3RVSmdtZUpoakFEejZ5Vmo3elJqYUR1akU2bENPc3piSTQyS3Z2bW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjUyMDM4OTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0M0RDY4MzlCNkQ5NDc5QjBCQTc3RUE3RjU4OEZGODIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTM3MzQwMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjUyMDM4OTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDIzNDEzNzg2MzY5ODlFQTc2RkQyODdCMjUxNDVDRDMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTM3MzQwNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoid3hYQlczcjlSZTJ1RTVZb21fUkk4dyIsInBob25lSWQiOiJhNjVkNGY1NC0xY2YyLTQxNGYtOGZhYi0wYjcxZTU0Zjg3ZGEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM21XREpJTUpXVUJzOVJmMGR3dVBMVDFyQ3BJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ4dWtjWVNQc0laQS9uMUlvam5SQ25yam5rbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWTERaVlFCViIsIm1lIjp7ImlkIjoiOTQ3MjUyMDM4OTA6MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0NjMxMjk1OTkzMDQ1OToyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2IyaW9NRkVNdStnOFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQS9wb0dWc0RiYi9XRy8xVDVsQnhuUy9rWWtaazd4MnpiMUtEejlySjJBdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVFc3cjczb0NQY1FRdVBjM1BSazRlRjY0NW5zTTYyRk1iektmUkV6SU1QNHVBdGxwRzFIQWZmWTQ4SmN2ZVF1bHJjeitWLzdVSU10UkJUaVdrOVJQRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik5qTVhvTkZOQjRjZ3pvQUczMVBIUkVQZmdIbVBDeXRiQjVpZDExTHJRVUFXZVBadmJnSjl6Yk5OV3BLQ1ppWHB5aFRCeEN1QU9Lb3RkTjU1VUpiQWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjUyMDM4OTA6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRUDZhQmxiQTIyLzFodjlVK1pRY1owdjVHSkdaTzhkczI5U2c4L2F5ZGdNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUzNzM0MDAsImxhc3RQcm9wSGFzaCI6IlBXazVCIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94784504579",
  PASSWORD: 
    process.env.PASSWORD || "@Senura123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94725203890", "94769714218"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
