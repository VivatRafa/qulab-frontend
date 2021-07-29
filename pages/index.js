/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Landing from '../layouts/landing';

const Home = () => (
    <>
      <header>
        <img src="img/header-circle.svg" alt="" className="header-circle" />
        <section className="top-line-section">
          <div className="wrapper">
            <div className="top-line-wrap">
              <div className="top-left">
                <div className="burger">
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                </div>
                <a href="index.html" className="logo">
                  <img src="img/logo.svg" alt="" />
                  <span>QuLab</span>
                </a>
              </div>				
              <ul className="top-menu">
                <li><a href="about.html"><span>О нас</span></a></li>
                <li><a href="investoru.html"><span>Инвестору</span></a></li>
                <li><a href="program.html"><span>Премиальная программа</span></a></li>
                <li><a href="reviews.html"><span>Отзывы</span></a></li>
                <li><a href="faq.html"><span>FAQ</span></a></li>
              </ul>
              <div className="top-buttons">
                <a href="login.html"><span>Войти</span></a>
                <a href="reg.html" className="button"><span>Регистрация</span></a>
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper">
          <div className="header-block">
            <div className="header-text">
              <h1>Пассивный доход вместе с QuLab</h1>
              <p>Зарегистрируйтесь и получите доступ <br />ко всем возможностям Клуба!</p>

              <div className="header-buttons">
                <a href="#" className="button"><span>Инвестировать</span></a>
                <a href="#" className="button1"><span>Рассчитать прибыль</span></a>
              </div>
            </div>
            <div className="header-img">
              <img src="img/header-img.svg" alt="" />
            </div>
          </div>
        </div>
      </header>

      <section className="what-section">
        <div className="wrapper">
          <h2>Что такое QuLab?</h2>

          <div className="what-wrap">
            <div className="what-left">
              <div className="img">
                <img src="img/what-img.svg" alt="" />
              </div>
              <div className="what-left-button">
                <a href="#" className="button"><span>Присоединиться</span></a>
              </div>
            </div>
            <div className="what-right">
              <h3>Финансовый клуб с большими возможностями</h3>
              <p>Мультиплатформа QuLab — инновационная площадка для инвесторов, которые хотят построить свой пассивный доход и используя для этого наиболее перспективные компании и направления. Преимущество в максимальной прозрачности платформы и полной конфиденциальности клиента.</p>
              <p>Нашей задачей остаётся обеспечение высокого уровня комфорта и сервиса для инвесторов и партнёров. В нашей работе неотъемлемой частью остаётся полная анонимность и приватность. Мы предлагаем вам удобную регистрацию на платформе, быстрое открытие депозита который будет генерировать прибыль только в проверенных инвестиционных секторах, а так же быстрый вывод на свой счёт. Наша техническая поддержка работает для вас круглосуточно, без выходных.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="digits-section">
        <div className="wrapper">
          <h2>Цифры</h2>

          <div className="digits-wrap">
            <div className="digits-left">
              <p>На данный момент курс биткоина колеблется в районе 45 тысяч долларов. Это минимум за три месяца. На данный момент исторический максимум биткоина приходится на середину апреля, когда криптовалюта подошла к уровню 64 тысячи долларов за монету.</p>
              <p>Тем не менее, даже по нынешнему курсу криптовалюта уже входит в разряд высокобюджетных инвестиций. В переводе на рубли биткоин стоит порядка трёх с половиной миллионов.</p>
            </div>
            <div className="digits-right">
              <div className="digits-right-item">
                <h4>+128<span>%</span></h4>
                <p>Прогноз роста рынка к 2021 году</p>
              </div>
              <div className="digits-right-item">
                <h4>+450<span>QU</span></h4>
                <p>Стоимость имущества на торгах</p>
              </div>
              <div className="digits-right-item">
                <h4>300<span>QU</span></h4>
                <p>Средний доход аукционного брокера</p>
              </div>
              <div className="digits-right-item">
                <h4>52,4<span>%</span></h4>
                <p>Средний дисконт при покупке лота</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section">
        <div className="wrapper">
          <h2>Как заработать вместе с нами</h2>

          <div className="how-wrap">
            <div className="img">
              <img src="img/how1.svg" alt="" />
            </div>
            <div className="text">
              <h3>Регистрация аккаунта</h3>
              <p>Необходимо перейти на главную страницу нашего сайта и выбрать раздел «Регистрация». После этого укажите информацию о себе, особенно внимательно вводите электронную почту, на которую будет приходить информация.</p>
              <p>Сразу после завершения регистрации вы сможете начать управление в личном кабинете. Поздравляем! Теперь вы официальный партнёр QuLab и можете выбрать подходящий инвестиционный план для работы ваших инвестиций и получения дохода.</p>
              <p>Уровень пассивного дохода не зависит от внешних условий. Вы сами формируете инвестиции, размещая свой депозит в том или ином секторе инвестиций. Мы выполняем функции финансового менеджмента, гарантируя сохранность инвестированных средств в любой ситуации.</p>

              <div className="how-text-button">
                <a href="#" className="button"><span>Зарегистрироваться</span></a>
              </div>
            </div>
          </div>
          <div className="how-wrap">
            <div className="img">
              <img src="img/how2.svg" alt="" />
            </div>
            <div className="text">
              <h3>Открытие депозита</h3>
              <p>Сразу после создания учётной записи вы можете открыть депозит, чтобы начать первые инвестиционные шаги. Откройте раздел «Пополнить» и выберите наиболее удобный способ. Время пополнения занимает всего несколько минут после оплаты счета. Во вкладке «Инвестиции» вы сможете выбрать подходящий тарифный план и начать зарабатывать. Обязательно укажите сумму для выбранного направления. После выбора тарифного плана, ваш инвестиционный пакет начинает работать через 24 часа.</p>

              <div className="how-text-button">
                <a href="#" className="button1">Открыть депозит</a>
              </div>
            </div>
          </div>
          <div className="how-wrap">
            <div className="img">
              <img src="img/how3.svg" alt="" />
            </div>
            <div className="text">
              <h3>Как получить прибыль</h3>
              <p>После выбора подходящего инвестиционного плана вы становитесь полноценным участником нашей платформы и можете зарабатывать на инвестициях благодаря QuLab. Отслеживать начисления по выбранным тарифным планам можно в личном кабинете, в разделе «Инвестиции». Во вкладке установлен специальный таймер для вашего удобства. После завершения срока работы тарифного плана на ваш счёт будут зачислены денежные средства.</p>
              <p>Заранее рассчитать сумму зачислений можно в тарифном плане, где указывается общая доходность и другая полезная информация. Обо всех своих инвестициях можно узнать в разделе истории, где хранится вся информация по полученной прибыли</p>

              <div className="how-text-button">
                <a href="#" className="button1">Проверить депозиты</a>
              </div>
            </div>
          </div>
          <div className="how-wrap">
            <div className="img">
              <img src="img/how4.svg" alt="" />
            </div>
            <div className="text">
              <h3>Вывод средств</h3>
              <p>Вывести средства можно в любой момент времени. Операции обрабатываются в автоматическом режиме нашими алгоритмами. Для этого нужно перейти во вкладку настроек аккаунта, указать свои платёжные реквизиты и выбрать подходящую платёжную систему. Выберите свой кошелёк и введите всю необходимую информацию (ФИО, Дата рождения и.т.д…). На странице «Вывод» укажите сумму средств для получения, валюту и систему, после чего деньги будут зачислены в ближайшее время.</p>

              <div className="how-text-button">
                <a href="#" className="button1">Вывести стредства</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plans-section">
        <div className="wrapper">
          <h2>Тарифные планы</h2>

          <div className="plans-big-block">
            <div className="plans-top">
              <div className="left">
                <img src="img/plans-left1.svg" alt="" />
                <img src="img/plans-left2.svg" alt="" />
                <p>Junior Program</p>
              </div>
              <div className="top">
                <a href="#" className="active">Junior Program</a>
                <a href="#">Middle Program</a>
                <a href="#">Senior Program</a>
              </div>
              <div className="right">
                <div className="right-item active">
                  <div className="percent">
                    <p>0.86 <span>%</span></p>
                    <p>в день</p>
                  </div>
                  <p>Сумма депозита: <span>от 99.00 QU</span></p>
                  <p>Срок: <span>232 дня</span></p>
                </div>
                <div className="right-item">
                  <div className="percent">
                    <p>0.96 <span>%</span></p>
                    <p>в день</p>
                  </div>
                  <p>Сумма депозита: <span>от 199.00 QU</span></p>
                  <p>Срок: <span>242 дня</span></p>
                </div>
                <div className="right-item">
                  <div className="percent">
                    <p>1.06 <span>%</span></p>
                    <p>в день</p>
                  </div>
                  <p>Сумма депозита: <span>от 299.00 QU</span></p>
                  <p>Срок: <span>252 дня</span></p>
                </div>
              </div>
            </div>
            <div className="plans-bottom">
              <div className="plans-bottom-left">
                <div className="plans-bottom-item">
                  <h5>Сумма инвестривания в QU</h5>
                  <input type="text" naame="qu" value="10000" />
                  <input type="range" min="0" max="100000" step="1000" value="10000" />
                  <div className="max">100 000</div>
                </div>
                <div className="plans-bottom-item">
                  <h5>Сумма в BTC</h5>
                  <input type="text" naame="btc" value="0.5" />
                  <input type="range" min="0" max="4.232" step="0.01" value="1" />
                  <div className="max">4.232</div>
                </div>
                <div className="plans-bottom-button">
                  <a href="#" className="button">Инвестировать</a>
                </div>
              </div>
              <div className="plans-bottom-right">
                <div className="button">
                  <a href="#" className="button">Инвестировать</a>
                </div>
                <div className="text">
                  <div className="sum">
                    <h5>Итоговая сумма:</h5>
                    <p>329.23 <span>QU</span></p>
                  </div>
                  <div className="percents">
                    <h5>В процентах:</h5>
                    <p>204.13 %</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="referal-section">
        <div className="wrapper">
          <h2>Реферальная программа</h2>

          <div className="referal-wrap">
            <div className="referal-left">
              <p>QuLab предлагает инвесторам возможность дополнительно увеличить свой доход за счет рекомендаций.</p>
              <p>Благодаря реферальной программе инвесторы с небольшим стартовым капиталом могут значительно улучшить свои позиции и начать зарабатывать больше. Для улучшения взаимодействия мы дополнительно внедрили системы статусов и премий. Приглашенные пользователи будут увеличивать ваш бонус к обороту.</p>
              <p>Благодаря продуманной и прозрачной системе вы сможете построить пассивный доход на основе нашей платформы и начать зарабатывать вместе с QuLab.</p>
              <div className="referal-left-button">
                <a href="#" className="button">Подробнее</a>
              </div>
            </div>
            <div className="referal-right">
              <img src="img/referal-prev.svg" alt="" className="referal-prev" />
              <div className="before" />

              <div className="referal-slider">
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
                  <p>Личный оборот (вклад): <span>&gt; 500 QU</span></p>
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
                  <p>Личный оборот (вклад): <span>&gt; 1000 QU</span></p>
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
                  <p>Личный оборот (вклад): <span>&gt; 5000 QU</span></p>
                  <p>Оборот структуры: <span>1 линия &gt; 2500 QU</span></p>
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
                  <p>Личный оборот (вклад): <span>&gt; 5000 QU</span></p>
                  <p>Оборот структуры: <span>1-2 линии &gt; 20 000 QU</span></p>
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
                  <p>Личный оборот (вклад): <span>&gt; 5000 QU</span></p>
                  <p>Оборот структуры: <span>1-3 линии &gt; 50 000 QU</span></p>
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
                  <p>Личный оборот (вклад): <span>&gt; 5000 QU</span></p>
                  <p>Оборот структуры: <span>1-4 линии &gt; 200 000 QU</span></p>
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
                  <p>Личный оборот (вклад): <span>&gt; 5000 QU</span></p>
                  <p>Оборот структуры: <span>1-5 линии &gt; 500 000 QU</span></p>
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
                  <p>Личный оборот (вклад): <span>&gt; 5000 QU</span></p>
                  <p>Оборот структуры: <span>1-6 линии &gt; 1 000 000 QU</span></p>
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
                  <p>Личный оборот (вклад): <span>&gt; 5000 QU</span></p>
                  <p>Оборот структуры: <span>1-7 линии &gt; 3 000 000 QU</span></p>
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
                  <p>Личный оборот (вклад): <span>&gt; 5000 QU</span></p>
                  <p>Оборот структуры: <span>1-8 линии &gt; 10 000 000 QU</span></p>
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
                  <p>Личный оборот (вклад): <span>&gt; 5000 QU</span></p>
                  <p>Оборот структуры: <span>1-9 линии &gt; 30 000 000 QU</span></p>
                </div>
              </div>

              <div className="after" />
              <img src="img/referal-next.svg" alt="" className="referal-next" />
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
                <img src="img/advan1.svg" alt="" />
              </div>
              <div className="text">
                <h3>Почему QuLab</h3>
                <p>Высокие стандарты к инвестициям. Международная работы платформы высококвалифицированная команда работающая совместно с искусственным интеллектом. Внедрение инноваций и собственных разработок.</p>
              </div>
            </div>
            <div className="advan-item">
              <div className="img">
                <img src="img/advan2.svg" alt="" />
              </div>
              <div className="text">
                <h3>Безопасность</h3>
                <p>На платформе используются самые передовые технологии для защиты данных. Собственная система негосударственного регулирования рынка инвестиций дает возможность доверять нам свои вложения.</p>
              </div>
            </div>
            <div className="advan-item">
              <div className="img">
                <img src="img/advan3.svg" alt="" />
              </div>
              <div className="text">
                <h3>Стабильность</h3>
                <p>Тщательный контроль роботы платформы и сделок совершаемых на ней с помощью искусственного интеллекта и физического мониторинга, даёт возможность обеспечивать стабильную работу и доход</p>
              </div>
            </div>
            <div className="advan-item">
              <div className="img">
                <img src="img/advan4.svg" alt="" />
              </div>
              <div className="text">
                <h3>Выгодные условия</h3>
                <p>Удобные и надёжные способы пополнения и вывода. Быстрая обработка данных. Отсутсвие скрытых и дополнительных комиссий. Одна из лучших реферальных систем, систем поощрения и бонусов.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logos-section">
        <div className="wrapper">
          <div className="logos-wrap">
            <div className="logos-item">
              <img src="img/logos1.png" alt="" />
            </div>
            <div className="logos-item">
              <img src="img/logos2.png" alt="" />
            </div>
            <div className="logos-item">
              <img src="img/logos3.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )

Home.Layout = Landing;

export default Home;
