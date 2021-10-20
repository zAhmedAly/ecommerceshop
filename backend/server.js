const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const productRoutes = require("./routes/products");

dotenv.config();

connectDB();

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("eCommerce API Server is up and running");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server connected in ${process.env.NODE_ENV} @port ${PORT}`)
);
