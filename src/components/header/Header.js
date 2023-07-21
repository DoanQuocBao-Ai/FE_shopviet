import React from 'react'
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import './Header.css'
const Header = () => {
  return (
    <nav>
      <div class="logo">
        <a href="#">Shop Viet</a>
      </div>
      <div class="search-bar">
        <form>
          <input type="text" placeholder="Tìm kiếm"/>
          <button type="submit"><FaSearch/></button>
        </form>
      </div>
      <div class="nav-items">
        <ul>
          <li><a href="/allcategory">Danh mục</a></li>
          <li><a href="/allbrand">Nhãn hàng</a></li>
          <li><a href="/cart"><FaShoppingCart size={34}/></a></li>
        </ul>
      </div>
      <div class="login">
        <a href="#">Đăng nhập</a>
      </div>
    </nav>
  )
}

export default Header