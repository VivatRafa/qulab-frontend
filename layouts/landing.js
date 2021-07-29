import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from './header';
import Footer from './footer';

const Landing = ({ children }) => (
    <>
        <ul className="mob-menu">
            <li><a href="about.html">О нас</a></li>
            <li><a href="investoru.html">Инвестору</a></li>
            <li><a href="program.html">Премиальная программа</a></li>
            <li><a href="reviews.html">Отзывы</a></li>
            <li><a href="faq.html">FAQ</a></li>
        </ul>

        <div className="bg-block" />
        {children}
        <Footer />
    </>
)

export default Landing
