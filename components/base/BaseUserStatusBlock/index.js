import React from 'react'
import useSWR from 'swr';
import Image from 'next/image';
import { statuses } from '../../../config/statuses';

const BaseUserStatusBlock = () => {

    const { data: userData = {} } = useSWR('userInfo', async () => {
        const resp = await kyFetch.get('users').json();

        return resp;
    })

    const { data: balanceData = {}, error } = useSWR('balance', async () => {
        const resp = await kyFetch.get('balance').json();

        return resp;
    })

    const { status_id } = userData;

    const currentStatusIndex = statuses.findIndex(({ id }) => status_id === id);

    const currentStatus = statuses[currentStatusIndex];
    const nextStatus = statuses[currentStatusIndex + 1];

    const {
        balance = 0,
        invested = 0,
        referral = 0,
        withdrawn = 0 
    } = balanceData;

    return (
        <div className="status-block">
        {currentStatus && (
            <div className="status-item left">
                <div className="status-title">
                    <div className="img">
                        <Image src={`/static/img/status${currentStatusIndex + 1}.svg`} alt="" width="60" height="60" />
                    </div>
                    <div className="text">
                        <p>Ваш текущий статус:</p>
                        <h3 className="purpur fz24">{currentStatus.name}</h3>
                    </div>
                </div>
                <p>
                    Бонус от личных продаж:
                    <span className="purpur fz24 block">{currentStatus.bonus}%</span>
                </p>
                <p>
                    Личный оборот (вклад):
                    <span className="purpur block">&gt; {currentStatus.amount} QU</span>
                </p>
                <p>
                    Оборот структуры:
                    <span className="purpur block">{currentStatus.referral}</span>
                </p>
            </div>
        )}
        {nextStatus && (
            <div className="status-item right">
                <div className="status-title">
                    <div className="img opacity">
                        <Image src="/static/img/status2.svg" alt="" width="60" height="60" />
                    </div>
                    <div className="text">
                        <p>Для следующего статуса</p>
                        <h4 className="purpur opacity"><strong>{nextStatus.name}</strong></h4>
                        <p>необходимо:</p>
                    </div>
                </div>
                <div className="status-body-wrap">
                    <p>
                        Личный оборот:
                        <span className="purpur block">&gt; {nextStatus.amount} QU</span>
                    </p>
                    <p>
                        Осталось:
                        <span className="red block">{(nextStatus.amount - invested) > 0 ? nextStatus.amount - invested : 0 } QU</span>
                    </p>
                    <p>
                        Оборот структуры:
                        <span className="purpur block">{nextStatus.referral}</span>
                    </p>
                    <p>
                        Оборот структуры:
                        <span className="green block">Выполнено</span>
                    </p>
                </div>
            </div>
        )}
        </div>
    )
}

export default BaseUserStatusBlock
