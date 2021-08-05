import React from 'react'
import Image from 'next/image';
import useSWR, { mutate } from 'swr';
import { useForm } from 'react-hook-form';
import kyFetch from 'api';
import dayjs from 'dayjs';
import BaseInput from '../../../components/base/BaseInput';;

const defaultFormValue = {
    amount: null,
}

const Withdrawal = () => {
    const { register, handleSubmit, reset, formState: { errors }, setError, clearErrors } = useForm();

    const onSubmit = async data => {
        clearErrors();

        if (Number.isNaN(data.amount)) {
            setError('amount', { type: 'number', message: 'Должно быть числом' });
            return;
        }

        try {
            const resp = await kyFetch.post('payments/withdraw', { json: data }).json();
            if (resp?.success) {
                reset(defaultFormValue);
                mutate('balance');
                mutate('withdrawList');
            };
        } catch (e) {
            const errorResp = await e.response?.json();
            const errorMessage = errorResp?.message || 'Произошла какая-то ошбика, попробуйте позже';
            setError('amount', { type: 'serverError', message: errorMessage })
        }
    }

    const { data: withdrawList = [], error } = useSWR('withdrawList', async () => {
        const resp = await kyFetch.get('payments/withdraw').json();
        
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

    const isWithdrawExist = withdrawList?.length;
    
    return (
        <div>
            <h1>Вывод средств</h1>

            <div className="operation-block margin">
                <div className="operation-title">
                    <Image width="40" height="40" src="/static/img/money3.svg" alt="" />
                    <span>Вывести средства:</span>
                </div>
                <form  onSubmit={handleSubmit(onSubmit)} >
                    <div className="inputs-wrap">
                        <div className="input">
                            <BaseInput
                                label="Сумма вывода:"
                                placeholder="Введите сумму"
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
                            <BaseInput
                                label="Кошелек:"
                                placeholder="Введите адрес кошелька"
                                error={errors?.address?.message}
                                {...register('address', {
                                    required: {
                                        value: true,
                                        message: "Обязательное поле"
                                    }
                                })}
                            />
                        </div>
                    </div>
                    
                    <div style={{ marginBottom: '10px', fontSize: '14px' }}>Комиссия для вывода средств варьируется от 0.00060 BTC(~24 USD) </div>

                    <button type="submit" className="button">Вывести средства</button>
                </form>
            </div>

            <h3>История вывода средств</h3>

            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <td>Дата</td>
                            <td>Сумма</td>
                            <td>Система</td>
                            <td>Кошелек</td>
                            <td>Статус</td>
                        </tr>
                    </thead>
                    <tbody>
                        {isWithdrawExist ? 
                            withdrawList?.map(({ id, amount, date }) => (
                                <tr key={id}>
                                    <td>{date}</td>
                                    <td>{amount} QU</td>
                                    <td>
                                        Кошелек
                                    </td>
                                    <td>
                                        <Image height="18" width="18" src="/static/img/btc.svg" alt="" />
                                        BitCoin
                                    </td>
                                    <td className="green">Выполнено</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td>Вывода средств не было</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Withdrawal
