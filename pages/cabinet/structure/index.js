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

    return (
        <div>
            <h1>Структура</h1>

            <div className="structure-block">
                <div className="structure-title">
                    <img src="img/money5.svg" alt=""/>
                    Мои инвесторы:
                </div>
                {Object.keys(structure).filter(refLine => structure[refLine]?.length).map((refLine, i) => (
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
            </div>
        </div>
    )
}

export default Structure;
