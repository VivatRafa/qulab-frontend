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
  const Layout = Component.Layout || DefaultLayout;
  const PageName = Component?.name;

  useEffect(() => {
    const isNotAvailableForAuth = notAvailableForAuth.includes(PageName);
    const isCabinetPage = ![...landingPages, ...notAvailableForAuth].includes(PageName);

    if (isCabinetPage && !getAccessToken()) logout();
    if (isNotAvailableForAuth && getAccessToken()) router.push('/cabinet/dashboard');
  }, [PageName])
  
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
