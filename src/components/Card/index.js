import { useRef, useEffect, useContext, forwardRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import styled, { css } from 'styled-components';
import Breakpoints from '@css/breakpoints';
import CursorContext from '@contexts/Cursor';
import DeviceContext from '@contexts/Device';

const StyledCard = styled.article`
  position: relative;
  display: inline-block;

  > * {
    pointer-events: none;
  }

  ${Breakpoints.laptopUp} {
    ${({ borderedOnHover }) =>
      borderedOnHover &&
      css`
        &:before {
          content: '';
          width: 100%;
          height: 100%;
          border: 1px solid var(--red);
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
          pointer-events: none;
          transform: translate(0, 0);
          opacity: 0;
          transition: opacity 350ms, transform 500ms;
        }
      `}
  }

  &:hover {
    cursor: none;

    &:before {
      transform: translate(
        ${({ displacedBorder }) => (displacedBorder ? '0.6rem' : 0)},
        ${({ displacedBorder }) => (displacedBorder ? '-1.3rem' : 0)}
      );
      opacity: 1;
      transition: opacity 350ms, transform 500ms;
    }
  }
`;

const Card = forwardRef(({ className, children, displacedBorder, borderedOnHover, href }, ref) => {
  const device = useContext(DeviceContext);
  const cardRef = useRef();
  const cursorRef = useContext(CursorContext);

  useEffect(() => {
    let initCursor = false;
    if (ref) ref.current = cardRef.current;

    cardRef.current.onmouseenter = () => {
      if (!initCursor && device !== 'phone' && device !== 'tablet') {
        gsap.to(cursorRef.current, {
          opacity: 1,
          duration: 0.3,
        });
        initCursor = true;
      }
    };

    cardRef.current.onmousemove = (e) => {
      const mouseX = e.clientX - 10;
      const mouseY = e.clientY - 10;

      gsap.to(cursorRef.current, {
        top: `${mouseY}px`,
        left: `${mouseX}px`,
        duration: 0,
      });
    };

    cardRef.current.onmouseout = () => {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.3,
      });
      initCursor = false;
    };
  }, [device, cursorRef, ref]);

  const isLink = !!href;
  const isExternal = isLink && href[0] !== '/';
  const isInternal = isLink && !isExternal;
  const extraProps = isExternal ? { as: 'a', target: '_blank', href } : isInternal ? { as: 'a' } : {};
  const card = (
    <StyledCard
      className={className}
      displacedBorder={displacedBorder}
      borderedOnHover={borderedOnHover}
      ref={cardRef}
      {...extraProps}
    >
      {children}
    </StyledCard>
  );

  return isInternal ? (
    <Link href={href} prefetch={false} passHref>
      {card}
    </Link>
  ) : (
    card
  );
});

export default Card;
