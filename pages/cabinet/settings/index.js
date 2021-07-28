import React from 'react'
import Image from 'next/image';

const index = () => (
        <div>
				<h1>Настройки профиля</h1>

				<form action="#">					
					<div className="operation-block">
						<div className="operation-title">
							<img src="img/operation3.svg" alt="" />
							<span>Личные данные</span>
						</div>
						<div>
							<div className="inputs-wrap">
								<div className="input">
									<p>
										<img src="img/settings1.svg" alt="" />
										Логин:
									</p>
									<input type="text" placeholder="Введите ваш логин" />
									

								</div>
								<div className="input">
									<p>
										<img src="img/settings1.svg" alt="" />
										Имя:
									</p>
									<input type="text" placeholder="Введите ваше имя" />
								</div>
								<div className="input">
									<p>
										<img src="img/settings2.svg" alt="" />
										Эл. почта:
									</p>
									<input type="text" placeholder="Введите ваш эл. почту" />
								</div>
								<div className="input">
									<p>
										<img src="img/settings2.svg" alt="" />
										Страна проживания:
									</p>
									<input type="text" placeholder="Введите вашу страну" />
								</div>														
							</div>
						</div>
					</div>
					<div className="operation-block">
						<div className="operation-title">
							<img src="img/operation4.svg" alt="" />
							<span>Контактные данные</span>
						</div>
						<div>
							<div className="inputs-wrap">
								<div className="input">
									<p>
										<img src="img/settings3.svg" alt="" />
										Телефон:
									</p>
									<input type="text" placeholder="+7 (999) 999-99-99" />
								</div>
								<div className="input">
									<p>
										<img src="img/settings4.svg" alt="" />
										ВКонтакте:
									</p>
									<input type="text" placeholder="Введите свой id" />
								</div>
								<div className="input">
									<p>
										<img src="img/settings5.svg" alt="" />
										Skype:
									</p>
									<input type="text" placeholder="Введите ваш никнейм" />
								</div>
								<div className="input">
									<p>
										<img src="img/settings6.svg" alt="" />
										Telegram:
									</p>
									<input type="text" placeholder="Введите ваш никнейм" />
								</div>														
							</div>
						</div>
					</div>
					<div className="operation-block">
						<div className="operation-title">
							<img src="img/operation5.svg" alt="" />
							<span>Платежные данные</span>
						</div>
						<div>
							<div className="inputs-wrap">
								<div className="input">
									<p>
										<img src="img/settings7.svg" alt="" />
										Berty
									</p>
									<input type="text" placeholder="Введите номер кошелька" />
								</div>
								<div className="input">
									<p>
										<img src="img/settings8.svg" alt="" />
										BitCoin
									</p>
									<input type="text" placeholder="Введите номер кошелька" />
								</div>
								<div className="input">
									<p>
										<img src="img/settings9.svg" alt="" />
										Ethereum
									</p>
									<input type="text" placeholder="Введите номер кошелька" />
								</div>
								<div className="input">
									<p>
										<img src="img/settings10.svg" alt="" />
										PerfectMoney
									</p>
									<input type="text" placeholder="Введите номер кошелька" />
								</div>														
							</div>
						</div>
					</div>
					<div className="operation-block">
						<div className="operation-title">
							<img src="img/operation6.svg" alt="" />
							<span>Смена пароля</span>
						</div>
						<div>
							<div className="inputs-wrap">
								<div className="input">
									<p>
										<img src="img/settings11.svg" alt="" />
										Старый пароль
									</p>
									<input type="text" placeholder="Введите старый пароль" />
								</div>
								<div className="input">
									<p>
										<img src="img/settings11.svg" alt="" />
										Новый пароль
									</p>
									<input type="text" placeholder="Введите новый пароль" />
								</div>
								<div className="input">
									<p>
										<img src="img/settings11.svg" alt="" />
										Подтверждение нового пароля
									</p>
									<input type="text" placeholder="Повторите новый пароль" />
								</div>													
							</div>
						</div>
					</div>

					<button type="button" className="button">Сохранить изменения</button>
				</form>
			
        </div>
    )

export default index
