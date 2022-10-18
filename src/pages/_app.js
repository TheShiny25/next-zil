// CSS
import '@css/fonts.css';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import NormalizeStyles from '@css/normalize';
import GlobalStyles from '@css/global';
import DeviceContext from '@contexts/Device';
import { MobileMenuProvider } from '@contexts/MobileMenu';
import listenMediaChange from '@zil/util/listenMediaChange';
import { desktopMediaRule, getCurrentDevice, phoneMediaRule, tabletMediaRule } from '@zil/util/responsive';
import ModalCookie from '@components/Modals/ModalCookie';
import './distribution/style.css';

const ZilApp = ({ Component, pageProps }) => {
  // Initialize device in null so server & client matches
  const [device, setDevice] = useState(null);

  // Handle device change
  useEffect(() => {
    const removeListeners = [];
    removeListeners.push(
      listenMediaChange(window.matchMedia(phoneMediaRule), (event) => {
        if (event.matches) setDevice('phone');
      })
    );
    removeListeners.push(
      listenMediaChange(window.matchMedia(tabletMediaRule), (event) => {
        if (event.matches) setDevice('tablet');
      })
    );
    removeListeners.push(
      listenMediaChange(window.matchMedia(desktopMediaRule), (event) => {
        if (event.matches) setDevice('desktop');
      })
    );

    // Update the device in client & server
    setDevice(getCurrentDevice());

    return () => removeListeners.forEach((remove) => remove());
  }, []);

  // Disable scroll restoration
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BGMH92ZFKE" />
      <Script
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BGMH92ZFKE', { page_path: window.location.pathname });
          `,
        }}
      />
      <NormalizeStyles />
      <GlobalStyles />
      <MobileMenuProvider>
        <DeviceContext.Provider value={device}>{device && <Component {...pageProps} />}</DeviceContext.Provider>
      </MobileMenuProvider>
      <ModalCookie/>
    </>
  );
};

export default ZilApp;
