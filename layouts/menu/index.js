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
                    <a style={{ cursor: 'pointer' }} onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false });
                        router.push('/cabinet/dashboard')
                    }}>
                        <svg width="18" height="18">
                            <use xlinkHref="sprites.svg#home" />
                        </svg>
                        <span>Главная</span>
                    </a>
                </li>
                <li className={router.asPath === '/cabinet/replenishment' ? 'active' : ''}>
                    <a style={{ cursor: 'pointer' }} onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/cabinet/replenishment');
                    }}>
                        <svg width="18" height="18">
                            <use xlinkHref="sprites.svg#balance" />
                        </svg>
                        <span>Пополнить баланс</span>
                    </a>
                </li>
                <li className={router.asPath === '/cabinet/deposite' ? 'active' : ''}>
                    <a style={{ cursor: 'pointer' }} onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/cabinet/deposite');
                    }}>
                        <svg width="18" height="18">
                            <use xlinkHref="sprites.svg#deposit" />
                        </svg>
                        <span>Инвестировать</span>
                    </a>
                </li>
                <li className={router.asPath === '/cabinet/deposite-history' ? 'active' : ''}>
                    <a style={{ cursor: 'pointer' }} onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/cabinet/deposite-history');
                    }}>
                        <svg width="18" height="18">
                            <use xlinkHref="sprites.svg#history-deposits" />
                        </svg>
                        <span>История депозитов</span>
                    </a>
                </li>
                <li className={router.asPath === '/cabinet/operations' ? 'active' : ''}>
                    <a style={{ cursor: 'pointer' }} onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/cabinet/operations-history');
                    }}>
                        <svg width="18" height="18">
                            <use xlinkHref="sprites.svg#history-operations" />
                        </svg>
                        <span>История операций</span>
                    </a>
                </li>
                <li className={router.asPath === '/cabinet/withdraw' ? 'active' : ''}>
                    <a style={{ cursor: 'pointer' }} onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/cabinet/withdraw');
                    }}>
                        <svg width="18" height="18">
                            <use xlinkHref="sprites.svg#output" />
                        </svg>
                        <span>Вывод средств</span>
                    </a>
                </li>
                {/* <li className={router.asPath === '/cabinet/perevodi' ? 'active' : ''}>
                    <a style={{ cursor: 'pointer' }} onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/cabinet/perevodi');
                    }}>
                        <svg width="18" height="18">
                            <use xlinkHref="sprites.svg#inner-transactions" />
                        </svg>
                        <span>Внутренние переводы</span>
                    </a>
                </li> */}
                <li className={router.asPath === '/cabinet/referrals' ? 'active' : ''}>
                    <a style={{ cursor: 'pointer' }} onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/cabinet/referrals');
                    }}>
                        <svg width="18" height="18">
                            <use xlinkHref="sprites.svg#referals" />
                        </svg>
                        <span>Рефералы</span>
                    </a>
                </li>
                <li className={router.asPath === '/cabinet/structure' ? 'active' : ''}>
                    <a style={{ cursor: 'pointer' }} onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/cabinet/structure');
                    }}>
                        <svg width="18" height="18">
                            <use xlinkHref="sprites.svg#structure" />
                        </svg>
                        <span>Структура</span>
                    </a>
                </li>
                {/* <li className={router.asPath === '/cabinet/tickets' ? 'active' : ''}>
                    <a style={{ cursor: 'pointer' }} onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/cabinet/tickets');
                    }}>
                        <svg width="18" height="18">
                            <use xlinkHref="sprites.svg#tickets" />
                        </svg>
                        <span>Тикеты</span>
                    </a>
                </li> */}
                <li className={router.asPath === '/cabinet/settings' ? 'active' : ''}>
                    <a style={{ cursor: 'pointer' }} onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/cabinet/settings');
                    }}>
                        <svg width="18" height="18">
                            <use xlinkHref="sprites.svg#settings" />
                        </svg>
                        <span>Настройки</span>
                    </a>
                </li>
                <li className={router.asPath === '/cabinet/asd' ? 'active' : ''}>
                    <a style={{ cursor: 'pointer' }} onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/cabinet/asd');
                    }}>
                        <svg width="18" height="18">
                            <use xlinkHref="sprites.svg#logout" />
                        </svg>
                        <span>Выйти</span>
                    </a>
                </li>
            </ul>

            <ul className="aside-mob-menu">
                <li>
                    <Link href="/about">
                        <a>О нас</a>
                    </Link>
                </li>
                <li>
                    <Link href="/investor">
                        <a>Инвестору</a>
                    </Link>
                </li>
                <li>
                    <Link href="/program">
                        <a>Премиальная программа</a>
                    </Link>
                </li>
                <li>
                    <Link href="/reviews">
                        <a>Отзывы</a>
                    </Link>
                </li>
                <li>
                    <Link href="/faq">
                        <a>FAQ</a>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Menu
