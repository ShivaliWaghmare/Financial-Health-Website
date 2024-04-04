import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
const Header = () => {
  const [loginUser, setLoginUser] = useState('')
  const navigate = useNavigate();
  useEffect(() => {
     const user = JSON.parse(localStorage.getItem('user'))
     if(user){
      setLoginUser(user)
     }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate('/login');
  }
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">FinanceManger</Link>
    <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/expense' className='nav-link'>Expense Tracking</Link>
        </li>
        <li className="nav-item">
          <Link to='/portfolio' className='nav-link'>Investment Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to='/blog' className='nav-link'>Blog</Link>
        </li>
        <li className="nav-item">
          <Link to='/calculator' className='nav-link'>Calculator</Link>
        </li>
      </ul>
    </div>
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <p to="/user" className='nav-link active' aria-current="page">{loginUser && loginUser.name}</p>
      </li>
      <li className="nav-item">
        <button className='btn btn-primary' onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
  </div>
</nav>

    </>
  )
}

export default Header
