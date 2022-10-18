import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import DeviceContext from '@contexts/Device';
import CardsSlider from '@components/CardsSlider';
import ProductCard from '@components/ProductCard';
import SocialNetworksNav from '@components/SocialNetworksNav';
import { useContext } from 'react';

const StyledProductList = styled.section`
  margin-top: -4rem;
  margin-bottom: 4.38rem;

  ${breakpoints.laptopUp} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.39rem;
    padding: 0 2.78rem;
  }
`;

const ProductLinkButton = styled.a`
  background: var(--white);
  color: var(--black);
  font-size: var(--size-xs);
  font-weight: bold;
  text-transform: uppercase;
  padding: 3px 1rem;
  margin-top: 1.33rem;
  display: inline-block;
`;

const ProductSocialNetworksNav = styled(SocialNetworksNav)`
  --social-networks-nav-padding: 0 0.45rem;
  margin: 1.33rem auto 0 auto;
`;

const ProductCardsSliderWrapper = styled.section`
  margin-bottom: 2.2rem;
`;

const socialNetworks = [
  {
    name: 'youtube',
    url: '#',
    color: 'white',
    width: '32px',
    height: '22px',
  },
  {
    name: 'spotify',
    url: '#',
    color: 'white',
    width: '27px',
    height: '27px',
  },
];

const products = [
  {
    name: 'MarketWise',
    description:( 
      <>
      Marketing Agency  <br /> Marketing is not expensive...
      </>
    ),
    children: (
      <ProductLinkButton href="https://marketwise.io/" target="_blank">
        Site
      </ProductLinkButton>
    ),
    href: 'https://marketwise.io/',
  },
  {
    name: 'THR',
    description: (
      <>
        Music Channel <br /> Tropical House Records, your path to Paradise.
      </>
    ),
    children: <ProductSocialNetworksNav socialNetworks={socialNetworks} />,
    href: 'https://www.youtube.com/channel/UC9gx9GubfPD0gK8D32INA2w',
  },
  {
    name: 'Chillifi',
    description: (
      <>
        Music production <br /> Making each little moment more enjoyable.
      </>
    ),
    children: <ProductSocialNetworksNav socialNetworks={socialNetworks} />,
    href: 'https://open.spotify.com/artist/4qwRGjsSVkgnqlNkAQACC8?si=G1eja0_7RyayzIhD2CKlLA&dl_branch=1',
  },
  {
    name: 'JustVocalss',
    description: (
      <>
        Music TikTok <br />  Your favorite songs but only vocals.
      </>
    ),
    children: <ProductSocialNetworksNav socialNetworks={socialNetworks} />,
    href: 'https://www.tiktok.com/@justvocalss',
  },
];

const ProductList = () => {
  const device = useContext(DeviceContext);

  return device === 'phone' || device === 'tablet' ? (
    <ProductCardsSliderWrapper>
      <CardsSlider cards={products} model={ProductCard} />
    </ProductCardsSliderWrapper>
  ) : (
    <StyledProductList>
      {products.map((product, index) => (
        <ProductCard key={`product-card-${index}`} item={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
