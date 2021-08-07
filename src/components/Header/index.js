import React from 'react'
import "./Header.css"
import logo from "../../img/logo.png"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <div className="header">
                <div className="nav">
                    <Link to="/menu">Меню</Link>
                    <Link to="/blog">Блог</Link>
                    <Link to="/about">О нас</Link>
                    <a href="/reciews">Отзывы</a>
                </div>
                <div className="navik">
                    <input type="checkbox" id="menu-toggle" />
                    <label for="menu-toggle"></label>
                    <ul id="menu">
                        <li><a href="/menu">Меню</a></li>
                        <li><a href="/blog">Блог</a></li>
                        <li><a href="/about">О нас</a></li>
                        <li><a href="/reciews">Отзывы</a></li>
                    </ul>
                </div>
                <div className="head"><img src={logo} className="logo" /></div>
                <div className="nav2">
                    <a href="/adress">Адреса</a>
                    <a href="/franchise">Франшиза</a>
                </div>
            </div>
        </div>
    )
}
