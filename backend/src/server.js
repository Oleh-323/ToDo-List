require("dotenv").config();

const app = require("./app")
const sequelize = require("./database/database");

const PORT = process.env.PORT || 8000

const startServer = async ()=>{
    try{
        await sequelize.authenticate()

        console.log("DB connected");

        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    }catch(error){
        console.error(error);
    }
};

startServer();