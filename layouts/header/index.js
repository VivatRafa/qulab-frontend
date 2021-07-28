import React from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import Link from 'next/link';
import { useUserInfo } from '../../hooks';
import kyFetch from '../../api';
import { showAmount } from '../../utils';

const Header = () => {
    const [user] = useUserInfo();
    const isLoggedIn = !!user;
    const { login } = user || {};

    const { data: balanceData = {}, error } = useSWR('balance', async () => {
        const resp = await kyFetch.get('balance').json();

        return resp;
    })

    const { balance } = balanceData;
    return (
        <section className="top-line-section">
            <div className="wrapper">
                <div className="top-line-wrap">
                    <div className="burger">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                    <div className="top-left">
                        <a className="logo">
                            <img src="img/logo.svg" alt="" />
                            <span>QuLab</span>
                        </a>
                    </div>
                    <ul className="top-menu">
                        <li>
                            <Link href="/about">
                                <a><span>О нас</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/investor">
                                <a><span>Инвестору</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/premium-program">
                                <a><span>Премиальная программа</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/reviews">
                                <a><span>Отзывы</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq">
                                <a><span>FAQ</span></a>
                            </Link>
                        </li>
                    </ul>
                    <div className="top-right">
                        {isLoggedIn ? (
                            <>
                                <p>Баланс:&nbsp;<span>{showAmount(balance)} QU</span></p>
                                <p>
                                    <svg width="16" height="18">
                                        <use xlinkHref="#user" />
                                    </svg>
                                    <strong>{login}</strong>
                                </p>
                                <p><a href="#">Выйти</a></p>
                            </>
                        ) : (
                            <>
                                <a href=""><span>Войти</span></a>
                                <a href="" className="button"><span>Регистрация</span></a>
                            </>
                        )}
                    </div>
                    <div className="top-right" />
                </div>
            </div>
        </section>
    )
}

export default Header
