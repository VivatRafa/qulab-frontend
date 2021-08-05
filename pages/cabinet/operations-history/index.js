import React from 'react'
import Image from 'next/image';
import useSWR from 'swr';
import Big from 'big.js';
import dayjs from 'dayjs';
import kyFetch from 'api';
import payments from 'config/payments';

const operationsType = ['Депозит', 'Вывод', 'Пополнение'];
const statusClasses = ['green', 'yellow', 'red'];

const OperationsHistory = () => {
    const { data: operationsList = [], error } = useSWR('operationsList', async () => {
        const resp = await kyFetch.get('operations').json();
        
        if (resp) {
            const operations = resp
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .map(({ id, amount, type, status, date }) => ({
                    id,
                    amount,
                    type,
                    status,
                    date: dayjs(date).format('DD.MM.YYYY'),
                }));

            return operations;
        }

        return [];
    })

    const isOperationsExist = operationsList.length;
    
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
                        {isOperationsExist ? 
                        operationsList.map(({ id, amount, status, date, type }) => (
                            <tr key={`${type}_${id}`}>
                                <td>{date}</td>
                                <td>{operationsType[type]}</td>
                                <td>{amount} QU</td>
                                <td>
                                    <span style={{ marginRight: '5px' }}>
                                        <Image src="/static/img/btc.svg" width="18" height="18" alt="" />
                                    </span>
                                    BitCoin
                                </td>
                                <td className={statusClasses[status]}>{payments.statuses[status]}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td>Операций не было</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OperationsHistory