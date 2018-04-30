const translate = require('google-translate-api');

async function fromEnToKo(msg) {
    let tlMsg = await translate(msg, {from: 'en', to: 'ko'})
    return tlMsg.text
}

module.exports = fromEnToKo