/* eslint-disable no-console */

const fs = require("fs");  //fs is used for file system operations

const path = require("path");
const mockData = require("./mockData");

const { devices } = mockData;
const data = JSON.stringify({ devices });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
