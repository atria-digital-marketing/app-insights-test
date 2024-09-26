const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(async (req, res) => {
  const ts = await getTimestamp();
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello World\nThe time is currently: ${ts}`);
});

const getTimestamp = async () => {
  const { dateTime } = await fetch(
    "https://timeapi.io/api/time/current/zone?timeZone=America%2FChicago"
  ).then((res) => res.json());
  return dateTime;
};

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
