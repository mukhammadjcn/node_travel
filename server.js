require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/travel", require("./routes/travelRoutes"));

app.listen(PORT, console.log(`Server running on ${PORT} port`));
