const { convertToPseudoSQL, mockResponse } = require('../utils/queryProcessor');

exports.processQuery = (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: 'Query is required' });
    
    const sqlQuery = convertToPseudoSQL(query);
    const response = mockResponse(sqlQuery);
    res.json({ sqlQuery, response });
};

exports.explainQuery = (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: 'Query is required' });
    
    const sqlQuery = convertToPseudoSQL(query);
    res.json({ query, sqlQuery, explanation: 'This is a pseudo-SQL conversion' });
};

exports.validateQuery = (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: 'Query is required' });
    
    const sqlQuery = convertToPseudoSQL(query);
    const valid = sqlQuery ? true : false;
    res.json({ query, valid });
};