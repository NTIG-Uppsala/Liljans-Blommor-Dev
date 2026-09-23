const express = require("express");
const app = express();
const PORT = 3948;

app.use(express.static("../public/"));
app.use(express.static("../public/pages/"));

// app.get("/", (req, res) => {
//     app.render("/pages/");
// });

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
})