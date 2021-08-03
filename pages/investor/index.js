import React from 'react'
import Landing from '../../layouts/landing';
import Image from 'next/image';
import BaseRange from '../../components/base/BaseRange';
import BaseDepositeCalculator from '../../components/base/BaseDepositeCalculator';

const Investor = () => {
    return (
        <>
            <section className="referal-section">
                <div className="wrapper">
                    <h2>Тарифные планы</h2>

                    <div className="referal-wrap">
                        <div className="referal-left">
                            <p>Благодаря продуманной и прозрачной системе вы сможете построить пассивный доход на основе нашей платформы и начать зарабатывать вместе с QuLab.</p>
                        </div>
                        <div className="referal-right">
                            <div className="referal-prev">
                                <Image src="/static/img/referal-prev.svg" alt="" className="referal-prev" width="15" height="26" />
                            </div>
                            {/* <img src="img/referal-prev.svg" alt="" className="referal-prev" /> */}
                            <div className="before"></div>

                            <div className="referal-slider">
                                <div className="status-item">
                                    <div className="icon">
                                        <Image src="/static/img/status-icon1.svg" alt="" width="100" height="100" />
                                        {/* <img src="img/status-icon1.svg" alt="" /> */}
                                    </div>
                                    <div className="stars">
                                        <Image src="/static/img/stars1.svg" alt="" width="100" height="100" />
                                        {/* <img src="img/stars1.svg" alt="" /> */}
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
                                
                            </div>

                            <div className="after"></div>
                            <div className="referal-next">
                                <Image src="/static/img/referal-next.svg" alt="" className="referal-next" width="15" height="26" />
                            </div>
                            {/* <img src="img/referal-next.svg" alt="" className="referal-next" /> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="plans-section">
                <div className="wrapper">
                    <h2>Тарифные планы</h2>

                    <BaseDepositeCalculator />
                </div>
            </section>
        </>
    )
}

Investor.Layout = Landing;

export default Investor;
