import React from 'react'
import { mutate } from 'swr';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import BaseInput from '../../../components/base/BaseInput';;
import kyFetch from 'api';

const depositeTarrifs = [
    {
        id: 1,
        name: 'Junior Programm',
    },
    {
        id: 2,
        name: 'Middle Programm',
    },
    {
        id: 3,
        name: 'Senior Programm',
    }
]

const defaultFormValue = {
    tariffId: 1,
    amount: null,
}

const Deposite = () => {
    const { register, handleSubmit, reset, formState: { errors }, setError, clearErrors } = useForm();
    const onSubmit = async data => {
        try {
            const resp = await kyFetch.post('deposite', { json: data }).json();
            if (resp?.success) {
                reset(defaultFormValue);
                mutate('balance');
                mutate('depositeList');
            };
        } catch (e) {
            
        }
    }
    return (
        <div>
            <h1>Сделать депозит</h1>

            <div className="operation-block margin">
                <div className="operation-title">
                    <img src="img/operation1.svg" alt="" />
                    <span>Сделать депозит:</span>
                </div>
                <form  onSubmit={handleSubmit(onSubmit)} >
                    <div className="inputs-wrap">							
                        <div className="input">
                            <p>Тариф:</p>
                            <div className="select">
                                <select
                                    {...register('tariffId', {
                                        required: {
                                            value: true,
                                            message: "Обязательное поле"
                                        }
                                    })}
                                >
                                    {depositeTarrifs.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="input">
                            <BaseInput
                                label="Сумма:"
                                placeholder="Введите сумму"
                                {...register('amount', {
                                    required: {
                                        value: true,
                                        message: "Обязательное поле"
                                    }
                                })}
                            />
                        </div>
                    </div>
                    <button type="submit" className="button">Сделать депозит</button>
                </form>
            </div>

            <h3>Калькулятор доходности</h3>

            <div className="info-section">
                <h2>Информация о комиссии <br/>и условиях пополнения</h2>

                <p>Наша онлайн-платформа — это микс публичностии приватности. Публичность заключается в полной прозрачности, предсказуемости и автоматизированности работы нашей компании, когда практически исключён человеческий фактор. Приватность предусматривает полную анонимность наших клиентов и партнёров, если только они сами не захотят раскрыть себя или любые данные.</p>
                <p>Также мы понимаем приватность как возможность наших партнёров самим решать, когда и как инвестировать, когда и как выводить свои честно заработанные деньги. Приватность предусматривает полную анонимность наших клиентов и партнёров, если только они сами не захотят раскрыть себя или любые данные. Также мы понимаем приватность как возможность наших партнёров самим решать, когда и как инвестировать, когда и как выводить свои честно заработанные деньги.</p>
            </div>
        </div>
    )
}

export default Deposite;
