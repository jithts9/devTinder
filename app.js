const express = require("express");

const app = express();

app.use("/", (req, res) => {
    console.log(" home page1")
    res.send(" home page")
});

app.listen(5000, () => {
  console.log("server running in port 500");
});
