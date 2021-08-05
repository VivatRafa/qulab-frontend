import React from 'react'
import Landing from 'layouts/landing';
import Image from 'next/image';
import BaseRange from 'components/base/BaseRange';
import BaseDepositeCalculator from 'components/base/BaseDepositeCalculator';
import BaseSlider from 'components/base/BaseSlider';
import { statuses } from '../../config/statuses';

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
                            <BaseSlider className="referal-slider">
                                {statuses.map(({ name, bonus, amount, referral }, i) => (
                                <div className="status-item" key={name}>
                                    <div className="icon">
                                        <Image width="40" height="40" src={`/static/img/status-icon${i + 1}.svg`} alt="" />
                                    </div>
                                    <div className="stars">
                                        <Image width="302" height="24" src={`/static/img/stars${i + 1}.svg`} alt="" />
                                    </div>
                                    <h4>{name}</h4>
                                    <div className="bonus">
                                        <h5>Бонус:</h5>
                                        <div className="bonus-wrap">
                                            <p>{bonus}<span>%</span></p>
                                            <p>от личных продаж</p>
                                        </div>
                                    </div>
                                    <p>Личный оборот (вклад): <span>{'>'} ${amount} QU</span></p>
                                    <p>Оборот структуры: <span>{referral}</span></p>
                                </div>
                                ))}
                            </BaseSlider>
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
Investor.needAuth = false;

Investor.PageName = 'Investor';

export default Investor;
