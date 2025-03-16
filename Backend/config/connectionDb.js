const mongoose = require('mongoose');


const connectDb = async() => {
    await mongoose.connect(process.env.CONNECTION_STRING, 
        {   dbName: 'foodRecipe', 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            ssl: true,
        }
    )
    .then(()=>console.log("Database connected"))
};

module.exports = connectDb;
