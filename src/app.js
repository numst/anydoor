const http = require('http');
const chalk = require('chalk');
const conf = require('./config/defaultConfig');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<div>Hello World! this is a test! http server! 1234</div>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(conf.port, conf.hostname, () => {
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.log(`Server started at ${chalk.green(addr)}`);
})
