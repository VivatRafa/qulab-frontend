import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { getAccessToken } from '../../utils/auth';

const Footer = () => (
        <footer>
            <div className="wrapper">
                <div className="footer-wrap">
                    <div className="footer-left">
                        <div className="footer-item">
                            <h4>Информация</h4>
                            <ul>
                                <li>
                                    <Link href="/about">
                                        <a><span>О компании</span></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/investor">
                                        <a><span>Инвестору</span></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/program">
                                        <a><span>Премиальная программа</span></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h4>Помощь</h4>
                            <ul>
                                <li>
                                    <Link href="/faq">
                                        <a><span>FAQ</span></a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/reviews">
                                        <a><span>Отзывы</span></a>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h4>Личный кабинет</h4>
                            <ul>
                                <li>
                                    <Link href="/cabinet/registration">
                                        <a><span>Регистрация</span></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cabinet/login">
                                        <a><span>Войти</span></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-logo">
                            <Image src="/static/img/logo.svg"  width="55" height="55"/>
                            <span>QuLab</span>
                        </div>
                        <div className="footer-button">
                            <Link href={`/cabinet/${getAccessToken() ? 'deposite' : 'registration'}`}>
                                <a className="button">Инвестировать</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">&copy; 2021 QuLab.ru. Все права защищены</div>
            </div>
        </footer>
    )

export default Footer
