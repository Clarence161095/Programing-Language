// var adr = "https://json-server-tuan200.herokuapp.com/api/db";
const https = require("https");
const options = {
  hostname: "https://json-server-tuan200.herokuapp.com",
  path: "/api/db",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
