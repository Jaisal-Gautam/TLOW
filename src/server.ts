//Dependencies
import express from "express";

//Middlewares
import { errorHandler } from "./middlewares/errorHandler.js";
import { logger } from "./middlewares/logger.js";
import { noRouteHandler } from "./middlewares/notFound.js";

//OTHER
import { PORT } from "./config/env.js";
import { pool } from "./db/index.js";

const app = express();


app.use(express.json());
app.use(logger)

app.get("/health", async (req, res) => {
    try {
        await pool.query("SELECT 1");
        res.status(200).json({
            "success": true,
            "message": "TeamFlow API is healthy",
            "database": "connected"
        })
    } catch (error) {
        res.status(503).json({
            "success": false,
            "message": "TeamFlow API is not healthy",
            "database": "not connected"
        })
    }
})

app.use(noRouteHandler);
app.use(errorHandler);


try {
    await pool.query("SELECT 1");
    console.log("DATABASE CONNECTED")
    app.listen(PORT, () => {
        console.log(`Server is running on :${PORT}`)
    })
} catch (error) {
    console.error("DATABASE CONNECTION ERROR:", error);
    process.exit(1);
}
