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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURSUThlRnFhTTFvQUFrSVF3b1B0UVVBenFsNXZQTlpsZlhtOXE5bGxHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHJrVmpTc2lXWSsvV3JaREttRWgzNm82Tk1TZGNyMlpzUkQ3bFljMEhTND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyR2l2UnZXQ2h5RXRVTFNrdjY4cSt6dlhzRUJDSDByVG9ydC9MY3VFTlg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0SU82TmJicDl0dE1PYW8wRUgrNURUU2xqS0J3WEkxOHpDRjA2WFZGQzFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9IYjZNZWttVWprVEhKNHYyRjJ0bXVsNzI1TzhZR3dqckxrR2hhSm5TVVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJBNjc4dGdFM3Y5SnBmdVhIYXFad2pkaFh3c0Zac1MreDFOWlZXK2ZoRVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0Y3K2ZhYzZqZWR0ZGtrRWNDRGlMZ1JJYTUzczJ3MzVnMXJ0NEtNZE1Xaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjZ2WHFwZllyUzB0QU9uWmJJVHdTc1Mxdys0YmJWYlBzeVpGUGZNeHZCTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImEydGh5UndVc21nVWNDQk5tZUxqMm9KMUZSRjF3WEZUc1oxNnlLU044aUk0WWhDYVlwcTczUXh5NlhDU1dpVEhiTFRGRnN1M01Ra21nSEU1NDlNYmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM3LCJhZHZTZWNyZXRLZXkiOiIrMWJXQTJ0SWI5WjB0S1QzMlFmVS9QQ0xnMHFWWDJKdmFMenJkVy9VY25JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI1MjAzODkwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU2NTYyNjU2MjQ0N0FFMDUxQjNFRDk2NDUyM0VFMUY0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzNzQ1MTh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI1MjAzODkwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk2RDdDQUUyREY1Q0ZERUQ0RjEzMURDRjlEQzc4ODZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzNzQ1MTl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVaSGxwckw0U0N5amFvYXFpeF94MVEiLCJwaG9uZUlkIjoiMzA0NDcxMzItMzNkZi00YzUwLWIzM2QtNjRlYmZiMWM0MDY2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9ObDgvOUhYU3dzbTdRWmsyb1E0dVlFWHdFYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxY0dFUUlqNHllUzVDQTBDYUI1bitSN0pTRVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOVJUUkQxMUQiLCJtZSI6eyJpZCI6Ijk0NzI1MjAzODkwOjRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNDYzMTI5NTk5MzA0NTk6NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09qMmlvTUZFS1RIZzhVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkEvcG9HVnNEYmIvV0cvMVQ1bEJ4blMva1lrWms3eDJ6YjFLRHo5ckoyQXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZ3RkNlaWFVY2ZRc2I5ak16OWxRMUY2MlFZc0tpNW9sbU55UUNuNXRRMnhXeW96d2JBaTJqcnY2eUR1YTZCRFBuNW9RRzRIQktaemxUV3A5anJ6dER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3TWxpRlEwMm4ySTZoSjFTNWZFa2UzdkRuN2RPdkxQb1FIVjZVL2paTkVYR1dwSm9UbWh4Q3A4b3J1Y2FHNTZaSmJPZ0pEQlVEUVFDYUhRUEtXV21pdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI1MjAzODkwOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVA2YUJsYkEyMi8xaHY5VStaUWNaMHY1R0pHWk84ZHMyOVNnOC9heWRnTSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1Mzc0NTE1LCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
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
