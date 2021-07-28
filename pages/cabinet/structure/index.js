import useSWR from "swr";
import kyFetch from 'api';
import { useState } from "react";

const Structure = () => {
    const [isOpen, setIsOpen] = useState({
        first: true,
        second: false,
        third: false,
        fourth: false,
    });
    const { data: structure = {} } = useSWR('structure', async () => {
        const resp = await kyFetch.get('users/structure').json();

        return resp;
    })

    const { first, second, third, fourth } = structure || {};

    return (
        <div>
            <h1>Структура</h1>

            <div className="structure-block">
                <div className="structure-title">
                    <img src="img/money5.svg" alt=""/>
                    Мои инвесторы:
                </div>
                {Object.keys(structure).map((refLine, i) => (
                    <div className={`structure-item ${isOpen[refLine] ? 'active' : ''}`}>
                        {/* eslint-disable */}
                        <p onClick={() => setIsOpen({ ...isOpen, [refLine]: !isOpen[refLine] })} className="purpur">Линия {i + 1}</p>
                        <div className="structure-hidden">
                            {structure[refLine]?.map(({ id, login, invested }) => (
                                <div className="investor" key={id}>
                                    <p className="purpur">
                                        <span className="structure-icon">А</span>
                                        {login}
                                    </p>
                                    {/* <p className="purpur">+7 (***) ***-**-14</p> */}
                                    <p>id:&nbsp;<span className="purpur">{id}</span></p>
                                    <p>Инвестировано:&nbsp;<span className="purpur">{invested} QU</span></p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                {/* <div className="structure-item">
                    <p className="purpur">Линия 1</p>
                    <div className="structure-hidden">
                        {first?.map(({ id, login, invested }) => (
                            <div className="investor" key={id}>
                                <p className="purpur">
                                    <span className="structure-icon">А</span>
                                    {login}
                                </p>
                                <p className="purpur">+7 (***) ***-**-14</p>
                                <p>id:&nbsp;<span className="purpur">{id}</span></p>
                                <p>Инвестировано:&nbsp;<span className="purpur">{invested} QU</span></p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="structure-item active">
                    <p className="purpur">Линия 2</p>
                    <div className="structure-hidden">
                        <div className="investor">
                            <p className="purpur">
                                <span className="structure-icon">А</span>
                                Александр ********
                            </p>
                            <p className="purpur">+7 (***) ***-**-14</p>
                            <p>id:&nbsp;<span className="purpur">7775719</span></p>
                            <p>Инвестировано:&nbsp;<span className="purpur">3.63 QU</span></p>
                        </div>
                    </div>
                </div>
                <div className="structure-item">
                    <p className="purpur">Линия 3</p>
                    <div className="structure-hidden">
                        <div className="investor">
                            <p className="purpur">
                                <span className="structure-icon">А</span>
                                Александр ********
                            </p>
                            <p className="purpur">+7 (***) ***-**-14</p>
                            <p>id:&nbsp;<span className="purpur">7775719</span></p>
                            <p>Инвестировано:&nbsp;<span className="purpur">3.63 QU</span></p>
                        </div>
                    </div>
                </div>
                <div className="structure-item">
                    <p className="purpur">Линия 4</p>
                    <div className="structure-hidden">
                        <div className="investor">
                            <p className="purpur">
                                <span className="structure-icon">А</span>
                                Александр ********
                            </p>
                            <p className="purpur">+7 (***) ***-**-14</p>
                            <p>id:&nbsp;<span className="purpur">7775719</span></p>
                            <p>Инвестировано:&nbsp;<span className="purpur">3.63 QU</span></p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Structure;
