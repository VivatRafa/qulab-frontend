import React, { useEffect, useState } from 'react'
import useSWR, { mutate } from 'swr';
import dayjs from 'dayjs';
import QRCode from "react-qr-code";
import { useForm } from 'react-hook-form';
import kyFetch from 'api';
import Image from 'next/image';
import BaseInput from 'components/base/BaseInput';
import payments from 'config/payments';

// images
import operation1 from 'public/static/img/operation1.svg';
import btcImg from 'public/static/img/btc.svg';
import Big from 'big.js';

const defaultFormValue = {
    amount: null,
}

export const statusClasses = ['green', 'yellow', 'red'];

const Replenishment = () => {    
    const { register, handleSubmit, getValues, watch, reset, formState: { errors }, setError, clearErrors } = useForm();
    const [qrCode, setQrCode] = useState(null);
    const amount = watch('amount', 0);

    const onSubmit = async data => {
        clearErrors();

        if (Number.isNaN(data.amount)) {
            setError('amount', { type: 'number', message: 'Должно быть числом' });
            return;
        }

        try {
            const resp = await kyFetch.post('payments/replenishment', { json: data }).json();
            if (resp?.address) {
                reset(defaultFormValue);
                mutate('replenishmentList');
                setQrCode(resp?.address);
            };
        } catch (e) {}
    }

    const { data: replenishmentList = [], error } = useSWR('replenishmentList', async () => {
        const resp = await kyFetch.get('payments/replenishment').json();
        
        if (resp) {
            return resp.map(({ 
                amount,
                date,
                id,
                status,
            }) => ({
                amount,
                date: dayjs(date).format('DD.MM.YYYY'),
                id,
                status,
            })).reverse();
        }

        return [];
    })

    const { data: dollarRate = 0 } = useSWR('dollarRate', async () => {
        const resp = await kyFetch.get('payments/getDollarRate').json();
        
        if (resp) {
            const { dollarRate } = resp;
            return dollarRate;
        }

        return 0;
    })

    const isReplenishmentListExist = replenishmentList.length;

    return (
        <div>
            <h1>Пополнение баланса</h1>

            <div className="operation-block margin">
                <div className="operation-title">
                    <div style={{ marginRight: '10px' }}>
                        <Image src={operation1} width="35" height="37" alt="" />
                    </div>
                    <span>Пополнить баланс:</span>
                </div>
                <form  onSubmit={handleSubmit(onSubmit)} >
                    <div className="inputs-wrap">
                        <div className="input">
                            <BaseInput
                                label="Сумма пополнения:"
                                placeholder="Введите сумму в USD"
                                error={errors?.amount?.message}
                                {...register('amount', {
                                    required: {
                                        value: true,
                                        message: "Обязательное поле"
                                    },
                                    valueAsNumber: true,
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
                    <div style={{ marginBottom: '10px', fontSize: '14px' }}>BTC: 
                        {!!dollarRate && !!amount ? Big(dollarRate).times(Big(amount)).toNumber() : 0}
                    </div>
                    <div style={{ marginBottom: '10px', fontSize: '14px' }}>Комиссия для пополнения составляет 0.000072 BTC</div>

                    <button type="submit" className="button">Пополнить</button>
                    {qrCode && (
                        <div style={{ margin: '10px 0' }}>
                            <div style={{ marginBottom: '15px', fontSize: '18px' }}>
                                {/* Добавиьт конкретную сумму */}
                                Пополните данный кошелек на сумму {amount} BTC и ожидайте зачисление, это может занять некоторое время. <span style={{ fontWeight: 'bold', fontSize: '22px' }}>{qrCode}</span>
                            </div>
                            <div><QRCode value={qrCode} /></div>
                            <div>
                                
                            </div>
                        </div>
                    )}
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
                        {isReplenishmentListExist ?
                            replenishmentList.map(({ id, amount, date, status }) => (
                                <tr key={id}>
                                    <td>{date}</td>
                                    <td>{amount} QU</td>
                                    <td>
                                        <span style={{ marginRight: '5px' }}>
                                            <Image src={btcImg} width="18" height="18" alt="" />
                                        </span>
                                        BitCoin
                                    </td>
                                    <td className={statusClasses[status]}>{payments.statuses[status]}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td>Пополнений не было</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Replenishment;
