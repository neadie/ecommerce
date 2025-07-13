const pool = require('../models/db');

const getProducts = async (req, res) => {
    const { category, priceMin, priceMax } = req.query;
    let query = 'SELECT * FROM products WHERE 1=1';
    const params = [];

    if (category) {
        params.push(category);
        query += ` AND category = $${params.length}`;
    }

    if (priceMin) {
        params.push(priceMin);
        query += ` AND price >= $${params.length}`;
    }

    if (priceMax) {
        params.push(priceMax);
        query += ` AND price <= $${params.length}`;
    }

    const result = await pool.query(query, params);
    res.json(result.rows);
};

module.exports = { getProducts };
