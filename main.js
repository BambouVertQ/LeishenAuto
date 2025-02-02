md5 = require('js-md5');


const login = require("./api/auth").login;
const pause = require("./api/auth").pause;

const Secrets = {
    username: process.env.LEISHEN_USERNAME,
    password: md5(process.env.LEISHEN_PASSWORD)
}


function start(username, password) {
    console.log('🌀雷神加速器暂停助手 开始运行-------')
    const user = {
        account_token: null,
        country_code: 86,
        lang: "zh_CN",
        password: "8c6142429bda95636a19ee0369db883a",
        region_code: 1,
        src_channel: "guanwang",
        user_type: "0",
        username: "18010971952"
    };

    login(user).then(res => {
        if (res.data.code == 0) {
            let account_token = res.data.data.login_info.account_token;
            pause({ "account_token": account_token, "lang": "zh_CN" }).then(res2 => {
                console.log(res2.data.code + ':' + res2.data.msg);
                console.log('🌀雷神加速器暂停助手 成功-------')

            })
        } else {
            console.log('🌀雷神加速器暂停助手 失败-------')
        }
        console.log('🌀雷神加速器暂停助手 结束运行-------')
    })


}


start(Secrets.username, Secrets.password);
