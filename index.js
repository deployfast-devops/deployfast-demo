const http = require('http');

http.createServer((req, res) => {
  res.end("DeployFast Demo Running 🚀");
}).listen(3000, () => console.log("Server running on 3000"));
