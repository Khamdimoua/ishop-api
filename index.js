const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();


const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Hello wrold");
});

const upload = require("./src/routes/upload.file.routes");
app.use(upload);

// const sequelize = require("./src/config/db");

require("./src/routes/user.routes")(app);
require("./src/routes/category.routes")(app);
require("./src/routes/product.routes")(app);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});