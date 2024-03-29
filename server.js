const express = require("express");
const app = express();

require("./server/config/mongoose.config.js");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllJokeRoutes = require("./server/routes/jokes.routes.js");
AllJokeRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));