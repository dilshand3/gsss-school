import { connectDB } from "./db/db.js";
import { app } from "./app.js";
const port = process.env.PORT || 2894 || 2942

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        })
    })
    .catch((error) => {
        console.log(`MongoDB connection failed due to ${error}`)
    });