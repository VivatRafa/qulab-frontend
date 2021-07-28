import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types'
import icons from 'config/icon';
import AuthLayout from 'layouts/auth'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import BaseInput from 'components/Base/BaseInput';
import kyFetch from 'api';

const Registration = () => {
    const { register, handleSubmit, setValue, getValues, formState: { errors }, setError, clearErrors } = useForm();
    const router = useRouter();
    const { ref } = router.query;

    useEffect(() => {
        if (ref) setValue('referralLink', window.location.href);
    }, [])

    const onSubmit = async data => {
        const { login, email, password, referralLink } = data;

        let referralIdFromLink = null;

        try {
            const urlSearchParams = new URLSearchParams(new URL(referralLink).search);
            const params = Object.fromEntries(urlSearchParams.entries());
            referralIdFromLink = params.ref;

        // eslint-disable-next-line no-empty
        } catch (e) {}
        const referralId = Number(ref || referralIdFromLink);

        const params = { login, email, password, ...(referralId && { referralId }) };
        try {
            const { accessToken } = await kyFetch.post('registration', { json: params }).json();
            Cookies.set('jwt_access_token', accessToken);
            router.push('/cabinet/dashboard');
        } catch (e) {
            console.log(e.response);
        }
    };

    return (
        <section className="reg-section">
            <div className="wrapper">
                <form onSubmit={handleSubmit(onSubmit)} className="reg-block">

                    <div className="reg-title">
                        <h3>Регистрация</h3>
                        <p>
                            <Image src="/img/reg-logo.svg" alt="" width="50" height="50" />
                            <span>QuLab</span>
                        </p>
                    </div>

                    <div className="reg-item">
                        <BaseInput
                            labelIcon={icons.user}
                            label="Логин:"
                            placeholder="Придумайте ваш логин"
                            error={errors?.login?.message}
                            {...register('login', {
                                required: {
                                    value: true,
                                    message: "Обязательное поле"
                                }
                            })}
                        />
                    </div>

                    <div className="reg-item">
                        <BaseInput
                            labelIcon={icons.email}
                            label="Эл. почта:"
                            placeholder="Введите вашу эл. почту"
                            error={errors?.email?.message}
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: "Обязательное поле"
                                }
                            })}
                        />
                    </div>

                    <div className="reg-item">
                        <BaseInput
                            labelIcon={icons.password}
                            label="Пароль:"
                            placeholder="Придумайте пароль"
                            error={errors?.password?.message}
                            {...register('password', {
                                required: {
                                    value: true,
                                    message: "Обязательное поле"
                                }
                            })}
                        />
                    </div>

                    <div className="reg-item">
                        <BaseInput
                            labelIcon={icons.password}
                            label="Проверка пароля:"
                            placeholder="Повторите пароль"
                            error={errors?.repeatPassword?.message}
                            {...register('repeatPassword', {
                                required: {
                                    value: true,
                                    message: "Обязательное поле"
                                },
                                validate: value =>
                                    value === getValues('password') || "Пароли не совпадает"
                            })}
                        />
                    </div>

                    <div className="reg-item">
                        <BaseInput
                            labelIcon={icons.chain}
                            label="Реферальная ссылка:"
                            placeholder="Вставьте ссылку-приглашение"
                            error={errors?.referral?.message}
                            {...register('referralLink')}
                        />
                    </div>

                    <div className="reg-agreement">
                        <input 
                            type="checkbox"
                            id="agree"
                            {...register('rules', {
                                required: {
                                    value: true,
                                    message: "Обязательное поле"
                                }
                            })}
                        />
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label htmlFor="agree">Я принимаю
                        <a> правила проекта</a>
                        {/* <Link href="/login"></Link> */}
                        </label>
                    </div>

                    <button type="submit" className="button">Регистрация</button>
                    <Link href="/cabinet/login"><a className="reg-link">Уже есть аккаунт?</a></Link>
                    
                </form>
            </div>
        </section>
    )
}

Registration.Layout = AuthLayout;

export default Registration
