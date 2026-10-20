const express = require("express");
const app = express();
const PORT = 4321;

app.use(express.static("../public/"));
app.use(express.static("../public/pages/"));


app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
})