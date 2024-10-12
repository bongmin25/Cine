require("dotenv").config();

const mongoose = require("mongoose");

const dbCon = async () => {
  await mongoose.connect(
    "mongodb+srv://tomdantas25:X6pYxQFI1AWyDldI@cluster0.dpcvokf.mongodb.net/movies"
  );
};
module.exports = dbCon;
