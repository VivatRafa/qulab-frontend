import Cookies from 'js-cookie';
import DefaultLayout from 'layouts/default'
import { SWRConfig } from 'swr';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import '../styles/globals.scss';
import { getAccessToken, logout } from '../utils/auth';

const swrConfig = {
  revalidateOnFocus: false,
}

const noNeedAuthPages = ['Registration', 'Login', 'PasswordRecovery', 'Home'];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const Layout = Component.Layout || DefaultLayout;
  const PageName = Component?.name;

  useEffect(() => {
    const isNeedAuthPage = !noNeedAuthPages.includes(PageName);
    if (isNeedAuthPage && !getAccessToken()) logout();
    if (!isNeedAuthPage && getAccessToken()) router.push('/cabinet/dashboard');
  }, [])

  return (
    <div className="page">
      <SWRConfig
        value={swrConfig}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>

      </SWRConfig>
    </div>
  )
}



export default MyApp
