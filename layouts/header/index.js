import React from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import Link from 'next/link';
import { useUserInfo } from 'hooks';
import kyFetch from 'api';
import { showAmount } from 'utils';
import { logout } from 'utils/auth';
import { GlobalContext } from 'contexts';

const Header = ({ isLanding }) => {
    const [state, dispatch] = React.useContext(GlobalContext);
    const [user] = useUserInfo();
    const isLoggedIn = !!user;
    const { login } = user || {};

    const { data: balanceData = {}, error } = useSWR(isLoggedIn ? 'balance' : null, async () => {
        const resp = await kyFetch.get('balance').json();

        return resp;
    })

    const { balance } = balanceData;
    return (
        <>
            {/* {isLanding && <Image width="40" height="40" src="/static/img/header-circle.svg" alt="" className="header-circle"/>} */}
            <section className="top-line-section">
                <div className="wrapper">
                    <div className="top-line-wrap">
                        <div onClick={() => dispatch({ type: 'toggleMenu' })} className="burger">
                            <div className="line" />
                            <div className="line" />
                            <div className="line" />
                        </div>
                        <div className="top-left">
                            <Link href="/">
                                <a className="logo">
                                    <Image src="/static/img/logo.svg" width="40" height="40" alt="" />
                                    <span>QuLab</span>
                                </a>
                            </Link>
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
                                <Link href="/program">
                                    <a><span>Премиальная программа</span></a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/reviews">
                                    <a><span>Отзывы</span></a>
                                </Link>
                            </li> */}
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
                                    <Link href="/cabinet/dashboard">
                                        <p style={{ cursor: 'pointer' }}>
                                            <svg width="16" height="18">
                                                <use xlinkHref="#user" />
                                            </svg>
                                            <strong>{login}</strong>
                                        </p>
                                    </Link>
                                    <p><a style={{cursor: 'pointer' }} onClick={() => logout()}>Выйти</a></p>
                                </>
                            ) : (
                                <>
                                    <Link href="/cabinet/login"><a><span>Войти</span></a></Link>
                                    <Link href="/cabinet/registration"><a className="button"><span>Регистрация</span></a></Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
