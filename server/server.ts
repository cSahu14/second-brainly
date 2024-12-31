import app from "./src/app";
import { config } from "./src/config/config";
import connectionDB from "./src/config/db";

const port = config.port || 3000;

const serverStart = async() => {  
    await connectionDB();
    app.listen(port, () => {
        console.log(`App start at port ${port}`)
    })
}

serverStart()