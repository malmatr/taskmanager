const mongoose = require("mongoose");

const connectDB = (url) => {
  const dns = require("node:dns");
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
  const servers = dns.getServers();
  console.log("Node.js is using these DNS servers:", servers);

  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
