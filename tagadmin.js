const fs = require('fs');
const moment = require('moment-timezone');
module.exports.config = {
    name: "tagadmin", // Tên lệnh, được sử dụng trong việc gọi lệnh
    version: "1.0.0", // phiên bản của module này
    hasPermssion: 2, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
    credits: "hi<@shibaSama>", // TruongMini
    description: "Tag!!", // Thông tin chi tiết về lệnh
    commandCategory: "BOT VIP", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
    usages: "[msg]", // Cách sử dụng lệnh
    cooldowns: 5 // Thời gian một người có thể lặp lại lệnh
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "bank.gif")) request("https://imgur.com/g5aJgvO").pipe(fs.createWriteStream(dirMaterial + "bank.gif"));
                       }

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads, args }) {
let uid = event.senderID;
    const { threadID, messageID, body } = event;
    switch (handleReply.type) {
        case "tagadmin": {
            let name = await Users.getNameUser(handleReply.author);
            api.sendMessage({body: `=====『 𝗔𝗗𝗠𝗜𝗡 𝗣𝗛𝗔̉𝗡 𝗛𝗢̂̀𝗜 』=====\n\n👤 𝗔𝗗𝗠𝗜𝗡: ${name || "Người dùng facebook"}\n💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${body}\n⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${moment().tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY-HH:mm:ss")}\n━━━━━━━━━━━━━━━━━━\n𝗥𝗲𝗽𝗹𝘆 ( 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 ) 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 đ𝗲̂̉ 𝗴𝘂̛̉𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 đ𝗲̂́𝗻 𝗔𝗗𝗠𝗜𝗡 💓`, attachment: await downLoad(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`, __dirname+'/cache/12345.jpg')}, handleReply.threadID, (err, info) => {
                if(err) console.log(err)
                else {
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: "reply",
                        messageID: info.messageID,
                        messID: messageID,
                        threadID
                    })
                }
            }, handleReply.messID);
            break;
        }
        case "reply": {
            let name = await Users.getNameUser(event.senderID);
            api.sendMessage({body: `===== 𝗨𝗦𝗘𝗥 𝗙𝗘𝗘𝗗𝗕𝗔𝗖𝗞 =====\n━━━━━━━━━━━━━━━━━━\n𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴  :${body}\n𝗡𝗮𝗺𝗲 : ${name || "Người dùng facebook"}\nUID : ${uid}\n𝙗𝙤𝙭 : ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${moment().tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY-HH:mm:ss")}\n𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻( 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 ) 𝗹𝗮̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗮𝗴`, attachment: await downLoad(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`, __dirname+'/cache/12345.jpg')},handleReply.threadID, (err, info) => {
                if(err) console.log(err)
                else {
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: "tagadmin",
                        messageID: info.messageID,
