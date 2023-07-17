require("dotenv").config();
const cors = require("cors")
const fileUpload = require("express-fileupload")
const express = require("express");
const path = require("path");
const sequelize = require("./db");
const models = require("./models/models");
const router = require("./routes/index")
const errorHandler = require("./middleware/ErrorHeandlingMiddleware")


const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,"static")));
app.use(fileUpload({}));
app.use("/api", router);

// error processing
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server is runing  for  ${PORT} port`))
    } catch (e) {
        console.log(e);
    }
}

start();

