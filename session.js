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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU8zU3A2RjFwRU5YMmdWSGhydWswK0NYYVV6dnZEa3FUSFFkWnB5RHJuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1FmdU93MjA1MDVHUWlLNTRvU21IZUJOODFtM0haVmJmL0hqYlh4SCtWMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQWNjdHg1QlVJRy8xWTFFZUE1U1A2QThwK0pzbkpEaXM3TFRpQzQ0WUVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvazR1dlAyT2hGUG1LQjdya3pwQ2h4K1h3bk9wNktuem1yUzVBalNWaWhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlCc293R3E4ZDA4cTROU28vajFnK3kvMlFPOExZSjVUaTZzNjFxd1R0VlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNGbHpobEVtUUhIMTV0dUM4STZOeUsyZEUxK2YrbjhhWExmc1Vha0VTbXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE02RjJWWm1tMXNIZFMzc0hERi85bzdWNlprYVl1Mk52SzlrcisxZ29uRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3JoeGVYd1pjNmk5Q1RDOEo2RmFNTU9CSmN4SE1kWG5wSW9aeDVQWjRTQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Img5QWRXT1puVVRsUTF1Rk92T3p6L0o0dGtRdmsxcWRpN3FpWm5rQ0UvUi90Z0c4R29KdEVrcnpvR3dWbTdwalpzR2tpeGRhNTJldE1OUzRUZlJhNWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJPMlJwRFUrUFh1QUFwanl6c1ZNdS8zbm5xT2pJNG4wdXNFOEhQUGhWREpBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0NTA0NTc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY2OTc2RDg2NUM3M0YzNUNBN0Q3Mzk2Q0U1QjQ2Q0Q1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU4Njc0NDl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0NTA0NTc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkJCQThBRjc0QUVGM0JBRTIyM0JERjdDQTM0NjIxQjg3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU4Njc0NTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjFxMnl6amc4U3NxVUxEajJ3UGdtclEiLCJwaG9uZUlkIjoiZmU0OWEzNWMtMWNhMC00MDNlLWI1N2UtNTkwODRiYmEyZGY1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRnY3Z4Rk9EVEtzOW90VzJoQ1p0UWZNZjRDRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmNjVZeExML2lGSk54RlBGa1lCR2lFVWdtcmc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRzhTQkdaTk4iLCJtZSI6eyJpZCI6Ijk0Nzg0NTA0NTc5OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oCiIE1PVklFIEJPVCDigKIiLCJsaWQiOiIxNDY4MzMzMzg3OTQwNTY6OUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ095Z3Fhc0NFS2pTb2NVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1jMXAvejlXb3M5Y2c0RUx3TDJPSUcwNHVOUGhBTlpWUGxFY1lJUWROa1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlXaGd4WnhFLzFHSTZTUHZibllOR1NSeEJYdEhoMzBWRzc4NmZUVW5PbW9xODc3Wnc1QVZkSExQVmU2cC9nVmNqTk85aXdUOVdHZTdLY1RFbHlvWkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4YTdvOFcrZEFjTHF1OFZvZ1RRZUxhZHdLWmdxNWJ4M2o3MTJ5cElNVmNuRmR3VXNtcTN6bmhmeDV4dmtoY0dTajJnMm1UNFRVQkFUbkJLeDJmZHFnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg0NTA0NTc5OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWm5OYWY4L1ZxTFBYSU9CQzhDOWppQnRPTGpUNFFEV1ZUNVJIR0NFSFRaRiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVUUF4QUEifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1ODY3NDQ3LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJvMyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94784504579",
  PASSWORD: 
    process.env.PASSWORD || "@Senura123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94784504579", "94769714218"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
