import React, { useState } from 'react';
import axios from 'axios';
import styles from './StockPredictor.module.css';

const StockPredictor = () => {
  const [ticker, setTicker] = useState('');
  const [date, setDate] = useState('');
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!ticker.trim()) errors.ticker = 'Ticker is required';
    if (!date) errors.date = 'Date is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePredict = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/predict', { ticker, date });
      setPredictedPrice(response.data.predicted_price);
      setShowResult(true);
      setErrorMsg('');
    } catch (error) {
      console.error('Prediction error:', error);
      setErrorMsg('Prediction failed. Please check your inputs or try again later.');
    }
    setLoading(false);
  };

  const handleBack = () => {
    setShowResult(false);
    setTicker('');
    setDate('');
    setPredictedPrice(null);
    setErrorMsg('');
    setFormErrors({});
  };

  if (showResult) {
    return (
      <div className={styles.resultContainer}>
        <h1 className={styles.title}>STOCK PRICE PREDICTOR</h1>

        <div className={styles.resultBlock}>
          <h2>PREDICTED PRICE:</h2>
          <p className={styles.price}>${predictedPrice} USD</p>
          <p className={styles.note}>( ± 20 USD )</p>
        </div>

        <div className={styles.chartBlock}>
          <h3>100 Day Mean Average v/s 200 Days Mean Average</h3>
          <div className={styles.charts}>
            <div className={styles.chart}></div>
            <div className={styles.chartSmall}></div>
          </div>
        </div>

        <div className={styles.adviceBlock}>
          <h4>The Wealth Sage’s Advice</h4>
          <div className={styles.adviceCards}>
            <div className={styles.adviceCard}>If you want to buy...</div>
            <div className={styles.adviceCard}>If you want to sell...</div>
          </div>
        </div>

        <button onClick={handleBack} className={styles.tryAgainBtn}>TRY AGAIN</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>STOCK PRICE PREDICTOR</h1>
      <p className={styles.subtitle}>
        Enter the stock ticker and the date to get a prediction. This is powered by our ML model.
      </p>

      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Ticker :</label>
          <input
            type="text"
            placeholder="eg. AAPL"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            className={styles.input}
          />
          {formErrors.ticker && <p className={styles.error}>{formErrors.ticker}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label>Date :</label>
          <input
            type="date"
            placeholder="DD/MM/YYYY"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={styles.input}
          />
          {formErrors.date && <p className={styles.error}>{formErrors.date}</p>}
        </div>

        <p className={styles.note}>( Note that the actual price may vary up to ± 20 USD )</p>

        {errorMsg && <p className={styles.apiError}>{errorMsg}</p>}

        <button
          onClick={handlePredict}
          className={styles.predictBtn}
          disabled={loading}
        >
          {loading ? 'PREDICTING...' : 'PREDICT'}
        </button>
      </div>
    </div>
  );
};

export default StockPredictor;
