const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes");
const pubRoutes = require('./routes/pubRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const cors = require('cors');
const Publication = require("./models/pubModel");
const app = express();

var corsOptions = {
    origine : "http://127.0.0.1:5000",
};
app.options("*", cors());
app.use(cors(corsOptions));

dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
 res.send("API is running");
});

app.use("/api/users", userRoutes);
app.use("/api/pub", pubRoutes);


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));