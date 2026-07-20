const express = require("express");
const cors = require("cors");
 
const productsRouter = require("./routes/products");
const path = require("path");
 
const app = express();
 
app.use(cors());
app.use(express.json());
 
// Отдаём картинки
app.use("/images", express.static(path.join(__dirname, "images")));
 
// API
app.use("/api/products", productsRouter);
 
app.listen(3001, () => {
    console.log("Server started: http://localhost:3001");
});