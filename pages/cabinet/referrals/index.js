import React from 'react'
import Image from 'next/image';
import useSWR from 'swr';
import kyFetch from 'api';
import dayjs from 'dayjs';
import { copyTextToClipboard, showAmount } from 'utils';
import BaseReferralLink from '../../../components/base/BaseReferralLink';
import BaseUserStatusBlock from '../../../components/base/BaseUserStatusBlock';

const Referrals = () => {
	const { data: topReferrals = [], error } = useSWR('referralTop', async () => {
        const resp = await kyFetch.get('users/top-referrals').json();

        return resp || [];
    })

	const { data: referralAwards = [], error: refError } = useSWR('referralAwards', async () => {
        const resp = await kyFetch.get('balance/referral-awards').json();

        return resp || [];
    })

	const { data: balanceData = {}, error: balanceError } = useSWR('balance', async () => {
        const resp = await kyFetch.get('balance').json();

        return resp;
    })

	const { data: referalInfo = {} } = useSWR('referralInfo', async () => {
        const resp = await kyFetch.get('users/referral-info').json();

        return resp;
    })

	const { referralCounts, activeReferralCounts } = referalInfo;
	

	return (
		(
			<div>
					<h1>Рефералы</h1>
	
					<BaseUserStatusBlock />
	
					<h3>Топ 5 лидеров</h3>
	
					<div className="table-wrap margin">
						<table>
							<tbody>
								<tr>
									<td>Логин</td>
									<td>Оборот структуры</td>
								</tr>
								{topReferrals.map(({ name, amount }, i) => (
									<tr key={i}>
										<td>{name}</td>
										<td>{amount} QU</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
	
					<h3>Премия</h3>
					<div className="premia">
						<p>Ваша премия составляет:</p>
						<p className="fz24 green">{showAmount(balanceData.referral_award)} QU</p>
					</div>	
	
					<div className="table-wrap margin">
						<table>
							<tbody>
								<tr>
									<td>Дата</td>
									<td>Премия</td>
									{/* <td>Система подсчета бонусного оборота</td> */}
								</tr>
								{referralAwards.map(({ id, amount, date }) => (
									<tr key={id}>
										<td>{dayjs(date).format('DD.MM.YYYY')}</td>
										<td>{amount} QU</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
	
					<h3>Данные по реферальной системе</h3>
	
					<div className="money-wrap">
						<div className="money-item full">
							<BaseReferralLink />
						</div>
						<div className="money-item">
							<div className="money-item-title">
								<img src="img/money6.svg" alt="" />
								<span className="purpur opacity">Доход с рефералов:</span>
							</div>
							<p className="purpur fz24">{showAmount(balanceData.referral_award)} QU</p>
						</div>
						<div className="money-item">
							<div className="money-item-title">
								<img src="img/money5.svg" alt="" />
								<span className="purpur opacity">Всего рефералов:</span>
							</div>
							<p className="purpur fz24">{referralCounts}</p>
						</div>
						<div className="money-item">
							<div className="money-item-title">
								<img src="img/money7.svg" alt="" />
								<span className="purpur opacity">Активных рефералов</span>
							</div>
							<p className="purpur fz24">{activeReferralCounts}</p>
						</div>
					</div>
	
					<p className="inviter margin">Ваш пригласитель: <span className="purpur">user1</span></p>
	
					<h3>Данные по реферальной системе</h3>
	
					<div className="table-wrap margin">
						<table className="referal-table">
							<tr>
								<td>Уровень</td>
								<td>Личные инвестиции</td>
								<td>Привлеченные инвестиции</td>
								<td>Реферальный бонус</td>
							</tr>
							<tr>
								<td>1</td>
								<td>от 100 QU до 490 QU</td>
								<td />
								<td />
							</tr>
							<tr>
								<td />
								<td />
								<td>от 100 QU до 190 QU</td>
								<td>2%</td>
							</tr>
							<tr>
								<td />
								<td />
								<td>от 200 QU до 490 QU</td>
								<td>2.25%</td>
							</tr>
							<tr>
								<td />
								<td />
								<td>от 500 QU до 990 QU</td>
								<td>2.5%</td>
							</tr>
							<tr>
								<td />
								<td />
								<td>от 1000 QU до 2490 QU</td>
								<td>2.75%</td>
							</tr>
							<tr>
								<td />
								<td />
								<td>от 2500 QU до 4990 QU</td>
								<td>3%</td>
							</tr>
							<tr>
								<td />
								<td />
								<td>от 5000 QU до 9990 QU</td>
								<td>3.5%</td>
							</tr>
							<tr>
								<td />
								<td />
								<td>от 100 00 QU до 19 000 QU</td>
								<td>4%</td>
							</tr>
							<tr>
								<td />
								<td />
								<td>от 20 000 QU до 39 900 QU</td>
								<td>4.5%</td>
							</tr>
							<tr>
								<td />
								<td />
								<td>от 40 000 QU</td>
								<td>5%</td>
							</tr>
							<tr>
								<td>2</td>
								<td>от 500 QU до 990 QU</td>
								<td />
								<td>1%</td>
							</tr>
							<tr>
								<td>3</td>
								<td>от 1000 QU до 3990 QU</td>
								<td />
								<td>0.7%</td>
							</tr>
							<tr>
								<td>4</td>
								<td>от 4000 QU до 9990 QU</td>
								<td />
								<td>0.5%</td>
							</tr>
							<tr>
								<td>5</td>
								<td>от 10 000 QU</td>
								<td />
								<td>0.3%</td>
							</tr>
						</table>
					</div>
	
					<div className="info-section">
						<h3>Как это работает?</h3>
	
						<p>Вся наша программа лояльности настроена на умножение прибыли наших инвесторов. Благодаря этому вы сможете зарабатывать больше и помочь своим партнёрам построить собственный пассивный доход. Достаточно соблюдать условия для получения следующего статуса, премии или линии реферальной программы.</p>
						<p>Предлагаем прямо сейчас пригласить партнёров в закрытый инвестиционный клуб Phoenix-Invest. Нашей выгодой является увеличение общего инвестиционного капитала Phoenix-Invest. Это позволяет нам занять большее количество инвестиционных секторов и зарабатывать на каждой отдельной позиции.</p>
					</div>
				
			</div>
		)
	)
}

export default Referrals
