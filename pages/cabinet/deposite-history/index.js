import Big from 'big.js';
import dayjs from 'dayjs';
import React from 'react'
import useSWR from 'swr';
import kyFetch from 'api';

const DepositeHistory = () => {
    const { data: depositeList = [], error } = useSWR('depositeList', async () => {
        const resp = await kyFetch.get('deposite').json();
        
        if (resp) {
            return resp.map(({ amount, date, profit, id, status_id: statusId }) => {
                const sum = Big(amount).plus(Big(profit)).toNumber();

                return {
                    amount,
                    date: dayjs(date).format('DD.MM.YYYY'),
                    id,
                    statusId,
                    profit,
                    sum,
                }
            }).reverse();
        }

        return [];
    })
    
    const isDepositeListExist = depositeList?.length;

    return (
        <div>
            <h1>История депозитов</h1>

            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <td>Дата</td>
                            <td>Сумма</td>
                            <td>Прибыль</td>
                            <td>Всего</td>
                            <td>Статус</td>
                        </tr>
                    </thead>
                    <tbody>
                        {isDepositeListExist? 
                            depositeList?.map(({ amount, profit, id, date, sum }) => (
                                <tr key={id}>
                                    <td>{date}</td>
                                    <td>{amount} QU</td>
                                    <td>{profit} QU</td>
                                    <td>{sum} QU</td>
                                    <td className="green">Выполнено</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td>Депозитов не было</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DepositeHistory