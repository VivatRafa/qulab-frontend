/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Landing from '../layouts/landing';

import BaseDepositeCalculator from 'components/base/BaseDepositeCalculator';
import BaseSlider from 'components/base/BaseSlider';
import Link from 'next/link';
import { getAccessToken } from '../utils/auth';
import { statuses } from '../config/statuses';

const Home = () => (
    <>
      <section className="what-section">
        <div className="wrapper">
          <h2>Что такое QuLab?</h2>

          <div className="what-wrap">
            <div className="what-left">
              <div className="img">
                <Image src="/static/img/what-img.svg" width="494" height="272" />
              </div>
              <div className="what-left-button">
                <Link href={`/cabinet/${getAccessToken() ? 'registration' : 'dashboard'}`}>
                  <a className="button"><span>Присоединиться</span></a>
                </Link>
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
              <Image src="/static/img/how1.svg" width="390" height="516" />
            </div>
            <div className="text">
              <h3>Регистрация аккаунта</h3>
              <p>Необходимо перейти на главную страницу нашего сайта и выбрать раздел «Регистрация». После этого укажите информацию о себе, особенно внимательно вводите электронную почту, на которую будет приходить информация.</p>
              <p>Сразу после завершения регистрации вы сможете начать управление в личном кабинете. Поздравляем! Теперь вы официальный партнёр QuLab и можете выбрать подходящий инвестиционный план для работы ваших инвестиций и получения дохода.</p>
              <p>Уровень пассивного дохода не зависит от внешних условий. Вы сами формируете инвестиции, размещая свой депозит в том или ином секторе инвестиций. Мы выполняем функции финансового менеджмента, гарантируя сохранность инвестированных средств в любой ситуации.</p>

              <div className="how-text-button">
                <Link href="/cabinet/registration"><a className="button"><span>Зарегистрироваться</span></a></Link>
              </div>
            </div>
          </div>
          <div className="how-wrap">
            <div className="img">
              <Image src="/static/img/how2.svg" width="316" height="340" />
            </div>
            <div className="text">
              <h3>Открытие депозита</h3>
              <p>Сразу после создания учётной записи вы можете открыть депозит, чтобы начать первые инвестиционные шаги. Откройте раздел «Пополнить» и выберите наиболее удобный способ. Время пополнения занимает всего несколько минут после оплаты счета. Во вкладке «Инвестиции» вы сможете выбрать подходящий тарифный план и начать зарабатывать. Обязательно укажите сумму для выбранного направления. После выбора тарифного плана, ваш инвестиционный пакет начинает работать через 24 часа.</p>

              <div className="how-text-button">
                <Link href={`/cabinet/${getAccessToken() ? 'deposite': 'registration'}`}>
                  <a className="button1">Открыть депозит</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="how-wrap">
            <div className="img">
              <Image src="/static/img/how3.svg" width="445" height="437" />
            </div>
            <div className="text">
              <h3>Как получить прибыль</h3>
              <p>После выбора подходящего инвестиционного плана вы становитесь полноценным участником нашей платформы и можете зарабатывать на инвестициях благодаря QuLab. Отслеживать начисления по выбранным тарифным планам можно в личном кабинете, в разделе «Инвестиции». Во вкладке установлен специальный таймер для вашего удобства. После завершения срока работы тарифного плана на ваш счёт будут зачислены денежные средства.</p>
              <p>Заранее рассчитать сумму зачислений можно в тарифном плане, где указывается общая доходность и другая полезная информация. Обо всех своих инвестициях можно узнать в разделе истории, где хранится вся информация по полученной прибыли</p>

              <div className="how-text-button">
                <Link href={`/cabinet/${getAccessToken() ? 'deposite-history': 'registration'}`}>
                  <a className="button1">Проверить депозиты</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="how-wrap">
            <div className="img">
              <Image src="/static/img/how4.svg" width="339" height="344" />
            </div>
            <div className="text">
              <h3>Вывод средств</h3>
              <p>Вывести средства можно в любой момент времени. Операции обрабатываются в автоматическом режиме нашими алгоритмами. Для этого нужно перейти во вкладку настроек аккаунта, указать свои платёжные реквизиты и выбрать подходящую платёжную систему. Выберите свой кошелёк и введите всю необходимую информацию (ФИО, Дата рождения и.т.д…). На странице «Вывод» укажите сумму средств для получения, валюту и систему, после чего деньги будут зачислены в ближайшее время.</p>

              <div className="how-text-button">
              <Link href={`/cabinet/${getAccessToken() ? 'withdraw': 'registration'}`}>
                <a className="button1">Вывести стредства</a>
              </Link>
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
                <Link href="/program/#referral">
                  <a className="button">Подробнее</a>
                </Link>
              </div>
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

      <section className="advan-section">
        <div className="wrapper">
          <h2>Преимущества</h2>

          <div className="advan-wrap">
            <div className="advan-item">
              <div className="img">
                <Image src="/static/img/advan1.svg" width="100" height="100" />
              </div>
              <div className="text">
                <h3>Почему QuLab</h3>
                <p>Высокие стандарты к инвестициям. Международная работы платформы высококвалифицированная команда работающая совместно с искусственным интеллектом. Внедрение инноваций и собственных разработок.</p>
              </div>
            </div>
            <div className="advan-item">
              <div className="img">
                <Image src="/static/img/advan2.svg" width="100" height="100" />
              </div>
              <div className="text">
                <h3>Безопасность</h3>
                <p>На платформе используются самые передовые технологии для защиты данных. Собственная система негосударственного регулирования рынка инвестиций дает возможность доверять нам свои вложения.</p>
              </div>
            </div>
            <div className="advan-item">
              <div className="img">
                <Image src="/static/img/advan3.svg" width="100" height="100" />
              </div>
              <div className="text">
                <h3>Стабильность</h3>
                <p>Тщательный контроль роботы платформы и сделок совершаемых на ней с помощью искусственного интеллекта и физического мониторинга, даёт возможность обеспечивать стабильную работу и доход</p>
              </div>
            </div>
            <div className="advan-item">
              <div className="img">
                <Image src="/static/img/advan4.svg" width="100" height="100" />
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
Home.needAuth = false;
Home.PageName = 'Home';

export default Home;
