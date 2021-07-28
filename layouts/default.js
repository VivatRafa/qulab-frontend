import React from 'react'
import Header from 'layouts/header';
import Footer from './footer';
import Menu from './menu';

const DefaultLayout = ({ children }) => (
        <>
            <Header />
            <section className="big-section">
                <div className="wrapper">
                    <div className="big-wrap">
                        <Menu />
                        <main>{children}</main>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )

DefaultLayout.propTypes = {

}

export default DefaultLayout
