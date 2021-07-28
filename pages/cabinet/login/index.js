import React from 'react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import Image from 'next/image';
import { useForm } from 'react-hook-form'
import icons from 'config/icon';
import BaseInput from 'components/Base/BaseInput';
import AuthLayout from 'layouts/auth';
import kyFetch from 'api';
import Link from 'next/link';


const Login = () => {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
    const onSubmit = async data => {
        
        try {
            const { accessToken } = await kyFetch.post('login', { json: data }).json();
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
                        <h3>Войти</h3>
                        <p>
                            <img src="img/reg-logo.svg" alt="" />
                            <span>QuLab</span>
                        </p>
                    </div>
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
                    <div className="reg-item">
                        <BaseInput
                            labelIcon={icons.password}
                            label="Пароль:"
                            icon={icons.eye}
                            placeholder="Введите пароль"
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
                    <div>
                        <Link href="/cabinet/password-recovery"><a className="reg-link">Забыли логин или пароль?</a></Link>
                    </div>
                    
                </form>
            </div>
        </section>
    )
}

Login.Layout = AuthLayout;

export default Login
