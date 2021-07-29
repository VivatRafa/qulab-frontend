import React from 'react'
import Landing from '../../layouts/landing';

const About = () => {
    return (
        <>
            <header>
                <img src="img/header-circle.svg" alt="" className="header-circle" />
                <section className="top-line-section">
                    <div className="wrapper">
                        <div className="top-line-wrap">
                            <div className="top-left">
                                <div className="burger">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                                <a href="index.html" className="logo">
                                    <img src="img/logo.svg" alt="" />
                                    <span>QuLab</span>
                                </a>
                            </div>
                            <ul className="top-menu">
                                <li className="active"><a href="about.html"><span>О нас</span></a></li>
                                <li><a href="investoru.html"><span>Инвестору</span></a></li>
                                <li><a href="program.html"><span>Премиальная программа</span></a></li>
                                <li><a href="reviews.html"><span>Отзывы</span></a></li>
                                <li><a href="faq.html"><span>FAQ</span></a></li>
                            </ul>
                            <div className="top-buttons">
                                <a href="login.html"><span>Войти</span></a>
                                <a href="reg.html" className="button"><span>Регистрация</span></a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="wrapper">
                    <div className="header-about-block">
                        <h1>О компании QuLab?</h1>
                        <div className="header-about-block-wrap">
                            <div className="left">
                                <div className="header-about-img">
                                    <img src="img/header-about-img.svg" alt="" />
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
            </header>

            <section className="about-how-section">
                <div className="wrapper">
                    <h2>Как развивается QuLab</h2>

                    <div className="about-how-wrap">
                        <div className="text">
                            <p>QuLab — наиболее перспективная платформа для инвесторов, которые хотят в комфортных условиях построить свой стабильный пассивный доход.</p>
                            <p>Нашей задачей не является создание инноваций — мы внедряем уже проверенные инновации, а так же использование негосударственного регулирование инвестиционных секторов позволяет создать условия для людей, которые заинтересованы в получении прибыли на постоянной основе. Мы высоко ценим доверие наших клиентов и обеспечивает полную анонимность во время работы.</p>
                        </div>
                        <div className="img">
                            <img src="img/about-how-img.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="advan-section">
                <div className="wrapper">
                    <h2>Преимущества</h2>

                    <div className="advan-wrap">
                        <div className="advan-item">
                            <div className="img">
                                <img src="img/advan1.svg" alt="" />
                            </div>
                            <div className="text">
                                <h3>Почему QuLab</h3>
                                <p>Высокие стандарты к инвестициям. Международная работы платформы высококвалифицированная команда работающая совместно с искусственным интеллектом. Внедрение инноваций и собственных разработок.</p>
                            </div>
                        </div>
                        <div className="advan-item">
                            <div className="img">
                                <img src="img/advan2.svg" alt="" />
                            </div>
                            <div className="text">
                                <h3>Безопасность</h3>
                                <p>На платформе используются самые передовые технологии для защиты данных. Собственная система негосударственного регулирования рынка инвестиций дает возможность доверять нам свои вложения.</p>
                            </div>
                        </div>
                        <div className="advan-item">
                            <div className="img">
                                <img src="img/advan3.svg" alt="" />
                            </div>
                            <div className="text">
                                <h3>Стабильность</h3>
                                <p>Тщательный контроль роботы платформы и сделок совершаемых на ней с помощью искусственного интеллекта и физического мониторинга, даёт возможность обеспечивать стабильную работу и доход</p>
                            </div>
                        </div>
                        <div className="advan-item">
                            <div className="img">
                                <img src="img/advan4.svg" alt="" />
                            </div>
                            <div className="text">
                                <h3>Выгодные условия</h3>
                                <p>Удобные и надёжные способы пополнения и вывода. Быстрая обработка данных. Отсутсвие скрытых и дополнительных комиссий. Одна из лучших реферальных систем, систем поощрения и бонусов.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="docs-section">
                <div className="wrapper">
                    <h2>Документы</h2>

                    <div className="docs-wrap">
                        <div className="docs-item">
                            <img src="img/docs1.jpg" alt="" />
                        </div>
                        <div className="docs-item">
                            <img src="img/docs2.jpg" alt="" />
                        </div>
                        <div className="docs-item">
                            <img src="img/docs3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="logos-section">
                <div className="wrapper">
                    <div className="logos-wrap">
                        <div className="logos-item">
                            <img src="img/logos1.png" alt="" />
                        </div>
                        <div className="logos-item">
                            <img src="img/logos2.png" alt="" />
                        </div>
                        <div className="logos-item">
                            <img src="img/logos3.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

About.Layout = Landing;

export default About;
