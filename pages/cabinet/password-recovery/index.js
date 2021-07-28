import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import icons from 'config/icon';
import BaseInput from 'components/Base/BaseInput';
import AuthLayout from 'layouts/auth';


const PasswordRecovery = () => {
    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="reg-section">
            <div className="wrapper">
                <form onSubmit={handleSubmit(onSubmit)} className="reg-block">
                    <div className="reg-title">
                        <h3>Восстановление пароля</h3>
                    </div>
                    <p>Введите адрес вашей эл. почты. Туда придёт письмо с инструкцией по восстановлению пароля</p>
                    <div className="reg-item">
                        <BaseInput
                            labelIcon={icons.email}
                            label="Эл. почта:"
                            placeholder="Введите вашу эл. почту"
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: "Обязательное поле"
                                }
                            })}
                        />
                    </div>
                    <button type="submit" className="button">Отправить</button>

                    <Link href="/cabinet/login"><a className="reg-link">Вернуться к авторизации</a></Link>
                </form>
            </div>
        </section>
    )
}

PasswordRecovery.Layout = AuthLayout;

export default PasswordRecovery
