import React from 'react'
import Landing from '../../layouts/landing';

const Investor = () => {
    return (
        <>
            <header>
                <img src="img/header-circle.svg" alt="" class="header-circle" />
                <section class="top-line-section">
                    <div class="wrapper">
                        <div class="top-line-wrap">
                            <div class="top-left">
                                <div class="burger">
                                    <div class="line"></div>
                                    <div class="line"></div>
                                    <div class="line"></div>
                                </div>
                                <a href="index.html" class="logo">
                                    <img src="img/logo.svg" alt="" />
                                    <span>QuLab</span>
                                </a>
                            </div>
                            <ul class="top-menu">
                                <li><a href="about.html"><span>О нас</span></a></li>
                                <li class="active"><a href="investoru.html"><span>Инвестору</span></a></li>
                                <li><a href="program.html"><span>Премиальная программа</span></a></li>
                                <li><a href="reviews.html"><span>Отзывы</span></a></li>
                                <li><a href="faq.html"><span>FAQ</span></a></li>
                            </ul>
                            <div class="top-buttons">
                                <a href="login.html"><span>Войти</span></a>
                                <a href="reg.html" class="button"><span>Регистрация</span></a>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="wrapper">
                    <div class="header-program-block">
                        <h1>Как начать инвестировать</h1>
                        <div class="header-program-wrap">
                            <div class="img">
                                <img src="img/header-investoru.svg" alt="" />
                            </div>
                            <div class="text">
                                <h3>Начать инвестировать очень просто</h3>
                                <p>Первым делом вам нужно подать заявку на регистрацию учётной записи. После этого вы сможете пополнить баланс удобным для вас способом. Денежные средства со своего личного счёта вы можете вложить в любой доступный тарифный план представленный на платформе. Внимательно прочитайте условия и выберите наиболее оптимальные для вас. Полученную прибыль вследствие работы ваших инвестиций вы сможете вывести на выбранные вами в личном кабинете платёжные системы.</p>

                                <div class="header-program-button">
                                    <a href="#" class="button"><span>Посмотреть презентацию</span></a>
                                </div>
                            </div>
                        </div>			
                    </div>
                </div>
            </header>

            <section class="referal-section">
                <div class="wrapper">
                    <h2>Тарифные планы</h2>

                    <div class="referal-wrap">
                        <div class="referal-left">
                            <p>Благодаря продуманной и прозрачной системе вы сможете построить пассивный доход на основе нашей платформы и начать зарабатывать вместе с QuLab.</p>
                        </div>
                        <div class="referal-right">
                            <img src="img/referal-prev.svg" alt="" class="referal-prev" />
                            <div class="before"></div>

                            <div class="referal-slider">
                                <div class="status-item">
                                    <div class="icon">
                                        <img src="img/status-icon1.svg" alt="" />
                                    </div>
                                    <div class="stars">
                                        <img src="img/stars1.svg" alt="" />
                                    </div>
                                    <h4>Консультант</h4>
                                    <div class="bonus">
                                        <h5>Бонус:</h5>
                                        <div class="bonus-wrap">
                                            <p>5<span>%</span></p>
                                            <p>от личных продаж</p>
                                        </div>
                                    </div>
                                    <p>Личный оборот (вклад): <span>{'>'} 500 QU</span></p>
                                    <p>Оборот структуры: <span>X</span></p>
                                </div>
                                <div class="status-item">
                                    <div class="icon">
                                        <img src="img/status-icon1.svg" alt="" />
                                    </div>
                                    <div class="stars">
                                        <img src="img/stars2.svg" alt="" />
                                    </div>
                                    <h4>Старший консультант</h4>
                                    <div class="bonus">
                                        <h5>Бонус:</h5>
                                        <div class="bonus-wrap">
                                            <p>6<span>%</span></p>
                                            <p>от личных продаж</p>
                                        </div>
                                    </div>
                                    <p>Личный оборот (вклад): <span>{'>'} 1000 QU</span></p>
                                    <p>Оборот структуры: <span>X</span></p>
                                </div>
                                <div class="status-item">
                                    <div class="icon">
                                        <img src="img/status-icon2.svg" alt="" />
                                    </div>
                                    <div class="stars">
                                        <img src="img/stars3.svg" alt="" />
                                    </div>
                                    <h4>Лидер</h4>
                                    <div class="bonus">
                                        <h5>Бонус:</h5>
                                        <div class="bonus-wrap">
                                            <p>7<span>%</span></p>
                                            <p>от личных продаж</p>
                                        </div>
                                    </div>
                                    <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                    <p>Оборот структуры: <span>1 линия {'>'} 2500 QU</span></p>
                                </div>
                                <div class="status-item">
                                    <div class="icon">
                                        <img src="img/status-icon3.svg" alt="" />
                                    </div>
                                    <div class="stars">
                                        <img src="img/stars4.svg" alt="" />
                                    </div>
                                    <h4>Вице директор</h4>
                                    <div class="bonus">
                                        <h5>Бонус:</h5>
                                        <div class="bonus-wrap">
                                            <p>8<span>%</span></p>
                                            <p>от личных продаж</p>
                                        </div>
                                    </div>
                                    <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                    <p>Оборот структуры: <span>1-2 линии {'>'} 20 000 QU</span></p>
                                </div>
                                <div class="status-item">
                                    <div class="icon">
                                        <img src="img/status-icon4.svg" alt="" />
                                    </div>
                                    <div class="stars">
                                        <img src="img/stars5.svg" alt="" />
                                    </div>
                                    <h4>Кандидат директор</h4>
                                    <div class="bonus">
                                        <h5>Бонус:</h5>
                                        <div class="bonus-wrap">
                                            <p>9<span>%</span></p>
                                            <p>от личных продаж</p>
                                        </div>
                                    </div>
                                    <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                    <p>Оборот структуры: <span>1-3 линии {'>'} 50 000 QU</span></p>
                                </div>
                                <div class="status-item">
                                    <div class="icon">
                                        <img src="img/status-icon5.svg" alt="" />
                                    </div>
                                    <div class="stars">
                                        <img src="img/stars6.svg" alt="" />
                                    </div>
                                    <h4>Директор</h4>
                                    <div class="bonus">
                                        <h5>Бонус:</h5>
                                        <div class="bonus-wrap">
                                            <p>10<span>%</span></p>
                                            <p>от личных продаж</p>
                                        </div>
                                    </div>
                                    <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                    <p>Оборот структуры: <span>1-4 линии {'>'} 200 000 QU</span></p>
                                </div>
                                <div class="status-item">
                                    <div class="icon">
                                        <img src="img/status-icon6.svg" alt="" />
                                    </div>
                                    <div class="stars">
                                        <img src="img/stars7.svg" alt="" />
                                    </div>
                                    <h4>Серебряный директор</h4>
                                    <div class="bonus">
                                        <h5>Бонус:</h5>
                                        <div class="bonus-wrap">
                                            <p>11<span>%</span></p>
                                            <p>от личных продаж</p>
                                        </div>
                                    </div>
                                    <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                    <p>Оборот структуры: <span>1-5 линии {'>'} 500 000 QU</span></p>
                                </div>
                                <div class="status-item">
                                    <div class="icon">
                                        <img src="img/status-icon7.svg" alt="" />
                                    </div>
                                    <div class="stars">
                                        <img src="img/stars8.svg" alt="" />
                                    </div>
                                    <h4>Золотой директор</h4>
                                    <div class="bonus">
                                        <h5>Бонус:</h5>
                                        <div class="bonus-wrap">
                                            <p>12<span>%</span></p>
                                            <p>от личных продаж</p>
                                        </div>
                                    </div>
                                    <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                    <p>Оборот структуры: <span>1-6 линии {'>'} 1 000 000 QU</span></p>
                                </div>
                                <div class="status-item">
                                    <div class="icon">
                                        <img src="img/status-icon8.svg" alt="" />
                                    </div>
                                    <div class="stars">
                                        <img src="img/stars9.svg" alt="" />
                                    </div>
                                    <h4>Брильянтовый директор</h4>
                                    <div class="bonus">
                                        <h5>Бонус:</h5>
                                        <div class="bonus-wrap">
                                            <p>13<span>%</span></p>
                                            <p>от личных продаж</p>
                                        </div>
                                    </div>
                                    <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                    <p>Оборот структуры: <span>1-7 линии {'>'} 3 000 000 QU</span></p>
                                </div>
                                <div class="status-item">
                                    <div class="icon">
                                        <img src="img/status-icon9.svg" alt="" />
                                    </div>
                                    <div class="stars">
                                        <img src="img/stars10.svg" alt="" />
                                    </div>
                                    <h4>Региональный партнер</h4>
                                    <div class="bonus">
                                        <h5>Бонус:</h5>
                                        <div class="bonus-wrap">
                                            <p>14<span>%</span></p>
                                            <p>от личных продаж</p>
                                        </div>
                                    </div>
                                    <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                    <p>Оборот структуры: <span>1-8 линии {'>'} 10 000 000 QU</span></p>
                                </div>
                                <div class="status-item">
                                    <div class="icon">
                                        <img src="img/status-icon10.svg" alt="" />
                                    </div>
                                    <div class="stars">
                                        <img src="img/stars11.svg" alt="" />
                                    </div>
                                    <h4>Международный партнер</h4>
                                    <div class="bonus">
                                        <h5>Бонус:</h5>
                                        <div class="bonus-wrap">
                                            <p>15<span>%</span></p>
                                            <p>от личных продаж</p>
                                        </div>
                                    </div>
                                    <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                    <p>Оборот структуры: <span>1-9 линии {'>'} 30 000 000 QU</span></p>
                                </div>
                            </div>

                            <div class="after"></div>
                            <img src="img/referal-next.svg" alt="" class="referal-next" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="plans-section">
                <div class="wrapper">
                    <h2>Тарифные планы</h2>

                    <div class="plans-big-block">
                        <div class="plans-top">
                            <div class="left">
                                <img src="img/plans-left1.svg" alt="" />
                                <img src="img/plans-left2.svg" alt="" />
                                <p>Junior Program</p>
                            </div>
                            <div class="top">
                                <a href="#" class="active">Junior Program</a>
                                <a href="#">Middle Program</a>
                                <a href="#">Senior Program</a>
                            </div>
                            <div class="right">
                                <div class="right-item active">
                                    <div class="percent">
                                        <p>0.86 <span>%</span></p>
                                        <p>в день</p>
                                    </div>
                                    <p>Сумма депозита: <span>от 99.00 QU</span></p>
                                    <p>Срок: <span>232 дня</span></p>
                                </div>
                                <div class="right-item">
                                    <div class="percent">
                                        <p>0.96 <span>%</span></p>
                                        <p>в день</p>
                                    </div>
                                    <p>Сумма депозита: <span>от 199.00 QU</span></p>
                                    <p>Срок: <span>242 дня</span></p>
                                </div>
                                <div class="right-item">
                                    <div class="percent">
                                        <p>1.06 <span>%</span></p>
                                        <p>в день</p>
                                    </div>
                                    <p>Сумма депозита: <span>от 299.00 QU</span></p>
                                    <p>Срок: <span>252 дня</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="plans-bottom">
                            <div class="plans-bottom-left">
                                <div class="plans-bottom-item">
                                    <h5>Сумма инвестривания в QU</h5>
                                    <input type="text" naame="qu" value="10000" />
                                    <input type="range" min="0" max="100000" step="1000" value="10000" />
                                    <div class="max">100 000</div>
                                </div>
                                <div class="plans-bottom-item">
                                    <h5>Сумма в BTC</h5>
                                    <input type="text" naame="btc" value="0.5" />
                                    <input type="range" min="0" max="4.232" step="0.01" value="1" />
                                    <div class="max">4.232</div>
                                </div>
                                <div class="plans-bottom-button">
                                    <a href="#" class="button">Инвестировать</a>
                                </div>
                            </div>
                            <div class="plans-bottom-right">
                                <div class="button">
                                    <a href="#" class="button">Инвестировать</a>
                                </div>
                                <div class="text">
                                    <div class="sum">
                                        <h5>Итоговая сумма:</h5>
                                        <p>329.23 <span>QU</span></p>
                                    </div>
                                    <div class="percents">
                                        <h5>В процентах:</h5>
                                        <p>204.13 %</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="logos-section">
                <div class="wrapper">
                    <div class="logos-wrap">
                        <div class="logos-item">
                            <img src="img/logos1.png" alt="" />
                        </div>
                        <div class="logos-item">
                            <img src="img/logos2.png" alt="" />
                        </div>
                        <div class="logos-item">
                            <img src="img/logos3.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Investor.Layout = Landing;

export default Investor;
