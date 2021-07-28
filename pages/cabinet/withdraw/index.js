import React from 'react'
import Image from 'next/image';
import useSWR, { mutate } from 'swr';
import { useForm } from 'react-hook-form';
import kyFetch from 'api';
import dayjs from 'dayjs';
import BaseInput from 'components/Base/BaseInput';

const defaultFormValue = {
    amount: null,
}

const Withdrawal = () => {
    const { register, handleSubmit, reset, formState: { errors }, setError, clearErrors } = useForm();

    const onSubmit = async data => {
        try {
            const resp = await kyFetch.post('payments/withdraw', { json: data }).json();
            if (resp?.success) {
                reset(defaultFormValue);
                mutate('balance');
                mutate('withdrawList');
            };
        } catch (e) {
            console.log(e.response);
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
    return (
        <div>
            <h1>Вывод средств</h1>

            <div className="operation-block margin">
                <div className="operation-title">
                    <img src="img/money3.svg" alt="" />
                    <span>Вывести средства:</span>
                </div>
                <form  onSubmit={handleSubmit(onSubmit)} >
                    <div className="inputs-wrap">
                        <div className="input">
                            <BaseInput
                                label="Сумма вывода:"
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
                            <BaseInput
                                label="Кошелек:"
                                placeholder="Введите адрес кошелька"
                                {...register('address', {
                                    required: {
                                        value: true,
                                        message: "Обязательное поле"
                                    }
                                })}
                            />
                        </div>
                        {/* <div className="input">
                            <p>Система:</p>
                            <div className="select">
                                <select>
                                    <option value="junior">Junior Programm</option>
                                    <option value="middle">Middle Programm</option>
                                    <option value="senior">Senior Programm</option>
                                </select>
                            </div>
                        </div>							 */}
                    </div>
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
                        {withdrawList.map(({ id, amount, date }) => (
                            <tr key={id}>
                                <td>{date}</td>
                                <td>{amount} QU</td>
                                <td>
                                    <img src="img/qiwi.svg" alt="" />
                                    Кошелек
                                </td>
                                <td>
                                    <img src="img/berty.svg" alt="" />
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

export default Withdrawal
