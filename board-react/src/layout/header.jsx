  import React from 'react';
  import './header.css';
import { Link, useNavigate } from 'react-router-dom';

  function Header() {
    const navigate = useNavigate();

      return (
      <div className='header_wrapper'>
        <div className="header_inner">
          <div id="icon">
              <Link to={'/'}>
               <h2>게시판</h2>
              </Link>        
          </div>
          <div id="write_button">
            <button onClick={() => navigate('/add-Post')}>글쓰기</button>
          </div>
          <div id="login_button">
              <button onClick={() => navigate('/login')}> 로그인</button>
          </div>
        </div>
      </div>
      )
  }

  export default Header