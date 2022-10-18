import Link from 'next/link';
import Breakpoints from '@css/breakpoints';
import FullNav from '@components/FullNav';
import SocialNetworksNav from '@components/SocialNetworksNav';
import JoinUs from '@partials/JoinUs';
import styled from 'styled-components';
import ArrowRight from '@svg/icons/arrow--right.svg';
import ZilLogo from '@svg/zil-logo.svg';
import smoothScrollTo from '@zil/util/smoothScrollTo';

const StyledFooter = styled.footer`
  width: 100%;
  color: var(--white);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 3.88rem 5.6rem 1.38rem 6.27rem;

  ${Breakpoints.laptopDown} {
    padding: 3.72rem 4rem 1rem 4rem;
  }

  ${Breakpoints.tabletDown} {
    padding: 2.61rem 2.38rem 1.55rem 2.38rem;
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;

  ${Breakpoints.phoneOnly} {
    flex-direction: column;
  }
`;

const LogoLink = styled.a`
  display: block;
  width: 3.22rem;
  margin-bottom: 1.66rem;

  ${Breakpoints.tabletDown} {
    position: absolute;
    top: 2.61rem;
    right: 2.38rem;
  }
`;

const ContactContainer = styled.div`
  max-width: 10.33rem;
  margin-right: 5.27rem;
`;

const ContactData = styled.p`
  margin: 1.28rem 0;

  ${Breakpoints.tabletDown} {
    margin-top: 0;
  }
`;

const JoinUsContainer = styled.div`
  max-width: 12rem;
  padding-left: 3rem;
  margin-left: 3rem;
  position: relative;

  ${Breakpoints.laptopUp} {
    padding-bottom: 6.66rem;

    &:before {
      content: '';
      width: 1px;
      height: 9.89rem;
      background-color: var(--white);
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.3;
    }
  }

  ${Breakpoints.tabletDown} {
    max-width: 100%;
    width: 100%;
    padding: 1.5rem 0;
    margin: 0;
    margin-bottom: 5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const FooterSocialNetworksNav = styled(SocialNetworksNav)`
  position: absolute;

  ${Breakpoints.laptopUp} {
    right: 7.25rem;
    bottom: 2.5rem;
  }

  ${Breakpoints.tabletDown} {
    bottom: 1.68rem;
    left: 2.15rem;
  }
`;

const Copyright = styled.p`
  font-size: var(--size-xs);
  line-height: 1.875em;
  color: var(--light-gray);
  margin:0;

  ${Breakpoints.laptopUp} {
    width: calc(100% - 12rem);
    transform: translateY(-30%);
  }

  ${Breakpoints.tabletDown} {
    font-size: var(--size-xs);
  }
`;

const DesignedBy = styled.p`
  font-size: var(--size-xs);
  line-height: 1.875em;
  color: var(--light-gray);
  margin: 0;

  ${Breakpoints.laptopUp} {
    width: calc(100% - 12rem);
    transform: translateY(-100%);
  }

  ${Breakpoints.tabletDown} {
    font-size: var(--size-xs);
    margin-bottom:3.125rem;
  }
`;

const ScrollUpButton = styled.button.attrs({ type: 'button' })`
  width: 2.16rem;
  font-size: var(--size-xs);
  color: var(--white);
  text-transform: uppercase;
  text-align: left;
  padding: 0 0 2px 0;
  position: absolute;
  bottom: 2.49rem;
  right: 2.78rem;
  transition: color 350ms, border-color 350ms;

  && {
    border-bottom: 1px solid var(--white);
  }

  &:hover {
    color: var(--red);
    border-color: var(--red);
    transition: color 350ms, border-color 350ms;
  }

  ${Breakpoints.tabletDown} {
    bottom: 1.68rem;
  }
`;

const ScrollUpArrow = styled(ArrowRight)`
  width: 14px;
  height: 11px;
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: rotate(-90deg);
`;

const StyledLink = styled.a`
  font-weight: bold;
  line-height: 1.44em;
  white-space: nowrap;
  transition: color 350ms;

  &:hover {
    color: var(--red);
    transition: color 350ms;
  }
`;

const socialNetworks = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/company/zilholdings',
    color: 'light-gray',
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/channel/UCqBI3aD7cwnqxJxM4iVB3vQ',
    color: 'light-gray',
  },
  {
    name: 'spotify',
    url: 'https://open.spotify.com/user/w9kxibgwxl135cugl3ufwfl2x',
    color: 'light-gray',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/zil.global/',
    color: 'light-gray',
  },
];

const Footer = () => {
  const handleScrollUpButtonClick = () => smoothScrollTo(0, 1000);

  return (
    <StyledFooter>
      <ContentWrapper>
        <ContactContainer>
          <Link href="/" prefetch={false} passHref>
            <LogoLink>
              <ZilLogo draggable={false} aria-label="Zil" />
            </LogoLink>
          </Link>
          <ContactData>
            WhatsApp Support{' '}
            <a href="https://wa.me/17028615900" target="_blank" rel="noreferrer">
              <StyledLink>+1 (702) 861-5900</StyledLink>
            </a>
          </ContactData>
          <ContactData>
            Go to{' '}
            <Link href="/contact" prefetch={false} passHref>
              <StyledLink>contact form</StyledLink>
            </Link>{' '}
            or say hi{' '}
            <Link href="mailto:info@zil.global" passHref>
              <StyledLink>info@zil.global</StyledLink>
            </Link>
          </ContactData>
        </ContactContainer>
        <FullNav />
      </ContentWrapper>
      <JoinUsContainer>
        <JoinUs />
      </JoinUsContainer>
      <Copyright>
        Zil Global, Zil Distribution, Zil Network, and Publishing services are provided by Zil Distribution, LLC, a
        registered company.
        <br />
        All rights reserved.
        <br />
        Zil Media services are provided by Zil Media LLC, a registered company. All rights reserved.
        <br />
        30 N Gould St - Sheridan, WY 82801 - USA.
        <br />
        The logo and other Zil marks are trademarks by Zil Distribution, LLC and may be registered.
      </Copyright>

      <DesignedBy>
        Design by
        <a href="http://www.disruptive-design.com" target="_blank" rel="noreferrer">
          <StyledLink target="_blank"> Disruptive Agency</StyledLink>
        </a>
      </DesignedBy>
      <ScrollUpButton type="button" onClick={handleScrollUpButtonClick}>
        Go to top <ScrollUpArrow />
      </ScrollUpButton>
      <FooterSocialNetworksNav socialNetworks={socialNetworks} iconStyle="normalized" />
    </StyledFooter>
  );
};

export default Footer;
