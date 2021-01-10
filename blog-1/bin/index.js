/**
 * 只写一些与server相关的代码，
 * serverHandle只是一个回调而已，
 * 将这些功能拆分开，这也是模块化落地实现的一种应用场景
 */
const http = require('http');
const serverHandle = require('../app');
const PORT = 8000;

const server = http.createServer(serverHandle); 
server.listen(PORT);