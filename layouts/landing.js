import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from './header';
import Footer from './footer';
import router, { useRouter } from 'next/router';
import Image from 'next/image';
import BaseSlider from 'components/base/BaseSlider';

import Link from 'next/link';
import { getAccessToken } from '../utils/auth';
import { reviews } from '../config/reviews';
import { GlobalContext } from 'contexts';
import useOnclickOutside from 'react-cool-onclickoutside';

const Landing = ({ children }) => {
    const [state, dispatch] = React.useContext(GlobalContext);
    const { isMenuOpen } = state;
    const router = useRouter();
    // костыль
    const isHomePage = router.asPath === '/' || router.asPath === '/#calculator';
    const isAboutPage = router.asPath.includes('/about');
    const isProgramPage = router.asPath.includes('/program');
    const isInvestorPage = router.asPath.includes('/investor');
    const isReviewPage = router.asPath.includes('/reviews');

    const headerClass = `${router.asPath.replace('/', '')}-header`;
    return (
        <>
            <ul className={`mob-menu ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <a onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/about');
                    }}>О нас</a>
                </li>
                <li>
                    <a onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/investor');
                    }}>Инвестору</a>
                </li>
                <li>
                    <a onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/program');
                    }}>Премиальная программа</a>
                </li>
                <li>
                    <a onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/reviews');
                    }}>Отзывы</a>
                </li>
                <li>
                    <a onClick={() => {
                        dispatch({ type: 'toggleMenu', payload: false })
                        router.push('/faq');
                    }}>FAQ</a>
                </li>
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
                                <Image src="/static/img/header-img.svg" width="538" height="468" />
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
                                        <Image src="/static/img/header-about-img.svg" width="594" height="328" />
                                    </div>
                                    <div className="header-about-button">
                                        <a className="button"><span>Присоединиться</span></a>
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
                                        <a className="button"><span>Посмотреть презентацию</span></a>
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
                                    <div className="before"></div>
                                    <div className="after"></div>

                                    <BaseSlider className="header-reviews-slider">
                                        {reviews.map(({ date, name, text, program }, i) => (
                                            <div className="reviews-slider-item" key={i}>
                                                <div className="title">
                                                    <div className="top">
                                                        <p>{date}</p>
                                                        <p>{program} Program</p>
                                                    </div>
                                                    <p>{name}</p>
                                                </div>
                                                <div className="text">
                                                    <p>{text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </BaseSlider>
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
