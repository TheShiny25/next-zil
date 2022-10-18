import { useContext, useEffect, useState } from "react";
import Link from 'next/link';
import styled from 'styled-components';
import DashboardIcon from '@svg/icons/dashboard.svg';
import breakpoints, { rules as breakpointRules } from "@css/breakpoints";
import MobileMenuContext from '@contexts/MobileMenu';
import JoinUs from '@partials/JoinUs';
/**/
import FlechaDerecha from '../../../public/images/arrows/der.jpg';
import FlechaIzquierda from '../../../public/images/arrows/izq.jpg';

/**/


const navHiddenCss = `
  opacity: 0;
  transform: translateX(100%);
  pointer-events: none;
`;

const StyledSiteNav = styled.nav`
  color: ${({ theme: { foreground } }) => foreground};
  transition: background-color 500ms;
  overflow-y: auto;

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
  ${breakpoints.tabletDown} {
    margin-top: 0px;
  }
`
const ContentBlockDistribution = styled.div`
  display: flex;
  position: absolute;
  margin-top: 45px;
  background: linear-gradient(180deg, rgba(103, 103, 103, 0.06) 60%, rgba(0, 0, 0, 0.06) 100%);
  z-index: 100000;
  margin-left: -350px;
  /*GA*/
  backdrop-filter: blur(37.5px);
  ${breakpoints.tabletDown} {
    position: relative;
    margin: 0;
    background: #FFFFFF;
  }
`;


const ContentGeneralListDistribution = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 746px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 30px;
  /*GA*/
  ${breakpoints.tabletDown} {
    width: 100%;
  }
`;

const ColumnListDistribution = styled.div`
  width: 33.333%;
  /*GA*/
  ${breakpoints.tabletDown} {
    width: 100%;
    margin-top: 15px;
  }
`;

const LinkTitleSectionDistribution = styled.span`
  color: #4F4F4F;
  font-size: 16px;
  line-height: 38px;
  margin-top: 10px;
  display: inline-block;

  ${breakpoints.tabletDown} {
    line-height: 30px;
    color: #A5A5A5;
    font-size: ${({ small }) => (small ? '1rem' : '0.9rem')};
      //margin-top: ${({ small }) => (small ? '0.5rem' : 0)};
      //padding: 0 ${({ small }) => (small ? '2.4rem' : '2.33rem')};
  }
`;

const LinkListItemDistribution = styled.li`
  font-weight: 450;
  font-size: 18px;
  line-height: 34px;
  ${breakpoints.tabletDown} {
    line-height: 30px;
  }
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
  /*GA*/
  ${breakpoints.tabletDown} {
    /*GA SM*/
    ${props => (props.activeMenu ? "height:0;" : "height: auto")};
    /*GA EXIST*/
    ${props => (props.activeMenuPrincipal ? "border: 1px solid; margin:0 6%" : '')};
  }


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
      transition-property: 'color 500ms';
    }

    &:before {
      transform: translateZ(0);
      ${breakpoints.tabletDown} {
        //${props => (props.activeMenuPrincipal ? "content:'"+ codigoFlecha +"';margin-left:2%" : '')};
        ${props => (props.activeMenuPrincipal ? "background: url('"+FlechaIzquierda.src+"');background-repeat: no-repeat;background-position: left;background-position-x: 15px;":"")};
      }

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

const codigoFlecha= '\uD83E\uDC60';

const BloqueTrasparente = styled.div`
  ${breakpoints.tabletDown} {
    height: 40px;
    position: fixed;
    display: inline-block;
    width: 100%;
    background-color: white;
    bottom: 60px;
    opacity: 0.9;
  }

`;

const ImgFlecha = styled.img`
    width: 13px;
    height: 10px;
    position: absolute;
    top: 6px;
    right: -20px;

`;
const StyledDashboardIcon = styled(DashboardIcon)`
  display: inline-block;
  margin-right: 5px;
  height: 1rem;
  transform: translateY(1px);

  ${breakpoints.tabletDown} {
    margin-right: 0;
    margin-left: 0.89rem;
    /*margin-top: 2px;*/
    margin-top:-10px;
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
  &.footer{
    //background: red;
    //position: fixed;
    //bottom: 0;
  }
`;

const StyledLink = styled.a`
  &:hover {
    color: #5874FF;
  }
`;

const DashboardInner = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 5000000;
  width: 100%;
  ${breakpoints.tabletDown} {
    width: 90%;
    margin-left: 4.5%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
  }
`;

const ItemDashboard =  styled.div`
  ${breakpoints.tabletDown} {
    position: relative;
  }
`;


const MobileOnlyLinks = ({isShown}) => {
  const { isOpened: isMobileMenuOpened } = useContext(MobileMenuContext);

  return (
    <>
      {
        !isShown ?
          <>
            <Link href="/blog-faq" passHref>
              <ItemLink small>Blog &amp; FAQ</ItemLink>
            </Link>

            <JoinUsBox className={'footer'}/>
          </>:''
      }
    </>
  );
}

const SiteNav = ({ className, name }) => {
  const { isOpened: isMobileMenuOpened } = useContext(MobileMenuContext);
  const [isShown, setIsShown] = useState(false);
  const [menu, setMenu] = useState([]);
  const tabletMaxWidth = 1024;
  /**/
  const [width, setWidth] = useState(window.innerWidth);
  const [isActiveSubMenu,setIsActiveSubMenu] = useState(false);

  const handleWindowSizeChange = () =>{
    //setWidth(window.innerWidth);
  }

  const valMenuSub = () => {
    setIsShown(!isShown);
    setIsActiveSubMenu(!isActiveSubMenu);
  }
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

          });
        } else {
          setMenu([]);
        }
      });

  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  },[]);

  useEffect(() => {
    if(isMobileMenuOpened){
      setIsShown(false);
      setIsActiveSubMenu(false);
    } else {

    }
  },[isMobileMenuOpened]);

  let isMobile = (width <= 1024);

  return (
    <StyledSiteNav className={className} isMobileMenuOpened={isMobileMenuOpened}>
      <LinkList>
        {['Global', 'Distribution', 'Network', 'Media', 'Contact'].map((link, index) => (
          <LinkListItem key={`site-nav-link-${index}`}>

            {link === 'Distribution' && isMobileMenuOpened === true?
              <div>
                <ItemLink activeMenuPrincipal={isActiveSubMenu} onClick={valMenuSub}>{link}</ItemLink>
              </div>
              :
              <Link href={`/${link.toLowerCase()}`} prefetch={false} passHref>
                {link === 'Distribution'?
                  <ItemLink onMouseEnter={() => setIsShown(true)}>{link}</ItemLink>:
                  <ItemLink activeMenu={isActiveSubMenu}>{link}</ItemLink>}
              </Link>
            }

            { menu.length > 0 && link === 'Distribution' && isShown ?
              <ContentBlockDistribution className={'fade-in-menu'} onMouseLeave={() => setIsShown(false)}>
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
                                      <Link href={`/distribution/${itemSubMenu.post_name}`} passHref>
                                        <StyledLink>
                                          {itemSubMenu.post_title}
                                        </StyledLink>
                                      </Link>
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
        { isMobileMenuOpened == true ?
          !isShown ?<LinkListItem>
            <Link href="https://www.zil.gl/" passHref>
              <ItemLink>
                <StyledDashboardIcon /> Dashboard
              </ItemLink>
            </Link>
          </LinkListItem>:''
          :
          <LinkListItem>
            <Link href="https://www.zil.gl/" passHref>
              <ItemLink>
                <StyledDashboardIcon /> Dashboard
              </ItemLink>
            </Link>
          </LinkListItem>
        }

        <DashboardInner>
          {isShown?
            <BloqueTrasparente />:''
          }
          { isShown ?
            <ItemDashboard>
              Dashboard  <ImgFlecha src={FlechaDerecha.src} alt=""/>
            </ItemDashboard>

            : ''
          }
          {isShown ?
            <ItemDashboard>
              Help Center
            </ItemDashboard>
            :
            ''}

        </DashboardInner>
      </LinkList>
      {isMobileMenuOpened && <MobileOnlyLinks isShown={isShown} />}

    </StyledSiteNav>
  );
};

export default SiteNav;
