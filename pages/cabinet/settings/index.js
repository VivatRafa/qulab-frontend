import React, { useEffect } from 'react'
import Image from 'next/image';
import useSWR, { mutate } from 'swr';
import { useForm } from 'react-hook-form';
import icons from 'config/icon';
import BaseInput from 'components/base/BaseInput';
import { useUserInfo } from 'hooks';
import kyFetch from 'api';

const Settings = () => {
    const { 
		register: registerPersonal, 
		handleSubmit: handleSubmitPersonal, 
		setValue: setValuePersonal,
		setError: setErrorPersonal,
		formState: { errors: errorsPersonal },
		reset: resetPersonal,
		clearErrors: clearErrorsPersonal,
	} = useForm();

	const { 
		register: registerPayment, 
		handleSubmit: handleSubmitPayment, 
		reset: resetPayment,
		formState: { errors: errorsPayment },
		setError: setErrorPayment,
		clearErrors: clearErrorsPayment,
	} = useForm();

	const { 
		register: registerPassword, 
		handleSubmit: handleSubmitPassword, 
		getValues: getValuesPassword,
		formState: { errors: errorsPassword },		
		setError: setErrorPassword,
		clearErrors: clearErrorsPassword,
	} = useForm();

    const { data: userData = {} } = useSWR('userInfo', async () => {
        const resp = await kyFetch.get('users').json();

        // eslint-disable-next-line camelcase
        const { email, login, country, name, address } = resp;
		const personalInfo = { login, email, country, name };
		
		resetPersonal(personalInfo);
		resetPayment({ address });

		return resp;
    })



	const personalOnSubmit = async data => {
		clearErrorsPersonal();

		const isSomeFieldChanged = Object.keys(data).some(fieldName => data[fieldName] !== userData[fieldName]);
		
		try {
			if (isSomeFieldChanged) {
				const resp = await kyFetch.post('users/update', { json: data }).json();

				if (resp) mutate('userInfo')
			}
		} catch (e) {
            const errorResp = await e.response?.json();
            const [errorMessage = 'Произошла какая-то ошбика, попробуйте позже'] = errorResp?.message || [];
            setErrorPersonal('password', { type: 'email', message: errorMessage })
		}
	}

	const paymentOnSubmit = async data => {		
		clearErrorsPayment()

		try {
			const resp = await kyFetch.post('purse', { json: data }).json();

			if (resp) mutate('userInfo')
		} catch (e) {
            const errorResp = await e.response?.json();
            const [errorMessage = 'Произошла какая-то ошбика, попробуйте позже'] = errorResp?.message || [];
            setErrorPayment('address', { type: 'serverError', message: errorMessage })
		}
	}

	const passwordOnSubmit = async data => {
		clearErrorsPassword();

		try {
			await kyFetch.post('users/change-password', { json: data }).json();
		} catch (e) {
            const errorResp = await e.response?.json();
            const [errorMessage = 'Произошла какая-то ошбика, попробуйте позже'] = errorResp?.message || [];
            setErrorPassword('newPasswordRepeat', { type: 'serverError', message: errorMessage })
		}
	}


	return (
        <>
			<h1>Настройки профиля</h1>

			<form onSubmit={handleSubmitPersonal(personalOnSubmit)}>					
				<div className="operation-block">
					<div className="operation-title">
						<Image width="40" height="40" src="/static/img/operation3.svg" alt="" />
						<span>Личные данные</span>
					</div>
					<div>
						<div className="inputs-wrap">
							<div className="input">
								<BaseInput
									labelIcon={icons.user}
									label="Логин:"
									placeholder="Введите ваш логин"
									{...registerPersonal('login')}
								/>
							</div>
							<div className="input">
								<BaseInput
									labelIcon={icons.user}
									label="Имя:"
									placeholder="Введите ваше имя"
									{...registerPersonal('name')}
								/>
							</div>
							<div className="input">
								<BaseInput
									labelIcon={icons.user}
									label="Эл. почта:"
									placeholder="Введите вашу почту"
									{...registerPersonal('email')}
								/>
							</div>
							<div className="input">
								<BaseInput
									labelIcon={icons.user}
									label="Страна проживания:"
									placeholder="Введите вашу страну"
									{...registerPersonal('country')}
								/>
							</div>														
						</div>
					</div>
				</div>
				
				<button type="submit" className="button">Сохранить личные данные</button>
			</form>

			<form onSubmit={handleSubmitPayment(paymentOnSubmit)}>	
				<div className="operation-block">
					<div className="operation-title">
						<Image width="40" height="40" src="/static/img/operation5.svg" alt="" />
						<span>Платежные данные</span>
					</div>
					<div>
						<div className="inputs-wrap">
							<div className="input">
								<BaseInput
									labelIcon={icons.user}
									label="BitCoin"
									placeholder="Введите номер кошелька"
									{...registerPayment('address')}
								/>
							</div>													
						</div>
					</div>
				</div>
				
				<button type="submit" className="button">Сохранить платежные данные</button>
			</form>				
			<form onSubmit={handleSubmitPassword(passwordOnSubmit)}>	
				<div className="operation-block">
					<div className="operation-title">
						<Image width="40" height="40" src="/static/img/operation6.svg" alt="" />
						<span>Смена пароля</span>
					</div>
					<div>
						<div className="inputs-wrap">
							<div className="input">
								<BaseInput
									labelIcon={icons.user}
									label="Старый пароль"
									placeholder="Введите старый пароль"
									{...registerPassword('oldPassword')}
								/>
							</div>
							<div className="input">
								<BaseInput
									labelIcon={icons.user}
									label="Новый пароль"
									placeholder="Введите новый пароль"
									error={errorsPassword?.newPassword?.message}
									{...registerPassword('newPassword', {
										validate: value =>
                                    		value !== getValuesPassword('oldPassword') || "Новый и старый пароли совпадают"
									})}
								/>
							</div>
							<div className="input">
								<BaseInput
									labelIcon={icons.user}
									label="Подтверждение нового пароля"
									placeholder="Повторите новый пароль"
									error={errorsPassword?.newPasswordRepeat?.message}
									{...registerPassword('newPasswordRepeat', {
										validate: value =>
                                    		value === getValuesPassword('newPassword') || "Пароли не совпадают"
									})}
								/>
							</div>													
						</div>
					</div>
				</div>

				<button type="submit" className="button">Поменять пароль</button>
			</form>
        </>
    )
}

export default Settings
