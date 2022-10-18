import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  height: 100%;
`;

const MenuIcon = ({ cross = false }) => {
  const topLineRef = useRef();
  const midLineRef = useRef();
  const botLineRef = useRef();

  useEffect(() => {
    if (cross) {
      gsap.to(topLineRef.current, {
        rotate: '45deg',
        translateX: '14.644661%',
        translateY: '70%',
      });
      gsap.to(botLineRef.current, {
        rotate: '-45deg',
        translateX: '14.644661%',
        translateY: '-70%',
      });
      gsap.to(midLineRef.current, {
        opacity: 0,
      });
    } else {
      gsap.to([topLineRef.current, botLineRef.current], {
        rotate: 0,
        translateX: 0,
        translateY: 0,
      });
      gsap.to(midLineRef.current, {
        opacity: 1,
      });
    }
  }, [cross, midLineRef]);

  return (
    <Icon viewBox="0 0 23 19" xmlns="http://www.w3.org/2000/svg">
      <path ref={topLineRef} d="M0 0H23V1H0V0Z" fill="currentColor" />
      <path ref={botLineRef} d="M0 18H23V19H0V18Z" fill="currentColor" />
      <path ref={midLineRef} d="M20 9H3V10H20V9Z" fill="currentColor" />
    </Icon>
  );
};

const MenuButton = styled.button.attrs(({ cross, ...rest }) => ({
  type: 'button',
  children: <MenuIcon cross={cross} />,
  ...rest,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.28rem;
  color: inherit;
  box-sizing: content-box;
`;

export default MenuButton;
