import { useContext, useEffect, useState } from "react";
import Link from 'next/link';
import styled from 'styled-components';
import DashboardIcon from '@svg/icons/dashboard.svg';
import breakpoints from '@css/breakpoints';
import MobileMenuContext from '@contexts/MobileMenu';
import JoinUs from '@partials/JoinUs';

const navHiddenCss = `
  opacity: 0;
  transform: translateX(100%);
  pointer-events: none;
`;

const StyledSiteNav = styled.nav`
  color: ${({ theme: { foreground } }) => foreground};
  transition: background-color 500ms;

  ${breakpoints.tabletDown} {
    color: var(--black);
    background-color: var(--white);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    padding-top: 3.89rem;
    transition: background-color 500ms 1s, transform 500ms, opacity 350ms;
    ${({ isMobileMenuOpened }) => !isMobileMenuOpened && navHiddenCss}
  }
`;

const LinkListDistribution = styled.ul`
  margin-top: 20px;
`
const ContentBlockDistribution = styled.div`
  display: flex;
  position: absolute;
  margin-top: 45px;
  background: linear-gradient(180deg, rgba(103, 103, 103, 0.06) 0%, rgba(0, 0, 0, 0.06) 100%);
  z-index: 100000;
  margin-left: -350px;
  backdrop-filter: blur(50px);
`;


const ContentGeneralListDistribution = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 746px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 30px;
`;

const ColumnListDistribution = styled.div`
  width: 33.333%;
`;

const LinkTitleSectionDistribution = styled.span`
  color: #4F4F4F;
  font-size: 16px;
  line-height: 38px;
  margin-top: 10px;
  display: inline-block;
`;

const LinkListItemDistribution = styled.li`
  font-weight: 450;
  font-size: 18px;
  line-height: 34px;
`

const LinkList = styled.ul`
  display: flex;

  ${breakpoints.tabletDown} {
    flex-direction: column;
  }
`;

const LinkListItem = styled.li`
  margin-left: 0.5rem;

  ${breakpoints.tabletDown} {
    margin: 0;
  }
`;

const ItemLink = styled.a`
  padding: 1px 0.5rem;
  display: inline-flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${({ theme: { foreground } }) => foreground};
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: left;
    transform: translate3d(-103%, 0, 0);
    transition: transform 0.7s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    z-index: -1;
  }

  ${({ isActive }) => isActive && '&,'}
  &:hover {
    color: ${({ theme: { background } }) => background};
    transition: color 1s cubic-bezier(0.26, 1.04, 0.54, 1);

    svg path {
      color: ${({ theme: { background } }) => background};
      transition: color 500ms;
    }

    &:before {
      transform: translateZ(0);
    }
  }

  ${breakpoints.tabletDown} {
    font-size: var(--size-${({ small }) => (small ? 'md' : 'xxxl')});
    margin-top: ${({ small }) => (small ? '0.5rem' : 0)};
    font-weight: 500;
    line-height: 1.5em;
    padding: 0 ${({ small }) => (small ? '2.4rem' : '2.33rem')};
  }
`;

const StyledDashboardIcon = styled(DashboardIcon)`
  display: inline-block;
  margin-right: 5px;
  height: 1rem;
  transform: translateY(1px);

  ${breakpoints.tabletDown} {
    margin-right: 0;
    margin-left: 0.89rem;
    margin-top: 2px;
    width: 1.5rem;
    height: 1.5rem;
    order: 2;
  }
`;

const JoinUsBox = styled.div.attrs({ children: <JoinUs /> })`
  --join-us-label-color: var(--black);
  --join-us-label-text-color: var(--white);
  padding: 0 2.33rem;
  max-width: 18rem;

  &::before {
    content: '';
    display: block;
    border-top: 1px solid var(--black);
    width: 100%;
    margin: 1.33rem 0;
    opacity: 0.05;
  }
`;

const MobileOnlyLinks = () => (
  <>
    <Link href="/blog-faq" passHref>
      <ItemLink small>Blog &amp; FAQ</ItemLink>
    </Link>
    <JoinUsBox />
  </>
);

const SiteNav = ({ className }) => {
  const { isOpened: isMobileMenuOpened } = useContext(MobileMenuContext);
  const [isShown, setIsShown] = useState(false);
  const [menu, setMenu] = useState([]);

  useEffect(function(){

    fetch(`https://help.zil.gl/wp-json/v1/menu`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(data => {
        const status = data.response;
        if(status === 'OK'){
          setMenu(data.data)
          menu.map(function(item){
            console.log(item);
          });
        } else {
          setMenu([]);
        }
      });
  }, []);
  console.log(menu);
  return (
    <StyledSiteNav className={className} isMobileMenuOpened={isMobileMenuOpened}>
      <LinkList>
        {['Global', 'Distribution', 'Network', 'Media', 'Contact'].map((link, index) => (
          <LinkListItem key={`site-nav-link-${index}`}>
            <Link href={`/${link.toLowerCase()}`} prefetch={false} passHref>
              {link === 'Distribution' ?
                <ItemLink onMouseEnter={() => setIsShown(true)}>{link}</ItemLink>:
                <ItemLink >{link}</ItemLink>}
            </Link>
            { menu.length > 0 && link === 'Distribution' && isShown ?
              <ContentBlockDistribution onMouseLeave={() => setIsShown(false)}>
                <ContentGeneralListDistribution>
                  {
                    menu.map((item, index) =>
                      (
                        <ColumnListDistribution key={`column-nav-link-${index}`}>
                          <LinkTitleSectionDistribution>{item.post_title}</LinkTitleSectionDistribution>
                          {
                            item.sub_menu.length > 0 ?
                            <LinkListDistribution>
                              {
                                item.sub_menu.map((itemSubMenu, indexSubMenu) => (
                                   <LinkListItemDistribution key={`column-nav-link-item-${indexSubMenu}`}>
                                     <Link href={`/distribution/${itemSubMenu.post_name}`} >{itemSubMenu.post_title}</Link>
                                   </LinkListItemDistribution>
                                ))
                              }
                            </LinkListDistribution>
                            :''
                          }
                        </ColumnListDistribution>
                      )
                    )
                  }
                </ContentGeneralListDistribution>
              </ContentBlockDistribution> : ''
            }
          </LinkListItem>
        ))}
        <LinkListItem>
          <Link href="https://www.zil.gl/" passHref>
            <ItemLink>
              <StyledDashboardIcon /> Dashboard
            </ItemLink>
          </Link>
        </LinkListItem>
      </LinkList>
      {isMobileMenuOpened && <MobileOnlyLinks />}
    </StyledSiteNav>
  );
};

export default SiteNav;
