import styled from 'styled-components';
import InstagramIcon from '@svg/icons/instagram.svg';
import SpotifyIcon from '@svg/icons/spotify.svg';
import LinkedinIcon from '@svg/icons/linkedin.svg';
import YouTubeIcon from '@svg/icons/youtube.svg';
import NormalizedInstagramIcon from '@svg/icons/instagram--normalized.svg';
import NormalizedSpotifyIcon from '@svg/icons/spotify--normalized.svg';
import NormalizedLinkedinIcon from '@svg/icons/linkedin--normalized.svg';
import NormalizedYouTubeIcon from '@svg/icons/youtube--normalized.svg';

const Icon = styled.svg`
  height: 100%;
`;

const icons = {
  instagram: InstagramIcon,
  spotify: SpotifyIcon,
  linkedin: LinkedinIcon,
  youtube: YouTubeIcon,
};

const normalizedIcons = {
  instagram: NormalizedInstagramIcon,
  spotify: NormalizedSpotifyIcon,
  linkedin: NormalizedLinkedinIcon,
  youtube: NormalizedYouTubeIcon,
};

const StyledSocialNetworksNav = styled.nav`
  display: inline-block;
`;

const LinkList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const LinkListItem = styled.li`
  display: flex;
  align-items: center;
  padding: var(--social-networks-nav-padding, 0);
`;

const ItemLink = styled.a.attrs(({ socialNetwork, iconStyle }) => ({
  children: <Icon as={iconStyle === 'normalized' ? normalizedIcons[socialNetwork.name] : icons[socialNetwork.name]} />,
}))`
  width: ${({ socialNetwork }) => socialNetwork.width || '1.5rem'};
  height: ${({ socialNetwork }) => socialNetwork.height || '1.5rem'};
  color: var(--${({ socialNetwork }) => socialNetwork.color});
  display: flex;
  align-items: center;

  &:hover {
    color: var(--red);
  }
`;

const SocialNetworksNav = ({ className, socialNetworks, iconStyle = 'fit' }) => {
  return (
    <StyledSocialNetworksNav className={className} socialNetworksLength={socialNetworks.length}>
      <LinkList>
        {socialNetworks.map((socialNetwork, index) => (
          <LinkListItem key={`social-networks-nav-link-${index}`}>
            <a href={socialNetwork.url} target="_blank" rel="noreferrer">
              <ItemLink socialNetwork={socialNetwork} iconStyle={iconStyle} />
            </a>
          </LinkListItem>
        ))}
      </LinkList>
    </StyledSocialNetworksNav>
  );
};

export default SocialNetworksNav;
