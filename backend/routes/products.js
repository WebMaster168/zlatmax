const express = require("express");
const router = express.Router();
 
const products = require("../data/products.json");
 
router.get("/", (req, res) => {
 
    const { category } = req.query;
 
    if (category) {
 
        return res.json(
            products.filter(p => p.category === category)
        );
 
    }
 
    res.json(products);
 
});
 
module.exports = router;