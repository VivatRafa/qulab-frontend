import React from 'react'
import Image from 'next/image';
import useSWR from 'swr';
import dayjs from 'dayjs';
import { useUserInfo } from 'hooks';
import { copyTextToClipboard, showAmount } from 'utils';
import kyFetch from 'api';
import Link from 'next/link';
import BaseReferralLink from 'components/base/BaseReferralLink';
import Big from 'big.js';

const Dashboard = () => {
    const [user] = useUserInfo();

    const { data: userData = {} } = useSWR('userInfo', async () => {
        const resp = await kyFetch.get('users').json();

        // eslint-disable-next-line camelcase
        const { last_aсtivity, registration_date } = resp;
        const lastActivity = dayjs(last_aсtivity).format('DD.MM.YYYY');
        const registrationDate = dayjs(registration_date).format('DD.MM.YYYY HH:mm');
        return { lastActivity, registrationDate };
    })

    const { data: balanceData = {}, error } = useSWR('balance', async () => {
        const resp = await kyFetch.get('balance').json();

        return resp;
    })

    const { data: depositeIncome = 0 } = useSWR('depositeList', async () => {
        const resp = await kyFetch.get('deposite').json();
        
        if (resp) {
            return resp.reduce((sum, { profit }) => Big(sum).plus(Big(profit)).toNumber(), 0);
        }

        return 0;
    })

    const {
        balance = 0,
        invested = 0,
        referral = 0,
        withdrawn = 0 
    } = balanceData;
    const { lastActivity, registrationDate } = userData;
    const { id } = user || {};

    const referralAndDepositeSum = Big(depositeIncome).plus(Big(referral)).toNumber();
    return (
        <div>
            <h1>Главная</h1>

            <div className="data">
                <p>Дата регистрации:&nbsp;<span className="purpur">{registrationDate}</span></p>
                <p>Дата последней активности:&nbsp;<span className="purpur">{lastActivity}</span></p>
            </div>

            <div className="status-block">
                <div className="status-item left">
                    <div className="status-title">
                        <div className="img">
                            <img src="img/status1.svg" alt="" />
                        </div>
                        <div className="text">
                            <p>Ваш текущий статус:</p>
                            <h3 className="purpur fz24">Консультант</h3>
                        </div>
                    </div>
                    <p>
                        Бонус от личных продаж:
                        <span className="purpur fz24 block">5%</span>
                    </p>
                    <p>
                        Личный оборот (вклад):
                        <span className="purpur block">&gt; 500 QU</span>
                    </p>
                    <p>
                        Оборот структуры:
                        <span className="purpur block">X</span>
                    </p>
                </div>
                <div className="status-item right">
                    <div className="status-title">
                        <div className="img opacity">
                            <img src="img/status2.svg" alt="" />
                        </div>
                        <div className="text">
                            <p>Для следующего статуса</p>
                            <h4 className="purpur opacity"><strong>Старший консультант</strong></h4>
                            <p>необходимо:</p>
                        </div>
                    </div>
                    <div className="status-body-wrap">
                        <p>
                            Личный оборот:
                            <span className="purpur block">&gt; 500 QU</span>
                        </p>
                        <p>
                            Осталось:
                            <span className="red block">500 QU</span>
                        </p>
                        <p>
                            Оборот структуры:
                            <span className="purpur block">X</span>
                        </p>
                        <p>
                            Оборот структуры:
                            <span className="green block">Выполнено</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="money-wrap">
                <div className="money-item">
                    <div className="money-item-title">
                        <img src="img/money1.svg" alt="" />
                        <span className="purpur opacity">Ваш баланс</span>
                    </div>
                    <p className="purpur fz24">{showAmount(balance)} QU</p>
                    <Link href="/cabinet/replenishment"><a className="button">Пополнить</a></Link>
                </div>
                <div className="money-item">
                    <div className="money-item-title">
                        <img src="img/money2.svg" alt="" />
                        <span className="purpur opacity">Инвестировано:</span>
                    </div>
                    <p className="purpur fz24">{showAmount(invested)} QU</p>
                    <Link href="/cabinet/deposite"><a className="button">Инвестировать</a></Link>
                </div>
                <div className="money-item">
                    <div className="money-item-title">
                        <img src="img/money3.svg" alt="" />
                        <span className="purpur opacity">Выведено средств:</span>
                    </div>
                    <p className="purpur fz24">{showAmount(withdrawn)} QU</p>
                    <Link href="/cabinet/withdraw"><a className="button1">Вывести</a></Link>
                </div>
                <div className="money-item half">
                    <BaseReferralLink />
                </div>
                <div className="money-item">
                    <div className="money-item-title">
                        <img src="img/money5.svg" alt="" />
                        <span className="purpur opacity">Реферальные:</span>
                    </div>
                    <p className="purpur fz24">{showAmount(referral)} QU</p>
                    <Link href="/cabinet/referrals"><a className="button">Подробнее</a></Link>
                </div>
            </div>

            <div className="graph-block">
                {/* <div className="graph-left" /> */}
                <div className="graph-right">
                    <h4>Доход за весь период:</h4>

                    <ul>
                        <li className="yellow">
                            Депозиты:
                            <span className="block purpur">{showAmount(depositeIncome)} QU</span>
                        </li>
                        <li className="green">
                            Партнерская программа:
                            <span className="block purpur">{showAmount(referral)} QU</span>	
                        </li>
                        <li className="no-list-style">
                            Суммарный доход:
                            <span className="block fz24 purpur">{showAmount(referralAndDepositeSum)} QU</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
