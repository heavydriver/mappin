const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

dotenv.config();

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(process.env.PORT || 8800, () => {
    console.log("Backend server is running!");
});
