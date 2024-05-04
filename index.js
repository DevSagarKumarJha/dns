const dgram = require('node:dgram');

const server = dgram.createSocket('udp4');

server.on('error', (err) => {
    console.error(`server error:\n${err.stack}`);
    server.close();
  });
  
server.on('message', (msg, rinfo) => {
    console.log("Incoming message ", msg.toString())
})

server.bind(53, () => console.log("DNS server is running on port 53"))
