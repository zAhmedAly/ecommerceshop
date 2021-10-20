const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");

const userModel = require("./models/userModel");
const productModel = require("./models/productModel");
const orderModel = require("./models/orderModel");

const userData = require("./data/userData");
const productData = require("./data/productData");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await orderModel.deleteMany();
    await productModel.deleteMany();
    await userModel.deleteMany();

    const createdUsers = await userModel.insertMany(userData);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = productData.map((product) => {
      return { ...product, user: adminUser };
    });

    await productModel.insertMany(sampleProducts);

    console.log("Data Imported ...!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Data Import Failed : ${error} `.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await orderModel.deleteMany();
    await productModel.deleteMany();
    await userModel.deleteMany();
    console.log("Data Destroyed ...!".cyan.inverse);

    process.exit();
  } catch (error) {
    console.log(`Data Destroy Failed : ${error} `.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
