import React from 'react'
import useSWR from 'swr';
import Image from 'next/image';

const BaseUserStatusBlock = () => {
    const { data: balanceData = {}, error } = useSWR('balance', async () => {
        const resp = await kyFetch.get('balance').json();

        return resp;
    })
    
    const {
        balance = 0,
        invested = 0,
        referral = 0,
        withdrawn = 0 
    } = balanceData;

    return (
        <div className="status-block">
            <div className="status-item left">
                <div className="status-title">
                    <div className="img">
                        <Image src="/static/img/status1.svg" alt="" width="60" height="60" />
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
                        <Image src="/static/img/status2.svg" alt="" width="60" height="60" />
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
                        <span className="red block">{500 - invested} QU</span>
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
    )
}

export default BaseUserStatusBlock
