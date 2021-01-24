/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
  'd6205790a2124f9abbdf185f08737ce6@e211fa600b1443fb8de8e42b3f4e8d36@b39e49a3094044dc857896074c5c1175@53942a9558924544b48cd75d26c3ee07@50dc28e5c9074e219dca04a608915f3c',
  'cb316911677e4c22bf458c83b1af19fe@e211fa600b1443fb8de8e42b3f4e8d36@b39e49a3094044dc857896074c5c1175@53942a9558924544b48cd75d26c3ee07@50dc28e5c9074e219dca04a608915f3c',
  'cb316911677e4c22bf458c83b1af19fe@d6205790a2124f9abbdf185f08737ce6@b39e49a3094044dc857896074c5c1175@53942a9558924544b48cd75d26c3ee07@50dc28e5c9074e219dca04a608915f3c',
  'cb316911677e4c22bf458c83b1af19fe@d6205790a2124f9abbdf185f08737ce6@e211fa600b1443fb8de8e42b3f4e8d36@53942a9558924544b48cd75d26c3ee07@50dc28e5c9074e219dca04a608915f3c',
  'cb316911677e4c22bf458c83b1af19fe@d6205790a2124f9abbdf185f08737ce6@e211fa600b1443fb8de8e42b3f4e8d36@b39e49a3094044dc857896074c5c1175@50dc28e5c9074e219dca04a608915f3c',
  'cb316911677e4c22bf458c83b1af19fe@d6205790a2124f9abbdf185f08737ce6@e211fa600b1443fb8de8e42b3f4e8d36@b39e49a3094044dc857896074c5c1175@53942a9558924544b48cd75d26c3ee07'
]
// 判断github action里面是否有东东农场互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
