/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Landing from '../layouts/landing';

import whatImg from '../public/static/img/what-img.svg';
import how1 from '../public/static/img/how1.svg';
import how2 from '../public/static/img/how2.svg';
import how3 from '../public/static/img/how3.svg';
import how4 from '../public/static/img/how4.svg';
import plansLeft1 from '../public/static/img/plans-left1.svg';
import plansLeft2 from '../public/static/img/plans-left2.svg';
import referalPrev from '../public/static/img/referal-prev.svg';
import statusIcon1 from '../public/static/img/status-icon1.svg';
import stars1 from '../public/static/img/stars1.svg';
import stars2 from '../public/static/img/stars2.svg';
import statusIcon2 from '../public/static/img/status-icon2.svg';
import stars3 from '../public/static/img/stars3.svg';
import statusIcon3 from '../public/static/img/status-icon3.svg';
import stars4 from '../public/static/img/stars4.svg';
import statusIcon4 from '../public/static/img/status-icon4.svg';
import stars5 from '../public/static/img/stars5.svg';
import statusIcon5 from '../public/static/img/status-icon5.svg';
import stars6 from '../public/static/img/stars6.svg';
import statusIcon6 from '../public/static/img/status-icon6.svg';
import stars7 from '../public/static/img/stars7.svg';
import statusIcon7 from '../public/static/img/status-icon7.svg';
import stars8 from '../public/static/img/stars8.svg';
import statusIcon8 from '../public/static/img/status-icon8.svg';
import stars9 from '../public/static/img/stars9.svg';
import statusIcon9 from '../public/static/img/status-icon9.svg';
import stars10 from '../public/static/img/stars10.svg';
import statusIcon10 from '../public/static/img/status-icon10.svg';
import stars11 from '../public/static/img/stars11.svg';
import referalNext from '../public/static/img/referal-next.svg';
import advan1 from '../public/static/img/advan1.svg';
import advan2 from '../public/static/img/advan2.svg';
import advan3 from '../public/static/img/advan3.svg';
import advan4 from '../public/static/img/advan4.svg';
import BaseRange from '../components/base/BaseRange';
import BaseDepositeCalculator from '../components/base/BaseDepositeCalculator';
import BaseSlider from '../components/base/BaseSlider';

const Home = () => (
    <>
      <section className="what-section">
        <div className="wrapper">
          <h2>Что такое QuLab?</h2>

          <div className="what-wrap">
            <div className="what-left">
              <div className="img">
                <Image src={whatImg} width="494" height="272" />
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
              <Image src={how1} width="390" height="516" />
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
              <Image src={how2} width="316" height="340" />
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
              <Image src={how3} width="445" height="437" />
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
              <Image src={how4} width="339" height="344" />
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

          <BaseDepositeCalculator />
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
              <Image src={referalPrev} width="100" height="100" />
              <div className="before" />

              {/* <div className="referal-slider">
                <div className="status-item">
                  <div className="icon">
                    <Image src={statusIcon1} width="100" height="100" />
                  </div>
                  <div className="stars">
                    <Image src={stars1} width="100" height="100" />
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

              </div> */}

              <BaseSlider />

              <div className="after" />
              <Image src={referalNext} width="100" height="100" />
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
                <Image src={advan1} width="100" height="100" />
              </div>
              <div className="text">
                <h3>Почему QuLab</h3>
                <p>Высокие стандарты к инвестициям. Международная работы платформы высококвалифицированная команда работающая совместно с искусственным интеллектом. Внедрение инноваций и собственных разработок.</p>
              </div>
            </div>
            <div className="advan-item">
              <div className="img">
                <Image src={advan2} width="100" height="100" />
              </div>
              <div className="text">
                <h3>Безопасность</h3>
                <p>На платформе используются самые передовые технологии для защиты данных. Собственная система негосударственного регулирования рынка инвестиций дает возможность доверять нам свои вложения.</p>
              </div>
            </div>
            <div className="advan-item">
              <div className="img">
                <Image src={advan3} width="100" height="100" />
              </div>
              <div className="text">
                <h3>Стабильность</h3>
                <p>Тщательный контроль роботы платформы и сделок совершаемых на ней с помощью искусственного интеллекта и физического мониторинга, даёт возможность обеспечивать стабильную работу и доход</p>
              </div>
            </div>
            <div className="advan-item">
              <div className="img">
                <Image src={advan4} width="100" height="100" />
              </div>
              <div className="text">
                <h3>Выгодные условия</h3>
                <p>Удобные и надёжные способы пополнения и вывода. Быстрая обработка данных. Отсутсвие скрытых и дополнительных комиссий. Одна из лучших реферальных систем, систем поощрения и бонусов.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )

Home.Layout = Landing;

export default Home;
