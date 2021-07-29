import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'
import { GlobalContext } from '../../contexts';
import { useUserInfo } from '../../hooks';
import useOnclickOutside from 'react-cool-onclickoutside';

const Menu = () => {
    
    const router = useRouter();
    const [state, dispatch] = React.useContext(GlobalContext);
    const { isMenuOpen } = state;
    const [user] = useUserInfo();
    const menuRef = useOnclickOutside(() => dispatch({ type: 'toggleMenu', payload: false }));

    const { login, id, statusId } = user || {};

    return (
        <aside ref={menuRef} className={isMenuOpen ? 'active' : ''}>
            <h3>{login}</h3>
            <p>Ваш ID:&nbsp;<strong>{id}</strong></p>
            <p>Ваш статус:&nbsp;<strong>{statusId}</strong></p>

            <ul>
                <li className={router.asPath === '/cabinet/dashboard' ? 'active' : ''}>
                    <Link href="/cabinet/dashboard">
                        <a>
                            <svg width="18" height="18">
                                <use xlinkHref="sprites.svg#home" />
                            </svg>
                            <span>Главная</span>
                        </a>
                    </Link>
                </li>
                <li className={router.asPath === '/cabinet/replenishment' ? 'active' : ''}>
                    <Link href="/cabinet/replenishment">
                        <a>
                            <svg width="18" height="18">
                                <use xlinkHref="sprites.svg#balance" />
                            </svg>
                            <span>Пополнить баланс</span>
                        </a>
                    </Link>
                </li>
                <li className={router.asPath === '/cabinet/deposite' ? 'active' : ''}>
                    <Link href="/cabinet/deposite">
                        <a>
                            <svg width="18" height="18">
                                <use xlinkHref="sprites.svg#deposit" />
                            </svg>
                            <span>Сделать депозит</span>
                        </a>
                    </Link>
                </li>
                <li className={router.asPath === '/cabinet/deposite' ? 'active' : ''}>
                    <Link href="/cabinet/deposite-history">
                        <a>
                            <svg width="18" height="18">
                                <use xlinkHref="sprites.svg#history-deposits" />
                            </svg>
                            <span>История депозитов</span>
                        </a>
                    </Link>
                </li>
                <li className={router.asPath === '/cabinet/operations' ? 'active' : ''}>
                    <Link href="/cabinet/operations-history">
                        <a>
                            <svg width="18" height="18">
                                <use xlinkHref="sprites.svg#history-operations" />
                            </svg>
                            <span>История операций</span>
                        </a>
                    </Link>
                </li>
                <li className={router.asPath === '/cabinet/withdraw' ? 'active' : ''}>
                    <Link href="/cabinet/withdraw">
                        <a>
                            <svg width="18" height="18">
                                <use xlinkHref="sprites.svg#output" />
                            </svg>
                            <span>Вывод средств</span>
                        </a>
                    </Link>
                </li>
                {/* <li className={router.asPath === '/cabinet/perevodi' ? 'active' : ''}>
                    <Link href="/cabinet/perevodi">
                        <a>
                            <svg width="18" height="18">
                                <use xlinkHref="sprites.svg#inner-transactions" />
                            </svg>
                            <span>Внутренние переводы</span>
                        </a>
                    </Link>
                </li> */}
                <li className={router.asPath === '/cabinet/referrals' ? 'active' : ''}>
                    <Link href="/cabinet/referrals">
                        <a>
                            <svg width="18" height="18">
                                <use xlinkHref="sprites.svg#referals" />
                            </svg>
                            <span>Рефералы</span>
                        </a>
                    </Link>
                </li>
                <li className={router.asPath === '/cabinet/structure' ? 'active' : ''}>
                    <Link href="/cabinet/structure">
                        <a>
                            <svg width="18" height="18">
                                <use xlinkHref="sprites.svg#structure" />
                            </svg>
                            <span>Структура</span>
                        </a>
                    </Link>
                </li>
                {/* <li className={router.asPath === '/cabinet/tickets' ? 'active' : ''}>
                    <Link href="/cabinet/tickets">
                        <a>
                            <svg width="18" height="18">
                                <use xlinkHref="sprites.svg#tickets" />
                            </svg>
                            <span>Тикеты</span>
                        </a>
                    </Link>
                </li> */}
                <li className={router.asPath === '/cabinet/settings' ? 'active' : ''}>
                    <Link href="/cabinet/settings">
                        <a>
                            <svg width="18" height="18">
                                <use xlinkHref="sprites.svg#settings" />
                            </svg>
                            <span>Настройки</span>
                        </a>
                    </Link>
                </li>
                <li className={router.asPath === '/cabinet/asd' ? 'active' : ''}>
                    <Link href="/cabinet/asd">
                        <a>
                            <svg width="18" height="18">
                                <use xlinkHref="sprites.svg#logout" />
                            </svg>
                            <span>Выйти</span>
                        </a>
                    </Link>
                </li>
            </ul>

            <ul className="aside-mob-menu">
                <li><a href="#">О нас</a></li>
                <li><a href="#">Инвестору</a></li>
                <li><a href="#">Премиальная программа</a></li>
                <li><a href="#">Отзывы</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </aside>
    )
}

export default Menu
