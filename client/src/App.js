import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import StockPredictor from './pages/StockPredictor';
import FinancialHealth from './pages/FinancialHealth';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/predictor' element={<StockPredictor />}  />
        <Route path='/financialHealthChecker' element={<FinancialHealth />} />
      </Routes>
    </>
  );
}

export function ProtectedRoutes(props){
  if(localStorage.getItem('user')){
    return props.children;
  }else{
    return <Navigate to="/login"/>;
  }
}

export default App;

