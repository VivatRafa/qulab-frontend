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
import BaseUserStatusBlock from 'components/base/BaseUserStatusBlock';

const Dashboard = () => {
    const [user] = useUserInfo();

    const { data: userData } = useSWR('userInfo', async () => {
        const resp = await kyFetch.get('users').json();

        // eslint-disable-next-line camelcase
        const { last_aсtivity, registration_date } = resp;
        const lastActivity = dayjs(last_aсtivity).format('DD.MM.YYYY');
        const registrationDate = dayjs(registration_date).format('DD.MM.YYYY HH:mm');
        return { ...resp, lastActivity, registrationDate };
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
    const { lastActivity, registrationDate } = userData || {};
    const { id } = user || {};

    let referralAndDepositeSum = 0;

    try {
        referralAndDepositeSum = Big(depositeIncome).plus(Big(referral)).toNumber();
    } catch (e) {
        referralAndDepositeSum = 0;
    }
    
    return (
        <div>
            <h1>Главная</h1>

            <div className="data">
                <p>Дата регистрации:&nbsp;<span className="purpur">{registrationDate}</span></p>
                <p>Дата последней активности:&nbsp;<span className="purpur">{lastActivity}</span></p>
            </div>

            {userData && <BaseUserStatusBlock />}

            <div className="money-wrap">
                <div className="money-item">
                    <div className="money-item-title">
                        <div style={{ marginRight: '10px' }}>
                            <Image src="/static/img/money1.svg" alt="" width="34" height="34" />
                        </div>
                        <span className="purpur opacity">Ваш баланс</span>
                    </div>
                    <p className="purpur fz24">{showAmount(balance)} QU</p>
                    <Link href="/cabinet/replenishment"><a className="button">Пополнить</a></Link>
                </div>
                <div className="money-item">
                    <div className="money-item-title">
                        <div style={{ marginRight: '10px' }}>
                            <Image src="/static/img/money2.svg" alt="" width="34" height="34" />
                        </div>
                        <span className="purpur opacity">Инвестировано:</span>
                    </div>
                    <p className="purpur fz24">{showAmount(invested)} QU</p>
                    <Link href="/cabinet/deposite"><a className="button">Инвестировать</a></Link>
                </div>
                <div className="money-item">
                    <div className="money-item-title">
                        <div style={{ marginRight: '10px' }}>
                            <Image src="/static/img/money3.svg" alt="" width="34" height="34" />
                        </div>
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
                        <div style={{ marginRight: '10px' }}>
                            <Image src="/static/img/money5.svg" alt="" width="34" height="34" />
                        </div>
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
