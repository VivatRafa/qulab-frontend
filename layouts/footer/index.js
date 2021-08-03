import React from 'react'
import Image from 'next/image';

const Footer = () => (
        <footer>
            <div className="wrapper">
                <div className="footer-wrap">
                    <div className="footer-left">
                        <div className="footer-item">
                            <h4>Информация</h4>
                            <ul>
                                <li><a href="about.html"><span>О компании</span></a></li>
                                <li><a href="investoru.html"><span>Инвестору</span></a></li>
                                <li><a href="program.html"><span>Премиальная программа</span></a></li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h4>Помощь</h4>
                            <ul>
                                <li><a href="faq.html"><span>FAQ</span></a></li>
                                <li><a href="reviews.html"><span>Отзывы</span></a></li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h4>Личный кабинет</h4>
                            <ul>
                                <li><a href="reg.html"><span>Регистрация</span></a></li>
                                <li><a href="login.html"><span>Войти</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-logo">
                            <Image src="/static/img/logo.svg"  width="55" height="55"/>
                            <span>QuLab</span>
                        </div>
                        <div className="footer-button">
                            <a href="" className="button">Инвестировать</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">&copy; 2021 QuLab.ru. Все права защищены</div>
            </div>
        </footer>
    )

export default Footer
