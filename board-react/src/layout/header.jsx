import React, { Component } from 'react';
import './header.css';

export default class header extends Component {
  render() {
    return (
    <div className='header_wrapper'>
      <div class="header_inner">
        <div id="icon">
            <a href='/'><h2>게시판</h2></a>        
        </div>
        <div id="write_button">
           <button>글쓰기</button>
        </div>
        <div id="login_button">
            <button> 로그인</button>
        </div>
      </div>
    </div>
    )
  }
}
