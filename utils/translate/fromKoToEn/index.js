const translate = require('google-translate-api');

async function fromKoToEn(msg) {
    let tlMsg = await translate(msg, {from: 'ko', to: 'en'})
    return tlMsg.text
}

module.exports= fromKoToEn