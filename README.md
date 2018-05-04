# telegram 연동

* `./config/telegram.json`

```json
{
  "token": "543872133:AAFBY7TQ2pyrWNiC7646IrIZUIp1NH5Dcy8",
  "name": "test",
  "chatId": "-233197550", // 공용

  "teams": {
    "groupName1": "chatId", // 운용 챗봇 1
    "groupName2": "chatId", // 운용 챗봇 1
    "groupName3": "chatId"  // 운용 챗봇 1
    // . . . 중략 . . .
  }
}
```

연동하고자 하는 telegram 봇의 api와 팀 이름, id를 넣어야 정상동작

* dependencies modules install

```bash
$ npm install
$ npm start
```

# API


```
/api/v1.0/message?msg={message}&group={group name}
```