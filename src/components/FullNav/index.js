import Link from 'next/link';
import DeviceContext from '@contexts/Device';
import Breakpoints from '@css/breakpoints';
import { useContext } from 'react';
import styled from 'styled-components';

// Styles
const StyledFullNav = styled.nav`
  flex-grow: 1;

  ${Breakpoints.phoneOnly} {
    margin: 1rem 0 2rem 0;
  }
`;

const LinkList = styled.ul`
  display: flex;

  ${Breakpoints.laptopUp} {
    flex-direction: column;
  }
  ${Breakpoints.tabletDown} {
    flex-direction: column;
  }
`;

const LinkListItem = styled.li`
  color: var(--light-gray);
  line-height: 2.11rem;
  transition: color 500ms;

  &:hover {
    color: var(--red);
    transition: color 500ms;
  }

  ${Breakpoints.tabletDown} {
    
    &:last-child:after {
      content: none;
    }
  }
`;

const LinkGroupList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const LinkGroupName = styled.span`
  text-transform: uppercase;
  line-height: 2.11rem;
`;

const linkGroups = [
  {
    name: 'Useful Links',
    links: [
      ['Dashboard login', 'https://www.zil.gl/'],
      ['Help Center', 'https://help.zil.gl/'],
      ['Brand Resources', 'https://help.zil.gl/knowledge-base/brand-identity-resources/'],
      ['Create an Account', 'https://help.zil.gl/knowledge-base/how-can-i-create-an-account/'],
    ],
  },
  {
    name: 'Services',
    links: [
      ['Global', '/'],
      ['Distribution', '/distribution'],
      ['Network', '/network'],
      ['Media', '/media'],
    ],
  },
  {
    name: 'Products',
    links: [
      ['MarketWise', 'https://marketwise.io/'],
      ['Tropical Media Ventures', 'https://www.youtube.com/channel/UC9gx9GubfPD0gK8D32INA2w'],
      ['Chill-fi', 'https://open.spotify.com/artist/4qwRGjsSVkgnqlNkAQACC8?si=G1eja0_7RyayzIhD2CKlLA&dl_branch=1'],
      ['Eric Clapman', 'https://www.youtube.com/user/ericclapman'],
    ],
  },
];

const phoneLinkGroups = [
  {
    name: 'Useful Links',
    links: [
      ['Dashboard login', 'https://www.zil.gl/'],
      ['Help center', 'https://help.zil.gl/'],
      ['Create an Account','https://help.zil.gl/knowledge-base/brand-identity-resources/'],
      ['Brand Resources','https://help.zil.gl/knowledge-base/how-can-i-create-an-account/']
    ],
  },
];

const FullNav = () => {
  const device = useContext(DeviceContext);
  const deviceLinkGroups = device === 'phone' || device === 'tablet' ? phoneLinkGroups : linkGroups;

  return (
    <StyledFullNav className="full-nav">
      <LinkGroupList>
        {deviceLinkGroups.map((groupLink, index) => (
          <li key={`full-nav-group-${index}`}>
            <LinkGroupName>{groupLink.name}</LinkGroupName>
            <LinkList>
              {groupLink.links.map(([link, url], index) => (
                <LinkListItem key={`full-nav-link-${index}`}>
                  <Link href={url} prefetch={false} passHref>
                    <a>{link}</a>
                  </Link>
                </LinkListItem>
              ))}
            </LinkList>
          </li>
        ))}
      </LinkGroupList>
    </StyledFullNav>
  );
};

export default FullNav;
