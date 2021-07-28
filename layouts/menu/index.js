import React from 'react'
import { useUserInfo } from '../../hooks'

const Menu = () => {
    const [user] = useUserInfo();

    const { login, id, statusId } = user || {};

    return (
        <aside>
            <h3>{login}</h3>
            <p>Ваш ID:&nbsp;<strong>{id}</strong></p>
            <p>Ваш статус:&nbsp;<strong>{statusId}</strong></p>

            <ul>
                <li><a href="index.html">
                    <svg width="18" height="18">
                        <use xlinkHref="sprites.svg#home" />
                    </svg>
                    <span>Главная</span>
                </a></li>
                <li className="active"><a href="balance.html">
                    <svg width="18" height="18">
                        <use xlinkHref="sprites.svg#balance" />
                    </svg>
                    <span>Пополнить баланс</span>
                </a></li>
                <li><a href="deposit.html">
                    <svg width="18" height="18">
                        <use xlinkHref="sprites.svg#deposit" />
                    </svg>
                    <span>Сделать депозит</span>
                </a></li>
                <li><a href="history-deposits.html">
                    <svg width="18" height="18">
                        <use xlinkHref="sprites.svg#history-deposits" />
                    </svg>
                    <span>История депозитов</span>
                </a></li>
                <li><a href="history-operations.html">
                    <svg width="18" height="18">
                        <use xlinkHref="sprites.svg#history-operations" />
                    </svg>
                    <span>История операций</span>
                </a></li>
                <li><a href="output.html">
                    <svg width="18" height="18">
                        <use xlinkHref="sprites.svg#output" />
                    </svg>
                    <span>Вывод средств</span>
                </a></li>
                <li><a href="inner-transactions.html">
                    <svg width="18" height="18">
                        <use xlinkHref="sprites.svg#inner-transactions" />
                    </svg>
                    <span>Внутренние переводы</span>
                </a></li>
                <li><a href="referals.html">
                    <svg width="18" height="18">
                        <use xlinkHref="sprites.svg#referals" />
                    </svg>
                    <span>Рефералы</span>
                </a></li>
                <li><a href="structure.html">
                    <svg width="18" height="18">
                        <use xlinkHref="sprites.svg#structure" />
                    </svg>
                    <span>Структура</span>
                </a></li>
                <li><a href="tickets.html">
                    <svg width="18" height="18">
                        <use xlinkHref="sprites.svg#tickets" />
                    </svg>
                    <span>Тикеты</span>
                </a></li>
                <li><a href="settings.html">
                    <svg width="18" height="18">
                        <use xlinkHref="sprites.svg#settings" />
                    </svg>
                    <span>Настройки</span>
                </a></li>
                <li><a href="#">
                    <svg width="18" height="18">
                        <use xlinkHref="sprites.svg#logout" />
                    </svg>
                    <span>Выйти</span>
                </a></li>
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
