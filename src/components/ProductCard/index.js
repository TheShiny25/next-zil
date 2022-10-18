import styled from 'styled-components';
import Card from '@components/Card';
import Breakpoints from '@css/breakpoints';

const StyledCard = styled(Card)`
  padding-top: 127%;

  ${Breakpoints.laptopUp} {
    > * {
      transform: translateY(0);
      transition: transform 500ms;
    }

    &:hover {
      > * {
        transform: translateY(1.3rem);
        transition: transform 500ms;
      }
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid var(--dark-gray);
`;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 3rem;
  margin-top: 3rem;
  position: absolute;
  bottom: 3.83rem;
  left: 0;

  ${Breakpoints.tabletDown} {
    padding: 0 2.5rem;
  }
`;

const Name = styled.h1`
  color: var(--white);
  font-size: 1.22rem;
  margin-bottom: 0.72rem;
`;

const Description = styled.p`
  color: var(--white);
  font-size: var(--size-sm);
`;

const ProductCard = ({ className, item: product, children }) => {
  const slug = product.name
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');

  return (
    <StyledCard className={className} displacedBorder borderedOnHover href={product.href}>
      <Img src={`images/holding/product-${slug}.webp`} />
      <Wrapper>
        <Name>{product.name}</Name>
        <Description>{product.description}</Description>
        {product.children}
        {children}
      </Wrapper>
    </StyledCard>
  );
};

export default ProductCard;
