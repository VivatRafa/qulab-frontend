import Cookies from 'js-cookie';
import DefaultLayout from 'layouts/default'
import { SWRConfig } from 'swr';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getAccessToken, logout } from '../utils/auth';
import { GlobalProvider } from '../contexts';

import '../styles/globals.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const swrConfig = {
  revalidateOnFocus: false,
}

const landingPages = ['Home', 'About', 'Faq', 'Reviews', 'Program', 'Investor'];
const notAvailableForAuth = ['Registration', 'Login', 'PasswordRecovery'];


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { Layout = DefaultLayout, needAuth, PageName } = Component || {};

  useEffect(() => {
    const isNotAvailableForAuth = notAvailableForAuth.includes(PageName);
    const isCabinetPage = ![...landingPages, ...notAvailableForAuth].includes(PageName);

    if (isCabinetPage && !getAccessToken()) logout();
    if (isNotAvailableForAuth && getAccessToken()) router.push('/cabinet/dashboard');
  }, [PageName])

  // сделать человеческий route guard
  // useEffect(() => {
  //   const noNeedAuthRoutes = ['/about','/faq','/investor','/program','/reviews','/cabinet/registration','/cabinet/login','/cabinet/password-recovery'];
  //   const handleRouteChange = (url) => {
  //     const isCabinetNeedAuthPage = !noNeedAuthRoutes.includes(url) && !getAccessToken();
  //     if (isCabinetNeedAuthPage) {
  //       router.push('/');
  //     };
  //   }

  //   router.events.on('routeChangeStart', handleRouteChange)

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:
  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange)
  //   }
  // }, [PageName])
  
  const isCabinetPage = router.asPath.includes('cabinet');

  return (
    <div className={`${isCabinetPage ? 'cabinet-page' : 'land-page'}`}>
      <div className="page">
        <SWRConfig
          value={swrConfig}
        >
          <GlobalProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </GlobalProvider>

        </SWRConfig>
      </div>
    </div>
  )
}



export default MyApp
