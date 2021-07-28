import React from 'react'
import Image from 'next/image';
import useSWR from 'swr';
import Big from 'big.js';
import dayjs from 'dayjs';

const DepositeHistory = () => {
    // const { data: depositeList = [], error } = useSWR('depositeList', async () => {
    //     const resp = await kyFetch.get('deposite').json();
        
    //     if (resp) {
    //         return resp.map(({ amount, date, profit, id, status_id: statusId }) => {
    //             const sum = Big(amount).plus(Big(profit)).toNumber();

    //             return {
    //                 amount,
    //                 date: dayjs(date).format('DD.MM.YYYY'),
    //                 id,
    //                 statusId,
    //                 profit,
    //                 sum,
    //             }
    //         }).reverse();
    //     }

    //     return [];
    // })
    return (
        <div>
            <h1>История операций</h1>

            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <td>Дата</td>
                            <td>Операция</td>
                            <td>Сумма</td>
                            <td>Система</td>
                            <td>Статус</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>21.05.2021</td>
                            <td>Вывод</td>
                            <td>124.67 QU</td>
                            <td>
                                <img src="img/btc.svg" alt="" />
                                BitCoin
                            </td>
                            <td className="green">Выполнено</td>
                        </tr>
                        <tr>
                            <td>21.05.2021</td>
                            <td>Пополнение</td>
                            <td>124.67 QU</td>
                            <td>
                                <img src="img/btc.svg" alt="" />
                                BitCoin
                            </td>
                            <td className="red">Ошибка</td>
                        </tr>
                        <tr>
                            <td>21.05.2021</td>
                            <td>Вывод</td>
                            <td>124.67 QU</td>
                            <td>
                                <img src="img/btc.svg" alt="" />
                                BitCoin
                            </td>
                            <td className="green">Выполнено</td>
                        </tr>
                        <tr>
                            <td>21.05.2021</td>
                            <td>Пополнение</td>
                            <td>124.67 QU</td>
                            <td>
                                <img src="img/btc.svg" alt="" />
                                BitCoin
                            </td>
                            <td className="green">Выполнено</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DepositeHistory