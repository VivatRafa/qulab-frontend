import React, { useState } from 'react'
import useSWR, { mutate } from 'swr';
import dayjs from 'dayjs';
import QRCode from "react-qr-code";
import { useForm } from 'react-hook-form';
import kyFetch from 'api';
import BaseInput from 'components/Base/BaseInput';

const defaultFormValue = {
    amount: null,
}

const Replenishment = () => {    
    const { register, handleSubmit, reset, formState: { errors }, setError, clearErrors } = useForm();
    const [qrCode, setQrCode] = useState(null);

    const onSubmit = async data => {
        try {
            const resp = await kyFetch.post('payments/replenishment', { json: data }).json();
            if (resp?.address) {
                reset(defaultFormValue);
                mutate('replenishmentList');
                setQrCode(resp?.address);
            };
        } catch (e) {
            console.log(e.response);
        }
    }

    const { data: replenishmentList = [], error } = useSWR('replenishmentList', async () => {
        const resp = await kyFetch.get('payments/replenishment').json();
        
        if (resp) {
            return resp.map(({ 
                amount,
                date,
                id,
             }) => ({
                 amount,
                 date: dayjs(date).format('DD.MM.YYYY'),
                 id,
            })).reverse();
        }

        return [];
    })

    return (
        <div>
            <h1>Пополнение баланса</h1>

            <div className="operation-block margin">
                <div className="operation-title">
                    <img src="img/operation1.svg" alt="" />
                    <span>Пополнить баланс:</span>
                </div>
                <form  onSubmit={handleSubmit(onSubmit)} >
                    <div className="inputs-wrap">
                        <div className="input">
                            <BaseInput
                                label="Сумма пополнения:"
                                placeholder="Введите сумму"
                                {...register('amount', {
                                    required: {
                                        value: true,
                                        message: "Обязательное поле"
                                    }
                                })}
                            />
                        </div>
                        <div className="input">
                            <p>Система:</p>
                            <div className="select">
                                <select>
                                    <option value="1">Bitcoin</option>
                                </select>
                            </div>
                        </div>							
                    </div>
                    <div>{qrCode}</div>
                    {qrCode && <QRCode value={qrCode} />}
                    <button type="submit" className="button">Пополнить</button>
                </form>
            </div>

            <h3>История пополнений</h3>

            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <td>Дата</td>
                            <td>Сумма</td>
                            <td>Кошелек</td>
                            <td>Статус</td>
                        </tr>
                    </thead>
                    <tbody>
                        {replenishmentList.map(({ id, amount, date }) => (
                            <tr>
                                <td>{date}</td>
                                <td>{amount} QU</td>
                                <td>
                                    <img src="img/btc.svg" alt="" />
                                    BitCoin
                                </td>
                                <td className="green">Выполнено</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Replenishment;
