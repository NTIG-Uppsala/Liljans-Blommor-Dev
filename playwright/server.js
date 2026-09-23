const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("../public/"));

app.listen(PORT, () => {
    console.log(`hehe port run now kekeke ${PORT}`)
})