const http = require('node:http')
const fs = require('fs')

// 上段代码这里是一段字符串，而这里通过读取文件获取内容
const html = fs.readFileSync('./index.html')

const server = http.createServer((req, res) => res.end(html))
server.listen(3000, () => {
  console.log('Listening 3000')
})
