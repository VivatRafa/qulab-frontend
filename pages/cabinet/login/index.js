import React from 'react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import Image from 'next/image';
import { useForm } from 'react-hook-form'
import icons from 'config/icon';
import BaseInput from '../../../components/base/BaseInput';;
import AuthLayout from 'layouts/auth';
import kyFetch from 'api';
import Link from 'next/link';


const Login = () => {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
    const onSubmit = async data => {
        clearErrors();

        try {
            const { accessToken, message } = await kyFetch.post('login', { json: data }).json();

            Cookies.set('jwt_access_token', accessToken);
            router.push('/cabinet/dashboard');
        } catch (e) {
            const errorResp = await e.response?.json();
            const [errorMessage = 'Произошла какая-то ошбика, попробуйте позже'] = errorResp?.message || [];
            setError('password', { type: 'serverError', message: errorMessage })
        }

    };

    return (
        <section className="reg-section">
            <div className="wrapper">
                <form onSubmit={handleSubmit(onSubmit)} className="reg-block">
                    <div className="reg-title">
                        <h3>Войти</h3>
                        <p>
                            <Image src="/static/img/reg-logo.svg" width="40" height="40" alt="" />
                            <span>QuLab</span>
                        </p>
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
                            icon={icons.eye}
                            error={errors?.password?.message}
                            placeholder="Введите пароль"
                            type="password"
                            {...register('password', {
                                required: {
                                    value: true,
                                    message: "Обязательное поле"
                                }
                            })}
                        />
                    </div>

                    <button type="submit" className="button">Войти</button>

                    <div>
                        <Link href="/cabinet/registration"><a className="reg-link">Создать аккаунт</a></Link>
                    </div>
                    {/* <div>
                        <Link href="/cabinet/password-recovery"><a className="reg-link">Забыли логин или пароль?</a></Link>
                    </div> */}
                    
                </form>
            </div>
        </section>
    )
}

Login.Layout = AuthLayout;
Login.needAuth = false;

Login.PageName = 'Login';

export default Login
