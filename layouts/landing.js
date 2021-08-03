import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from './header';
import Footer from './footer';
import router, { useRouter } from 'next/router';
import Image from 'next/image';

import headerImg from '../public/static/img/header-img.svg';
import headerAboutImg from '../public/static/img/header-about-img.svg';
import Link from 'next/link';
import { getAccessToken } from '../utils/auth';

const Landing = ({ children }) => {
    const router = useRouter();
    const isHomePage = router.asPath === '/';
    const isAboutPage = router.asPath === '/about';
    const isProgramPage = router.asPath === '/program';
    const isInvestorPage = router.asPath === '/investor';
    const isReviewPage = router.asPath === '/reviews';
    const isFaqPage = router.asPath === '/faq';

    const headerClass = `${router.asPath.replace('/', '')}-header`;
    return (
        <>
            <ul className="mob-menu">
                <li><a href="about.html">О нас</a></li>
                <li><a href="investoru.html">Инвестору</a></li>
                <li><a href="program.html">Премиальная программа</a></li>
                <li><a href="reviews.html">Отзывы</a></li>
                <li><a href="faq.html">FAQ</a></li>
            </ul>
    
            <div className="bg-block" />
            <header className={headerClass}>
                <Header isLanding />

                {isHomePage && (
                    <div className="wrapper">
                        <div className="header-block">
                            <div className="header-text">
                                <h1>Пассивный доход вместе с QuLab</h1>
                                <p>Зарегистрируйтесь и получите доступ <br/>ко всем возможностям Клуба!</p>
                
                                <div className="header-buttons">
                                    <Link href={`/cabinet/${getAccessToken() ? 'deposite' : 'registration'}`}>
                                        <a className="button">Инвестировать</a>
                                    </Link>
                                    <a href="#calculator" className="button1"><span>Рассчитать прибыль</span></a>
                                </div>
                            </div>
                            <div className="header-img">
                                <Image src={headerImg} width="538" height="468" />
                            </div>
                        </div>
                    </div>
                )}

                {isAboutPage && (
                    <div className="wrapper">
                        <div className="header-about-block">
                            <h1>О компании QuLab?</h1>
                            <div className="header-about-block-wrap">
                                <div className="left">
                                    <div className="header-about-img">
                                        <Image src={headerAboutImg} width="594" height="328" />
                                    </div>
                                    <div className="header-about-button">
                                        <a href="#" className="button"><span>Присоединиться</span></a>
                                    </div>
                                </div>
                                <div className="right">
                                    <h3>Финансовый клуб с большими возможностями</h3>
                                    <p>Мультиплатформа QuLab — инновационная площадка для инвесторов, которые хотят построить свой пассивный доход и используя для этого наиболее перспективные компании и направления. Преимущество в максимальной прозрачности платформы и полной конфиденциальности клиента.</p>
                                    <p>Нашей задачей остаётся обеспечение высокого уровня комфорта и сервиса для инвесторов и партнёров. В нашей работе неотъемлемой частью остаётся полная анонимность и приватность. Мы предлагаем вам удобную регистрацию на платформе, быстрое открытие депозита который будет генерировать прибыль только в проверенных инвестиционных секторах, а так же быстрый вывод на свой счёт. Наша техническая поддержка работает для вас круглосуточно, без выходных.</p>
                                </div>
                            </div>			
                        </div>
                    </div>
                )}

                {isProgramPage && (
                    <div className="wrapper">
                        <div className="header-program-block">
                            <h1>Статусная система</h1>
                            <div className="header-program-wrap">
                                <div className="img">
                                    <Image src="/static/img/header-program.svg" alt="" width="495" height="380" />
                                </div>
                                <div className="text">
                                    <p>На платформе QuLab действует премиальная программа для всех наших инвесторов. Благодаря нашей платформе вы сможете собрать собственную инвестиционную команду и начать зарабатывать в несколько раз больше. Для удобства пользователей мы внедрили программу статусов. Всего существует 11 статусов работы, каждый из которых дает определенные привилегии. Приглашайте ваших партнеров, чтобы вместе получать увеличенные проценты.</p>
                                    <p>Воспользуйтесь нашими и собственными полученными знаниями и помогите новым инвесторам освоиться, чтобы те помогли вам развиваться ещё раз быстрее. Получение каждого статуса гарантирует привилегии, подарки, бонусы и увеличение дохода.</p>

                                    <div className="header-program-button">
                                        <a href="#" className="button"><span>Посмотреть презентацию</span></a>
                                    </div>
                                </div>
                            </div>			
                        </div>
                    </div>
                )}

                {isInvestorPage && (
                    	<div className="wrapper">
                        <div className="header-program-block">
                            <h1>Как начать инвестировать</h1>
                            <div className="header-program-wrap">
                                <div className="img">
                                    <Image src="/static/img/header-investoru.svg" alt="" width="487" height="344" />
                                </div>
                                <div className="text">
                                    <h3>Начать инвестировать очень просто</h3>
                                    <p>Первым делом вам нужно подать заявку на регистрацию учётной записи. После этого вы сможете пополнить баланс удобным для вас способом. Денежные средства со своего личного счёта вы можете вложить в любой доступный тарифный план представленный на платформе. Внимательно прочитайте условия и выберите наиболее оптимальные для вас. Полученную прибыль вследствие работы ваших инвестиций вы сможете вывести на выбранные вами в личном кабинете платёжные системы.</p>
                
                                    <div className="header-program-button">
                                        <a href="#" className="button"><span>Посмотреть презентацию</span></a>
                                    </div>
                                </div>
                            </div>			
                        </div>
                    </div>
                )}

                {isReviewPage && (
                    <div className="wrapper">
                        <div className="header-reviews-block">
                            <h1>Отзывы</h1>
                            <div className="header-reviews-block-wrap">
                                <div className="header-reviews-slider-wrap">
                                    <img src="img/referal-prev.svg" alt="" className="prev" />
                                    <img src="img/referal-next.svg" alt="" className="next" />
                                    <div className="before"></div>
                                    <div className="after"></div>

                                    <div className="header-reviews-slider">
                                        <div className="reviews-slider-item">
                                            <div className="title">
                                                <div className="top">
                                                    <p>22 мая 2021</p>
                                                    <p>Junior Program</p>
                                                </div>
                                                <p>Александр (aleksRud)</p>
                                            </div>
                                            <div className="text">
                                                <p>Оценка 100. Пока что начал со стартовой программы. Вложился по минимуму, но уже все радует. Выплаты выбрал ежемесячные. Чисто создал депозит, чтобы просто проверить как работает, как устроено все, и платит ли вообще кооператив. Все порадовало, пока что. Посмотрим, как и дальше будет. Но что-то мне подсказывает, что проблем с деньгами с QuLab не будет, это уж точно!</p>
                                            </div>
                                        </div>
                                        {/* <div className="reviews-slider-item">
                                            <div className="title">
                                                <div className="top">
                                                    <p>22 мая 2021</p>
                                                    <p>Junior Program</p>
                                                </div>
                                                <p>Олег (aleksRud)</p>
                                            </div>
                                            <div className="text">
                                                <p>Оценка 100. Пока что начал со стартовой программы. Вложился по минимуму, но уже все радует. Выплаты выбрал ежемесячные. Чисто создал депозит, чтобы просто проверить как работает, как устроено все, и платит ли вообще кооператив. Все порадовало, пока что. Посмотрим, как и дальше будет. Но что-то мне подсказывает, что проблем с деньгами с QuLab не будет, это уж точно!</p>
                                            </div>
                                        </div>
                                        <div className="reviews-slider-item">
                                            <div className="title">
                                                <div className="top">
                                                    <p>22 мая 2021</p>
                                                    <p>Junior Program</p>
                                                </div>
                                                <p>Андрей (aleksRud)</p>
                                            </div>
                                            <div className="text">
                                                <p>Оценка 100. Пока что начал со стартовой программы. Вложился по минимуму, но уже все радует. Выплаты выбрал ежемесячные. Чисто создал депозит, чтобы просто проверить как работает, как устроено все, и платит ли вообще кооператив. Все порадовало, пока что. Посмотрим, как и дальше будет. Но что-то мне подсказывает, что проблем с деньгами с QuLab не будет, это уж точно!</p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="header-reviews-form">
                                    <h3>Оставьте свой отзыв</h3>
                                    <form action="#">
                                        <input type="hidden" name="form-type" value="type1" />
                                        <textarea name="review" placeholder="Напишите ваши впечателения о работе компании QuLab" required></textarea>

                                        <button type="submit" className="button1">Отправить</button>
                                    </form>			
                                </div>
                            </div>			
                        </div>
                    </div>
                )}
            </header>
            {children}
            <Footer />
        </>
    )
}

export default Landing
