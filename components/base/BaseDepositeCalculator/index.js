import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import BaseRange from 'components/base/BaseRange';
import Big from 'big.js';
import Link from 'next/link';
import { getAccessToken } from 'utils/auth';

const tariffs = {
    1: {
        id: 1,
        name: 'Junior',
        amount: {
            from: 100,
            until: 1000,
        },
        percent: 1.1,
        days: 91,
    },
    2: {
        id: 2,
        name: 'Middle',
        amount: {
            from: 1001,
            until: 5000,
        },
        percent: 1.32,
        days: 76
    },
    3: {
        id: 3,
        name: 'Senior',
        amount: {
            from: 5001,
            until: 9999999,
        },
        percent: 1.58,
        days: 64,
    }
}

const BaseDepositeCalculator = ({ withoutButton }) => {
    const [tariff, setTariff] = useState(1);
    const [invest, setInvset] = useState(100);
    const [profit, setProfit] = useState(Big(0.0024).toNumber());

    useEffect(() => {
        const dollarRate = Big(0.000024);

        const profitVal = Big(invest).times(dollarRate).toNumber();

        setProfit(profitVal);
    }, [invest])

    const { name, amount: { from, until }, percent, days } = tariffs[tariff];
    const bigInvest = Big(invest);
    const bigPercent = Big(percent);
    const amountSum = bigInvest.plus(bigInvest.times(bigPercent).times(Big(days))).toNumber();
    const percentSum = bigPercent.times(Big(days)).toNumber();

    return (
        <div id="calculator" className="plans-big-block">
            <div className="plans-top">
              <div className="left">
                <Image src="/static/img/plans-left1.svg" width="74" height="118" />
                <Image src="/static/img/plans-left2.svg" width="198" height="55" />
                <p>{name} Program</p>
              </div>
              <div className="top">
                <a style={{ cursor: 'pointer' }} onClick={() => setTariff(1)} className={tariff === 1 ? 'active' : ''}>Junior Program</a>
                <a style={{ cursor: 'pointer' }} onClick={() => setTariff(2)} className={tariff === 2 ? 'active' : ''}>Middle Program</a>
                <a style={{ cursor: 'pointer' }} onClick={() => setTariff(3)} className={tariff === 3 ? 'active' : ''}>Senior Program</a>
              </div>
              <div className="right">
                <div className="right-item active">
                  <div className="percent">
                    <p>{percent}<span>%</span></p>
                    <p>в день</p>
                  </div>
                  <p>Сумма депозита: <span>от {from} QU</span></p>
                  <p>Срок: <span>{days} дней</span></p>
                </div>
              </div>
            </div>
            <div className="plans-bottom">
              <div className="plans-bottom-left">
                <div className="plans-bottom-item">
                  <h5>Сумма инвестривания в QU</h5>
                  <input value={invest} onChange={e => setInvset(Number(e.target.value))} type="text" naame="qu"/>
                  <BaseRange
                    min={100}
                    max={100000}
                    values={[invest]}
                    onChange={([val]) => setInvset(val)}
                    step={50}
                  />
                  <div className="max">100 000</div>
                </div>
                <div className="plans-bottom-item">
                  <h5>Сумма в BTC</h5>
                  <input type="text" naame="btc" value={profit} />
                  <BaseRange
                    min={Big(0.0024).toNumber()}
                    max={100000}
                    values={[invest]}
                    onChange={([val]) => {
                      if (val > 100) setInvset(val);
                    }}
                    step={100}
                  />
                  <div className="max">2.4</div>
                </div>
                <div className="plans-bottom-button">
                {!withoutButton && (
                  <Link href={`/cabinet/${getAccessToken() ? 'deposite' : 'registration'}`}>
                    <a className="button">Инвестировать</a>
                  </Link>
                )}
                </div>
              </div>
              <div className="plans-bottom-right">
                <div className="button">
                  {!withoutButton && (
                    <Link href={`/cabinet/${getAccessToken() ? 'deposite' : 'registration'}`}>
                      <a className="button">Инвестировать</a>
                    </Link>
                  )}
                </div>
                <div className="text">
                  <div className="sum">
                    <h5>Итоговая сумма:</h5>
                    <p>{amountSum} <span>QU</span></p>
                  </div>
                  <div className="percents">
                    <h5>В процентах:</h5>
                    <p>{percentSum} %</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default BaseDepositeCalculator
