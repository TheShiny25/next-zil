import { useEffect, useCallback, useContext, useRef } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import CursorContext from '@contexts/Cursor';
import MobileMenuContext from '@contexts/MobileMenu';
import AppHead from '@components/Head';
import Cursor from '@components/Cursor';
import SiteHeader from '@components/SiteHeader';
import SiteFooter from '@components/SiteFooter';
import themes from '@css/themes';

const ThemedMain = styled.main`
  background: ${({ theme: { background } }) => background};
  color: ${({ theme: { foreground } }) => foreground};
  overflow: hidden;
`;

const Page = ({ children, className, theme = 'dark', title, description }) => {
  const cursorRef = useRef();
  const { isOpened: isMobileMenuOpened, toggle: toggleMobileMenu } = useContext(MobileMenuContext);
  const router = useRouter();

  const handleRouteChange = useCallback(() => {
    if (isMobileMenuOpened) toggleMobileMenu();
  }, [toggleMobileMenu, isMobileMenuOpened]);

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [handleRouteChange, router.events]);

  return (
    <>
      <AppHead title={title} description={description} />
      <ThemeProvider theme={themes[theme]}>
        <CursorContext.Provider value={cursorRef}>
          <Cursor ref={cursorRef} />
          <SiteHeader />
          <ThemedMain className={className}>{children}</ThemedMain>
          <SiteFooter />
        </CursorContext.Provider>
      </ThemeProvider>
    </>
  );
};

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Page;
