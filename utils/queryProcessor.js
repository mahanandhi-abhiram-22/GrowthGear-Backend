exports.convertToPseudoSQL = (query) => {
    if (query.toLowerCase().includes('sales')) {
        return "SELECT SUM(amount) FROM sales_data";
    } else if (query.toLowerCase().includes('customers')) {
        return "SELECT COUNT(*) FROM customers";
    } else {
        return "SELECT * FROM data_table WHERE condition_met";
    }
};

exports.mockResponse = (sqlQuery) => {
    if (sqlQuery.includes('SUM(amount)')) {
        return { total_sales: 50000 };
    } else if (sqlQuery.includes('COUNT(*)')) {
        return { total_customers: 200 };
    } else {
        return { message: 'Mock response data' };
    }
};