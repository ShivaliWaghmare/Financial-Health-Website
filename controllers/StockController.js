const axios = require('axios');

const stockController = async (req, res) => {
    const {ticker, date} = req.body;

    try{
        const response = await axios.post('http://localhost:5000/predict', { ticker, date });

        res.json({
            predicted_price : response.data["Predicted price"],
        });
    }
    catch (error) {
        console.error('Error calling the API', error.message);
        res.status(500).json({error : 'Failed to fetch prediction from Invix'});
    }
};

module.exports = stockController;