import React from 'react'
import Landing from '../../layouts/landing';
import Image from 'next/image';

import about from '../../public/static/img/about-how-img.svg'
import advan1 from '../../public/static/img/advan1.svg'
import advan2 from '../../public/static/img/advan2.svg'
import advan3 from '../../public/static/img/advan3.svg'
import advan4 from '../../public/static/img/advan4.svg'
import docs1 from '../../public/static/img/docs1.jpg'
import docs2 from '../../public/static/img/docs2.jpg'
import docs3 from '../../public/static/img/docs3.jpg'

const About = () => {
    return (
        <>
            <section className="about-how-section">
                <div className="wrapper">
                    <h2>Как развивается QuLab</h2>

                    <div className="about-how-wrap">
                        <div className="text">
                            <p>QuLab — наиболее перспективная платформа для инвесторов, которые хотят в комфортных условиях построить свой стабильный пассивный доход.</p>
                            <p>Нашей задачей не является создание инноваций — мы внедряем уже проверенные инновации, а так же использование негосударственного регулирование инвестиционных секторов позволяет создать условия для людей, которые заинтересованы в получении прибыли на постоянной основе. Мы высоко ценим доверие наших клиентов и обеспечивает полную анонимность во время работы.</p>
                        </div>
                        <div className="img">
                            <Image src={about} width="594" height="328" /> 
                            {/* <img src="img/about-how-img.svg" alt="" /> */}
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
                                <Image src={advan1} width="80" height="85" /> 
                                {/* <img src="img/advan1.svg" alt="" /> */}
                            </div>
                            <div className="text">
                                <h3>Почему QuLab</h3>
                                <p>Высокие стандарты к инвестициям. Международная работы платформы высококвалифицированная команда работающая совместно с искусственным интеллектом. Внедрение инноваций и собственных разработок.</p>
                            </div>
                        </div>
                        <div className="advan-item">
                            <div className="img">
                                <Image src={advan2} width="86" height="83" /> 
                                {/* <img src="img/advan2.svg" alt="" /> */}
                            </div>
                            <div className="text">
                                <h3>Безопасность</h3>
                                <p>На платформе используются самые передовые технологии для защиты данных. Собственная система негосударственного регулирования рынка инвестиций дает возможность доверять нам свои вложения.</p>
                            </div>
                        </div>
                        <div className="advan-item">
                            <div className="img">
                                <Image src={advan3} width="87" height="87" /> 
                                {/* <img src="img/advan3.svg" alt="" /> */}
                            </div>
                            <div className="text">
                                <h3>Стабильность</h3>
                                <p>Тщательный контроль роботы платформы и сделок совершаемых на ней с помощью искусственного интеллекта и физического мониторинга, даёт возможность обеспечивать стабильную работу и доход</p>
                            </div>
                        </div>
                        <div className="advan-item">
                            <div className="img">
                                <Image src={advan4} width="81" height="81" />
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
                            <Image src="/static/img/docs1.jpg" width="232" height="388" />
                            {/* <img src="img/docs1.jpg" alt="" /> */}
                        </div>
                        <div className="docs-item">
                            <Image src="/static/img/docs2.jpg" width="482" height="367" /> 
                            {/* <img src="img/docs2.jpg" alt="" /> */}
                        </div>
                        <div className="docs-item">
                            <Image src="/static/img/docs3.jpg" width="395" height="282" /> 
                            {/* <img src="img/docs3.jpg" alt="" /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

About.Layout = Landing;

export default About;
