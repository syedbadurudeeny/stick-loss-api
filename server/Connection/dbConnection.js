const mongoose = require("mongoose");


const connectDB = async () => {

    try {
        const connection = await mongoose.connect(process.env.DBCONNECTIONURL)
        console.log(`Db-Name "${connection.connection.name}" , Host-Name "${connection.connection.host}"`)
        
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

module.exports = connectDB