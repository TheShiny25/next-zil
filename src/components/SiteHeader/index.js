import Link from 'next/link';
import SiteNav from '@components/SiteNav';
import styled, { ThemeContext } from 'styled-components';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import ZilLogo from '@svg/zil-logo.svg';
import MenuButton from '@components/MenuButton';
import MobileMenuContext from '@contexts/MobileMenu';
import breakpoints from '@css/breakpoints';

const StyledHeader = styled.header`
  width: 100%;
  height: 5.55rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.78rem;
  z-index: 1000;
  color: ${({ theme: { foreground } }) => foreground};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme: { background } }) => background};
    opacity: ${({ transparent }) => (transparent ? 0 : 1)};
    transition: opacity 500ms;
    z-index: -1;
  }

  ${breakpoints.tabletDown} {
    padding: 0.89rem;
    height: auto;

    ${({ isMobileMenuOpened }) =>
      isMobileMenuOpened &&
      `
      color: var(--black);
      align-items: flex-start;
      height: 100%;
    `}
  }
`;

const LogoLink = styled.a`
  display: block;
  width: 3.22rem;
  transition: opacity 200ms;
  z-index: 10;

  &:hover {
    opacity: 0.5;
    transition: opacity 200ms;
  }

  ${breakpoints.tabletDown} {
    width: auto;
    height: 1.39rem;

    > svg {
      width: auto;
    }
  }
`;

const NavMenuButton = styled(MenuButton)`
  width: 1.28rem;
  height: 1.39rem;

  ${breakpoints.laptopUp} {
    display: none !important;
  }

  ${breakpoints.tabletDown} {
    position: absolute;
    align-self: flex-start;
    padding: 0.89rem;
    right: 0;
    top: 0;
    z-index: 100;
  }
`;

const Header = ({ className }) => {
  const headerRef = useRef(null);
  const rafRef = useRef(null);
  const transparentRef = useRef(true);
  const [transparent, setTransparent] = useState(true);
  const theme = useContext(ThemeContext);
  const { isOpened: isMobileMenuOpened, toggle: toggleMobileMenu } = useContext(MobileMenuContext);

  const updateHeaderTransparency = useCallback(() => {
    const transparencyOffset = theme.headerTransparencyOffset || window.innerHeight;
    const shouldBeTransparent = document.documentElement.scrollTop < transparencyOffset;
    if (transparentRef.current !== shouldBeTransparent) {
      transparentRef.current = shouldBeTransparent;
      setTransparent(shouldBeTransparent);
    }
    rafRef.current = requestAnimationFrame(updateHeaderTransparency);
  }, [theme.headerTransparencyOffset, transparentRef]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(updateHeaderTransparency);

    return () => cancelAnimationFrame(rafRef.current);
  }, [updateHeaderTransparency]);

  return (
    <StyledHeader
      ref={headerRef}
      className={className}
      transparent={transparent}
      isMobileMenuOpened={isMobileMenuOpened}
    >
      <Link href="/" prefetch={false} passHref>
        <LogoLink>
          <ZilLogo width="100%" height="100%" draggable={false} aria-label="Zil" />
        </LogoLink>
      </Link>
      <SiteNav onLinkClick={isMobileMenuOpened ? toggleMobileMenu : () => {}} />
      <NavMenuButton  cross={isMobileMenuOpened} onClick={toggleMobileMenu} />
    </StyledHeader>
  );
};

export default Header;
