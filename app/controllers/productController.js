const Product = require('../services/productService')
exports.getProduct = async (req, res) => {
    try {
        const result = await Product.getProduct(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const result = await Product.updateProduct(req.body,req.params.id);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const result = await Product.createProduct(req.body);
        res.status(201).json({
            message: "created"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const result = await Product.deleteProduct(req.params.id);
        res.status(200).json({
            message: "created"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};