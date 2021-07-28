import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from './header';
import Footer from './footer';

const AuthLayout = ({ children }) => (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )

export default AuthLayout
