// import React, {useState, useEffect} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { message } from 'antd';



// const Header = () => {
//   const [loginUser, setLoginUser] = useState('')
//   const navigate = useNavigate();
//   useEffect(() => {
//      const user = JSON.parse(localStorage.getItem('user'))
//      if(user){
//       setLoginUser(user)
//      }
//   }, []);

//   const logoutHandler = () => {
//     localStorage.removeItem("user");
//     message.success("Logout Successfully");
//     navigate('/login');
//   }
//   return (
//     <>
//         <nav className="navbar navbar-expand-lg ">
//         <div className="container-fluid">
//         <Link to="/" className="navbar-brand">
//              WealthWise
//          </Link>

//           <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
//             <ul className="navbar-nav mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/expense" className="nav-link">
//                   Expense Tracking
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/portfolio" className="nav-link">
//                 Predictor
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/blog" className="nav-link">
//                   About Us
//                 </Link>
//               </li>
//               {/* <li className="nav-item">
//                 <Link to="/calculator" className="nav-link">
//                   Calculator
//                 </Link>
//               </li> */}
//             </ul>
//           </div>
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <p to="/user" className="nav-link active" aria-current="page">
//                 {loginUser && loginUser.name}
//               </p>
//             </li>
//             <li className="nav-item">
//               <button className="btn btn-primary" onClick={logoutHandler}>
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>

//     </>
//   )
// }

// export default Header;


// 

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import '../../css/header.css';

const Header = () => {
  const [loginUser, setLoginUser] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('user');
    message.success('Logout Successfully');
    navigate('/login');
  };

  return (
    <header className="main-navbar">
      <div className="nav-container">
        <Link to="/" className="logo">WealthWise</Link>

        <button className="nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
          ☰
        </button>

<<<<<<< HEAD
        <nav className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          <Link to="/expense" className="nav-link">Expense Tracking</Link>
          <Link to="/portfolio" className="nav-link">Advisory Models</Link>
          <Link to="/aboutUs" className="nav-link">About Us</Link>
          {loginUser && (
            <div className='intro'>
              <span className="nav-user">Hi, {loginUser.name}</span>
              <button className="logout-btn" onClick={logoutHandler}>Logout</button>
            </div>
          )}
        </nav>
=======
        <div
          className={`navbar-nav ${
            isNavOpen ? 'active' : ''
          }`} /* Add active class if navbar is toggled */
        >
          <ul className='navbar-nav'>
            <li className="nav-item">
              <Link to="/expense" className="nav-link">
                Expense Tracking
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/predictor" className="nav-link">
                Stock Prediction Model
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <p className="nav-link active" aria-current="page">
              {loginUser && loginUser.name}
            </p>
          </li>
          <li className="nav-item">
            <button className="btn-primary" onClick={logoutHandler}>
              Logout
            </button>
          </li>
        </ul>
>>>>>>> eecf13201a1985674b93c832ad15ac6e0c1b7061
      </div>
    </header>
  );
};

export default Header;
