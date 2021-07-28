import React from 'react'
import Image from 'next/image';

const Balance = () => (
        <div>
            <h1>Пополнение баланса</h1>
            <div className="operation-block margin">
                <div className="operation-title">
                    <img src="img/operation1.svg" alt="" />
                    <span>Пополнить баланс:</span>
                </div>
                <form action="#">
                    <div className="inputs-wrap">
                        <div className="input">
                            <p>Сумма пополнения:</p>
                            <input type="text" placeholder="Введите сумму" />
                        </div>
                        <div className="input">
                            <p>Система:</p>
                            <div className="select">
                                <select>
                                    <option value="junior">Junior Programm</option>
                                    <option value="middle">Middle Programm</option>
                                    <option value="senior">Senior Programm</option>
                                </select>
                            </div>
                        </div>							
                    </div>
                    <button type="submit" className="button">Пополнить</button>
                </form>
            </div>

            <h3>История пополнений</h3>

            <div className="table-wrap">
                <table>
                    <tr>
                        <td>Дата</td>
                        <td>Сумма</td>
                        <td>Кошелек</td>
                        <td>Статус</td>
                    </tr>
                    <tr>
                        <td>21.05.2021</td>
                        <td>124.67 QU</td>
                        <td>
                            <img src="img/berty.svg" alt="" />
                            Berty
                        </td>
                        <td className="opacity">Выполняется</td>
                    </tr>
                    <tr>
                        <td>21.05.2021</td>
                        <td>124.67 QU</td>
                        <td>
                            <img src="img/btc.svg" alt="" />
                            BitCoin
                        </td>
                        <td className="green">Выполнено</td>
                    </tr>
                    <tr>
                        <td>21.05.2021</td>
                        <td>124.67 QU</td>
                        <td>
                            <img src="img/berty.svg" alt="" />
                            Berty
                        </td>
                        <td className="red">Ошибка</td>
                    </tr>
                    <tr>
                        <td>21.05.2021</td>
                        <td>124.67 QU</td>
                        <td>
                            <img src="img/btc.svg" alt="" />
                            BitCoin
                        </td>
                        <td className="green">Выполнено</td>
                    </tr>
                    <tr>
                        <td>21.05.2021</td>
                        <td>124.67 QU</td>
                        <td>
                            <img src="img/berty.svg" alt="" />
                            Berty
                        </td>
                        <td className="green">Выполнено</td>
                    </tr>
                </table>
            </div>
        </div>
    )

export default Balance
