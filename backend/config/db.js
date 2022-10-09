const mongoose = require('mongoose');

const connectDB = async () => {
    try{
      const conn = await  mongoose.connect('mongodb://localhost:27017/',{
            dbName: 'TestBd',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connecected  database: ${conn.connection.host}`);
    } catch(error){
        console.error(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;