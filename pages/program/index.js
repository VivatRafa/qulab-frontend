import React from 'react'
import Landing from '../../layouts/landing';
import Image from 'next/image';

const Program = () => {
    return (
        <>
            <section className="status-section">
                <div className="wrapper">
                    <h2>Статусы</h2>

                    <div className="status-big-wrap">
                        <div className="status-prev">
                            <Image src="/static/img/referal-prev.svg" alt="" className="status-prev" width="40" height="40" />
                        </div>

                        <div className="status-wrap program">
                            <div className="status-item">
                                <div className="icon">
                                    <Image src="/static/img/status-icon1.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="stars">
                                    <Image src="/static/img/stars1.svg" alt="" width="300" height="23" />
                                </div>
                                <h4>Консультант</h4>
                                <div className="bonus">
                                    <h5>Бонус:</h5>
                                    <div className="bonus-wrap">
                                        <p>5<span>%</span></p>
                                        <p>от личных продаж</p>
                                    </div>
                                </div>
                                <p>Личный оборот (вклад): <span>{'>'} 500 QU</span></p>
                                <p>Оборот структуры: <span>X</span></p>
                            </div>
                            <div className="status-item">
                                <div className="icon">
                                    <Image src="/static/img/status-icon1.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="stars">
                                    <Image src="/static/img/stars2.svg" alt="" width="300" height="23" />
                                </div>
                                <h4>Старший консультант</h4>
                                <div className="bonus">
                                    <h5>Бонус:</h5>
                                    <div className="bonus-wrap">
                                        <p>6<span>%</span></p>
                                        <p>от личных продаж</p>
                                    </div>
                                </div>
                                <p>Личный оборот (вклад): <span>{'>'} 1000 QU</span></p>
                                <p>Оборот структуры: <span>X</span></p>
                            </div>
                            <div className="status-item">
                                <div className="icon">
                                    <Image src="/static/img/status-icon2.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="stars">
                                    <Image src="/static/img/stars3.svg" alt="" width="300" height="23" />
                                </div>
                                <h4>Лидер</h4>
                                <div className="bonus">
                                    <h5>Бонус:</h5>
                                    <div className="bonus-wrap">
                                        <p>7<span>%</span></p>
                                        <p>от личных продаж</p>
                                    </div>
                                </div>
                                <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                <p>Оборот структуры: <span>1 линия {'>'} 2500 QU</span></p>
                            </div>
                            <div className="status-item">
                                <div className="icon">
                                    <Image src="/static/img/status-icon3.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="stars">
                                    <Image src="/static/img/stars4.svg" alt="" width="300" height="23" />
                                </div>
                                <h4>Вице директор</h4>
                                <div className="bonus">
                                    <h5>Бонус:</h5>
                                    <div className="bonus-wrap">
                                        <p>8<span>%</span></p>
                                        <p>от личных продаж</p>
                                    </div>
                                </div>
                                <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                <p>Оборот структуры: <span>1-2 линии {'>'} 20 000 QU</span></p>
                            </div>
                            <div className="status-item">
                                <div className="icon">
                                    <Image src="/static/img/status-icon4.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="stars">
                                    <Image src="/static/img/stars5.svg" alt="" width="300" height="23" />
                                </div>
                                <h4>Кандидат директор</h4>
                                <div className="bonus">
                                    <h5>Бонус:</h5>
                                    <div className="bonus-wrap">
                                        <p>9<span>%</span></p>
                                        <p>от личных продаж</p>
                                    </div>
                                </div>
                                <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                <p>Оборот структуры: <span>1-3 линии {'>'} 50 000 QU</span></p>
                            </div>
                            <div className="status-item">
                                <div className="icon">
                                    <Image src="/static/img/status-icon5.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="stars">
                                    <Image src="/static/img/stars6.svg" alt="" width="300" height="23" />
                                </div>
                                <h4>Директор</h4>
                                <div className="bonus">
                                    <h5>Бонус:</h5>
                                    <div className="bonus-wrap">
                                        <p>10<span>%</span></p>
                                        <p>от личных продаж</p>
                                    </div>
                                </div>
                                <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                <p>Оборот структуры: <span>1-4 линии {'>'} 200 000 QU</span></p>
                            </div>
                            <div className="status-item">
                                <div className="icon">
                                    <Image src="/static/img/status-icon6.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="stars">
                                    <Image src="/static/img/stars7.svg" alt="" width="300" height="23" />
                                </div>
                                <h4>Серебряный директор</h4>
                                <div className="bonus">
                                    <h5>Бонус:</h5>
                                    <div className="bonus-wrap">
                                        <p>11<span>%</span></p>
                                        <p>от личных продаж</p>
                                    </div>
                                </div>
                                <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                <p>Оборот структуры: <span>1-5 линии {'>'} 500 000 QU</span></p>
                            </div>
                            <div className="status-item">
                                <div className="icon">
                                    <Image src="/static/img/status-icon7.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="stars">
                                    <Image src="/static/img/stars8.svg" alt="" width="300" height="23" />
                                </div>
                                <h4>Золотой директор</h4>
                                <div className="bonus">
                                    <h5>Бонус:</h5>
                                    <div className="bonus-wrap">
                                        <p>12<span>%</span></p>
                                        <p>от личных продаж</p>
                                    </div>
                                </div>
                                <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                <p>Оборот структуры: <span>1-6 линии {'>'} 1 000 000 QU</span></p>
                            </div>
                            <div className="status-item">
                                <div className="icon">
                                    <Image src="/static/img/status-icon8.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="stars">
                                    <Image src="/static/img/stars9.svg" alt="" width="300" height="23" />
                                </div>
                                <h4>Брильянтовый директор</h4>
                                <div className="bonus">
                                    <h5>Бонус:</h5>
                                    <div className="bonus-wrap">
                                        <p>13<span>%</span></p>
                                        <p>от личных продаж</p>
                                    </div>
                                </div>
                                <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                <p>Оборот структуры: <span>1-7 линии {'>'} 3 000 000 QU</span></p>
                            </div>
                            <div className="status-item">
                                <div className="icon">
                                    <Image src="/static/img/status-icon9.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="stars">
                                    <Image src="/static/img/stars10.svg" alt="" width="300" height="23" />
                                </div>
                                <h4>Региональный партнер</h4>
                                <div className="bonus">
                                    <h5>Бонус:</h5>
                                    <div className="bonus-wrap">
                                        <p>14<span>%</span></p>
                                        <p>от личных продаж</p>
                                    </div>
                                </div>
                                <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                <p>Оборот структуры: <span>1-8 линии {'>'} 10 000 000 QU</span></p>
                            </div>
                            <div className="status-item">
                                <div className="icon">
                                    <Image src="/static/img/status-icon10.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="stars">
                                    <Image src="/static/img/stars11.svg" alt="" width="300" height="23" />
                                </div>
                                <h4>Международный партнер</h4>
                                <div className="bonus">
                                    <h5>Бонус:</h5>
                                    <div className="bonus-wrap">
                                        <p>15<span>%</span></p>
                                        <p>от личных продаж</p>
                                    </div>
                                </div>
                                <p>Личный оборот (вклад): <span>{'>'} 5000 QU</span></p>
                                <p>Оборот структуры: <span>1-9 линии {'>'} 30 000 000 QU</span></p>
                            </div>
                        </div>

                        <div className="status-next">
                            <Image src="/static/img/referal-next.svg" alt="" className="status-next" width="40" height="40" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="program-how-section">
                <div className="wrapper">
                    <div className="program-how-wrap">
                        <div className="program-how-item">
                            <h2>Бонусный оборот</h2>

                            <div className="program-how-table">
                                <div className="th">
                                    <div className="td">Линия</div>
                                    <div className="td">Идет в зачет</div>
                                </div>
                                <div className="tr">
                                    <div className="td">1</div>
                                    <div className="td">50%</div>
                                </div>
                                <div className="tr">
                                    <div className="td">2</div>
                                    <div className="td">40%</div>
                                </div>
                                <div className="tr">
                                    <div className="td">3</div>
                                    <div className="td">30%</div>
                                </div>
                                <div className="tr">
                                    <div className="td">4</div>
                                    <div className="td">25%</div>
                                </div>
                                <div className="tr">
                                    <div className="td">5</div>
                                    <div className="td">20%</div>
                                </div>
                                <div className="tr">
                                    <div className="td">6</div>
                                    <div className="td">10%</div>
                                </div>
                                <div className="tr">
                                    <div className="td">7</div>
                                    <div className="td">10%</div>
                                </div>
                                <div className="tr">
                                    <div className="td">8</div>
                                    <div className="td">5%</div>
                                </div>
                                <div className="tr">
                                    <div className="td">9</div>
                                    <div className="td">3%</div>
                                </div>
                                <div className="tr">
                                    <div className="td">10</div>
                                    <div className="td">1%</div>
                                </div>
                            </div>
                        </div>
                        <div className="program-how-item">
                            <h2>Как это работает?</h2>

                            <div className="program-how-right">
                                <div className="img">
                                    <Image src="/static/img/program-how-right1.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="text">
                                    <h4>Партнер Дмитрий</h4>
                                    <p>Инвестировал: 20 000 QU</p>
                                </div>
                            </div>
                            <div className="program-how-right">
                                <div className="img">
                                    <Image src="/static/img/program-how-right2.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="text">
                                    <h4>Партнер Мария</h4>
                                    <p>Инвестировала: 30 000 QU</p>
                                </div>
                            </div>
                            <div className="program-how-right">
                                <div className="img">
                                    <Image src="/static/img/program-how-right1.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="text">
                                    <h4>Партнер Александр</h4>
                                    <p>Инвестировал: 40 000 QU</p>
                                </div>
                            </div>
                            <div className="program-how-right">
                                <div className="img">
                                    <Image src="/static/img/program-how-right3.svg" alt="" width="40" height="40" />
                                </div>
                                <div className="text">
                                    <h4>Николай</h4>
                                    <p>Инвестировала: 50 000 QU</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="program-text-section">
                <div className="wrapper">
                    <h2>Подсчет бонусного оборота с партнеров</h2>

                    <div className="program-text-wrap">
                        <div className="program-text-item">
                            <p>Партнёры платформы QuLab получают возможность стать предпринимателями, чтобы создать бизнес-среду вместе с нашей компанией. Всего существует 3 вида бонусов, среди которых есть статусы, премии и реферальная программа. Расскажем о каждом подробнее. Реферальная программа работает по стандартному алгоритму. Вы приглашайте партнёров, которые будут вашими рефералами. При этом открывается линия реферала, количество которых зависит от инвестиционного капитала. Чем больше вы инвестируете, тем быстрее сможете достичь новой линии.</p>
                        </div>
                        <div className="program-text-item">
                            <p>Премия рассчитывается в зависимости от выполнения плана. Подробные условия можно увидеть на каждом этапе премии. Всего существует 11 вознаграждений, которые может получить инвестор. Есть два главных условия: ваши инвестиции  и приглашения партнёров.</p>
                            <p>В качестве вознаграждения на баланс поступают средства: от 40 до 200 000 QU. О статусах можно подробнее прочитать в разделе премиальной программы.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="program-premia-section">
                <div className="wrapper">
                    <h2>Премии с накоплений</h2>


                    <div className="premia-table-wrap">
                        <div className="premia-table">
                        <div className="tr">
                            <div className="td">Линия</div>
                            <div className="td">Личные инвестиции</div>
                            <div className="td">Инвестиции от 1 линии рефералов</div>
                            <div className="td">Оборот инвестиций</div>
                            <div className="td">Вознаграждения на баланс</div>
                        </div>
                        <div className="tr">
                            <div className="td">1</div>
                            <div className="td">от 100 QU</div>
                            <div className="td">от 1000 QU</div>
                            <div className="td">X</div>
                            <div className="td">100 QU</div>
                        </div>
                        <div className="tr">
                            <div className="td">2</div>
                            <div className="td">от 300 QU</div>
                            <div className="td">от 3000 QU</div>
                            <div className="td">X</div>
                            <div className="td">150 QU</div>
                        </div>
                        <div className="tr">
                            <div className="td">3</div>
                            <div className="td">от 1000 QU</div>
                            <div className="td">от 5000 QU</div>
                            <div className="td">1-2 линии {'>'} 20 000 QU</div>
                            <div className="td">500 QU</div>
                        </div>
                        <div className="tr">
                            <div className="td">4</div>
                            <div className="td">от 5000 QU</div>
                            <div className="td">от 5000 QU</div>
                            <div className="td">1-3 линии {'>'} 50 000 QU</div>
                            <div className="td">1500 QU</div>
                        </div>
                        <div className="tr">
                            <div className="td">5</div>
                            <div className="td">от 10 000 QU</div>
                            <div className="td">от 5000 QU</div>
                            <div className="td">1-4 линии {'>'} 200 000 QU</div>
                            <div className="td">5000 QU</div>
                        </div>
                        <div className="tr">
                            <div className="td">6</div>
                            <div className="td">от 25 000 QU</div>
                            <div className="td">от 6000 QU</div>
                            <div className="td">1-5 линии {'>'} 500 000 QU</div>
                            <div className="td">13 000 QU</div>
                        </div>
                        <div className="tr">
                            <div className="td">7</div>
                            <div className="td">от 50 000 QU</div>
                            <div className="td">от 7000 QU</div>
                            <div className="td">1-6 линии {'>'} 1 000 000 QU</div>
                            <div className="td">30 000 QU</div>
                        </div>
                        <div className="tr">
                            <div className="td">8</div>
                            <div className="td">от 100 000 QU</div>
                            <div className="td">от 8000 QU</div>
                            <div className="td">1-7 линии {'>'} 3 000 000 QU</div>
                            <div className="td">60 000 QU</div>
                        </div>
                        <div className="tr">
                            <div className="td">9</div>
                            <div className="td">от 150 000 QU</div>
                            <div className="td">от 10 000 QU</div>
                            <div className="td">1-8 линии {'>'} 10 000 000 QU</div>
                            <div className="td">110 000 QU</div>
                        </div>
                        <div className="tr">
                            <div className="td">10</div>
                            <div className="td">от 250 000 QU</div>
                            <div className="td">от 12 000 QU</div>
                            <div className="td">1-9 линии {'>'} 30 000 000 QU</div>
                            <div className="td">165 000 QU</div>
                        </div>
                        <div className="tr">
                            <div className="td">11</div>
                            <div className="td">от 300 000 QU</div>
                            <div className="td">от 15 000 QU</div>
                            <div className="td">1-10 линии {'>'} 100 000 000 QU</div>
                            <div className="td">245 000 QU</div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="program-text-section program-text-how">
                <div className="wrapper">
                    <h2>Как это работает?</h2>

                    <div className="program-text-wrap">
                        <div className="program-text-item">
                            <p>Вся наша программа лояльности настроена на умножение прибыли наших инвесторов. Благодаря этому вы сможете зарабатывать больше и помочь своим партнёрам построить собственный пассивный доход. Достаточно соблюдать условия для получения следующего статуса, премии или линии реферальной программы.</p>
                        </div>
                        <div className="program-text-item">
                            <p>Предлагаем прямо сейчас пригласить партнёров в закрытый инвестиционный клуб QuLab. Нашей выгодой является увеличение общего инвестиционного капитала QuLab. Это позволяет нам занять большее количество инвестиционных секторов и зарабатывать на каждой отдельной позиции.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="referral" className="program-text-section">
                <div className="wrapper">
                    <h2>Реферальная программа</h2>

                    <div className="program-text-wrap">
                        <div className="program-text-item">
                            <p>Активный доход и его уровень не зависит от внешних условий. Компания разработала Реферальную программу, используя которую, каждый пользователь получает полный комплекс инструментов для достижения поставленных целей. Всего существует 11 линий реферальной системы, поэтому даже один приглашенный партнер сможет увеличить ваш доход.</p>
                        </div>
                        <div className="program-text-item">
                            <p>Система дает возможность даже инвесторам с небольшим капиталом заработать больше и стать на шаг ближе к поставленной цели. Предлагайте наши инвестиционные продукты исключительно тем людям, которые заинтересованы в построении пассивного дохода на инвестициях. С нашей стороны мы гарантируем своевременную поддержку и помощь. Будь в числе лучших уже сейчас! Начинай сотрудничество с нами и выходи за рамки обыденного вместе с лучшей командой QuLab!</p>
                        </div>
                    </div>

                    <div className="referal-table-wrap">
                        <div className="referal-table">
                        <div className="tr">
                            <div className="td">Уровень</div>
                            <div className="td">Личные инвестиции</div>
                            <div className="td">Привлеченные инвестиции</div>
                            <div className="td">Реферальный бонус</div>
                        </div>
                        <div className="top">
                            <div className="tr">
                                <div className="td">1</div>
                                <div className="td">от 100 QU до 490 QU</div>
                                <div className="td"></div>
                                <div className="td"></div>
                            </div>
                            <div className="tr">
                                <div className="td"></div>
                                <div className="td"></div>
                                <div className="td">от 100 QU до 190 QU</div>
                                <div className="td">2%</div>
                            </div>
                            <div className="tr">
                                <div className="td"></div>
                                <div className="td"></div>
                                <div className="td">от 200 QU до 490 QU</div>
                                <div className="td">2.25%</div>
                            </div>
                            <div className="tr">
                                <div className="td"></div>
                                <div className="td"></div>
                                <div className="td">от 500 QU до 990 QU</div>
                                <div className="td">2.5%</div>
                            </div>
                            <div className="tr">
                                <div className="td"></div>
                                <div className="td"></div>
                                <div className="td">от 1000 QU до 2490 QU</div>
                                <div className="td">2.75%</div>
                            </div>
                            <div className="tr">
                                <div className="td"></div>
                                <div className="td"></div>
                                <div className="td">от 2500 QU до 4990 QU</div>
                                <div className="td">3%</div>
                            </div>
                            <div className="tr">
                                <div className="td"></div>
                                <div className="td"></div>
                                <div className="td">от 5000 QU до 9990 QU</div>
                                <div className="td">3.5%</div>
                            </div>
                            <div className="tr">
                                <div className="td"></div>
                                <div className="td"></div>
                                <div className="td">от 100 00 QU до 19 000 QU</div>
                                <div className="td">4%</div>
                            </div>
                            <div className="tr">
                                <div className="td"></div>
                                <div className="td"></div>
                                <div className="td">от 20 000 QU до 39 900 QU</div>
                                <div className="td">4.5%</div>
                            </div>
                            <div className="tr">
                                <div className="td"></div>
                                <div className="td"></div>
                                <div className="td">от 40 000 QU</div>
                                <div className="td">5%</div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="tr">
                                <div className="td">2</div>
                                <div className="td">от 500 QU до 990 QU</div>
                                <div className="td"></div>
                                <div className="td">1%</div>
                            </div>
                            <div className="tr">
                                <div className="td">3</div>
                                <div className="td">от 1000 QU до 3990 QU</div>
                                <div className="td"></div>
                                <div className="td">0.7%</div>
                            </div>
                            <div className="tr">
                                <div className="td">4</div>
                                <div className="td">от 4000 QU до 9990 QU</div>
                                <div className="td"></div>
                                <div className="td">0.5%</div>
                            </div>
                            <div className="tr">
                                <div className="td">5</div>
                                <div className="td">от 10 000 QU</div>
                                <div className="td"></div>
                                <div className="td">0.3%</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Program.Layout = Landing;
Program.needAuth = false;

Program.PageName = 'Program';

export default Program;
