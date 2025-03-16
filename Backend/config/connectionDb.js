const mongoose = require('mongoose');


const connectDb = async() => {
    await mongoose.connect(process.env.CONNECTION_STRING, {dbName: 'foodRecipe'})
    .then(()=>console.log("Database connected"))
};

module.exports = connectDb;
