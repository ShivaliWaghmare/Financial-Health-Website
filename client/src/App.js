import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import StockPredictor from './pages/StockPredictor'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/predictor' element={<ProtectedRoutes><StockPredictor /></ProtectedRoutes>} />
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

