import Slider from "react-slick";

const BaseSlider = ({ children }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    
    return (
        <Slider {...settings}>
            <div className="status-item">
                <div className="icon">
                    <img src="img/status-icon1.svg" alt="" />
                </div>
                <div className="stars">
                    <img src="img/stars1.svg" alt="" />
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
                    <img src="img/status-icon1.svg" alt="" />
                </div>
                <div className="stars">
                    <img src="img/stars2.svg" alt="" />
                </div>
                <h4>Старший консультант</h4>
                <div className="bonus">
                    <h5>Бонус:</h5>
                    <div className="bonus-wrap">
                        <p>6<span>%</span></p>
                        <p>от личных продаж</p>
                    </div>
                </div>
                <p>Личный оборот (вклад): <span>> 1000 QU</span></p>
                <p>Оборот структуры: <span>X</span></p>
            </div>
            <div className="status-item">
                <div className="icon">
                    <img src="img/status-icon2.svg" alt="" />
                </div>
                <div className="stars">
                    <img src="img/stars3.svg" alt="" />
                </div>
                <h4>Лидер</h4>
                <div className="bonus">
                    <h5>Бонус:</h5>
                    <div className="bonus-wrap">
                        <p>7<span>%</span></p>
                        <p>от личных продаж</p>
                    </div>
                </div>
                <p>Личный оборот (вклад): <span>> 5000 QU</span></p>
                <p>Оборот структуры: <span>1 линия > 2500 QU</span></p>
            </div>
            <div className="status-item">
                <div className="icon">
                    <img src="img/status-icon3.svg" alt="" />
                </div>
                <div className="stars">
                    <img src="img/stars4.svg" alt="" />
                </div>
                <h4>Вице директор</h4>
                <div className="bonus">
                    <h5>Бонус:</h5>
                    <div className="bonus-wrap">
                        <p>8<span>%</span></p>
                        <p>от личных продаж</p>
                    </div>
                </div>
                <p>Личный оборот (вклад): <span>> 5000 QU</span></p>
                <p>Оборот структуры: <span>1-2 линии > 20 000 QU</span></p>
            </div>
            <div className="status-item">
                <div className="icon">
                    <img src="img/status-icon4.svg" alt="" />
                </div>
                <div className="stars">
                    <img src="img/stars5.svg" alt="" />
                </div>
                <h4>Кандидат директор</h4>
                <div className="bonus">
                    <h5>Бонус:</h5>
                    <div className="bonus-wrap">
                        <p>9<span>%</span></p>
                        <p>от личных продаж</p>
                    </div>
                </div>
                <p>Личный оборот (вклад): <span>> 5000 QU</span></p>
                <p>Оборот структуры: <span>1-3 линии > 50 000 QU</span></p>
            </div>
            <div className="status-item">
                <div className="icon">
                    <img src="img/status-icon5.svg" alt="" />
                </div>
                <div className="stars">
                    <img src="img/stars6.svg" alt="" />
                </div>
                <h4>Директор</h4>
                <div className="bonus">
                    <h5>Бонус:</h5>
                    <div className="bonus-wrap">
                        <p>10<span>%</span></p>
                        <p>от личных продаж</p>
                    </div>
                </div>
                <p>Личный оборот (вклад): <span>> 5000 QU</span></p>
                <p>Оборот структуры: <span>1-4 линии > 200 000 QU</span></p>
            </div>
            <div className="status-item">
                <div className="icon">
                    <img src="img/status-icon6.svg" alt="" />
                </div>
                <div className="stars">
                    <img src="img/stars7.svg" alt="" />
                </div>
                <h4>Серебряный директор</h4>
                <div className="bonus">
                    <h5>Бонус:</h5>
                    <div className="bonus-wrap">
                        <p>11<span>%</span></p>
                        <p>от личных продаж</p>
                    </div>
                </div>
                <p>Личный оборот (вклад): <span>> 5000 QU</span></p>
                <p>Оборот структуры: <span>1-5 линии > 500 000 QU</span></p>
            </div>
            <div className="status-item">
                <div className="icon">
                    <img src="img/status-icon7.svg" alt="" />
                </div>
                <div className="stars">
                    <img src="img/stars8.svg" alt="" />
                </div>
                <h4>Золотой директор</h4>
                <div className="bonus">
                    <h5>Бонус:</h5>
                    <div className="bonus-wrap">
                        <p>12<span>%</span></p>
                        <p>от личных продаж</p>
                    </div>
                </div>
                <p>Личный оборот (вклад): <span>> 5000 QU</span></p>
                <p>Оборот структуры: <span>1-6 линии > 1 000 000 QU</span></p>
            </div>
            <div className="status-item">
                <div className="icon">
                    <img src="img/status-icon8.svg" alt="" />
                </div>
                <div className="stars">
                    <img src="img/stars9.svg" alt="" />
                </div>
                <h4>Брильянтовый директор</h4>
                <div className="bonus">
                    <h5>Бонус:</h5>
                    <div className="bonus-wrap">
                        <p>13<span>%</span></p>
                        <p>от личных продаж</p>
                    </div>
                </div>
                <p>Личный оборот (вклад): <span>> 5000 QU</span></p>
                <p>Оборот структуры: <span>1-7 линии > 3 000 000 QU</span></p>
            </div>
            <div className="status-item">
                <div className="icon">
                    <img src="img/status-icon9.svg" alt="" />
                </div>
                <div className="stars">
                    <img src="img/stars10.svg" alt="" />
                </div>
                <h4>Региональный партнер</h4>
                <div className="bonus">
                    <h5>Бонус:</h5>
                    <div className="bonus-wrap">
                        <p>14<span>%</span></p>
                        <p>от личных продаж</p>
                    </div>
                </div>
                <p>Личный оборот (вклад): <span>> 5000 QU</span></p>
                <p>Оборот структуры: <span>1-8 линии > 10 000 000 QU</span></p>
            </div>
            <div className="status-item">
                <div className="icon">
                    <img src="img/status-icon10.svg" alt="" />
                </div>
                <div className="stars">
                    <img src="img/stars11.svg" alt="" />
                </div>
                <h4>Международный партнер</h4>
                <div className="bonus">
                    <h5>Бонус:</h5>
                    <div className="bonus-wrap">
                        <p>15<span>%</span></p>
                        <p>от личных продаж</p>
                    </div>
                </div>
                <p>Личный оборот (вклад): <span>> 5000 QU</span></p>
                <p>Оборот структуры: <span>1-9 линии > 30 000 000 QU</span></p>
            </div>
        </Slider>
    )
}

export default BaseSlider;