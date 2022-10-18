import { useRef } from 'react';
import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import BackLight from '@svg/distribution/services-back-light.svg';
import { useAnimateIn } from '@zil/util/animations';

const Section = styled.section`
  position: relative;
  width: calc(67.22% + 8px);
  margin: auto;
  counter-reset: service;

  ${breakpoints.tabletDown} {
    width: 75%;
  }
`;

const ServiceList = styled.ol`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  ${breakpoints.tabletDown} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 7.78rem;
    gap: 8px 4rem;
  }
`;

const ServiceLabel = styled.span`
  &::before {
    position: absolute;
    bottom: 100%;
    display: block;
    color: var(--violet);
    counter-increment: service;
    content: '0' counter(service);
    font-size: var(--size-xs);
  }

  ${breakpoints.laptopUp} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.25rem;
    white-space: nowrap;
  }
`;

const ServiceBox = styled.div.attrs(({ title }) => ({
  title: null,
  children: <ServiceLabel>{title}</ServiceLabel>,
}))`
  display: block;
  position: relative;
  
  ${breakpoints.laptopUp} {
    width: calc((100% - 12px * 2) / 3);
    margin: 4px;

    &::before {
      content: '';
      background: var(--black);
      display: block;
      padding-top: 61.2%;
    }
  }
`;

const Service = styled.li.attrs(({ title }) => ({
  title: null,
  children: <ServiceBox title={title} />,
}))`
  display: contents;

  ${breakpoints.laptopUp} {
    &:nth-child(5n + 2)::after {
      content: '';
      width: 100%;
    }

    &:nth-child(5n + 2),
    &:nth-child(5n + 5),
    &:nth-child(5n + 1), 
    &:nth-child(5n + 3) {
      > div {
        &::after {
          content: '';
          background: var(--black);
          display: block;
          padding-top: 61.2%;
          position: absolute;
          top: 0;
          width: 100%;
        }
      }
    }

    &:nth-child(5n + 2),
    &:nth-child(5n + 5) {
      > div {
        &::after {
          left: calc(100% + 8px);
        }
      }
    }

    &:nth-child(5n + 1),
    &:nth-child(5n + 3) {
      > div {
        &::after {
          right: calc(100% + 8px);
        }
      }
    }
  }

  ${breakpoints.tabletDown} {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;

    &::before, &:nth-child(7)::after {
      content: '';
      position: absolute;
      width: 100vw;
      height: 100%;
      z-index: -1;
      border-radius: 3px;
      background: black;
    }

    &:nth-child(1)::before {
      right: -10vw;
    }

    &:nth-child(2)::before {
      left: calc(-4rem + 8px + 10vw);
    }

    &:nth-child(3)::before {
      right: -2.5vw;
    }

    &:nth-child(4)::before {
      left: calc(-4rem + 8px + 2.5vw);
    }

    &:nth-child(5)::before {
      right: -10vw;
    }

    &:nth-child(6)::before {
      left: calc(-4rem + 8px + 10vw);
    }

    &:nth-child(7) {
      &::before {
        right: -38vw;
      }

      &::after {
        left: calc(100% + 38vw + 8px);
      }
    }
  }
`;

const PositionedBackLight = styled(BackLight)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 120%;
  transform: translate(-50%, -50%);

  ${breakpoints.tabletDown} {
    width: 400%;
  }
`;

const Title = styled.h1`
  font-size: var(--size-xxl);
  text-align: center;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Services = () => {
  const titleRef = useRef();

  useAnimateIn(titleRef);

  return (
    <Section>
      <Title ref={titleRef}>Services</Title>
      <Wrapper>
        <PositionedBackLight />
        <ServiceList>
          <Service title="Project Funding" />
          <Service title="Music Distribution" />
          <Service title="Press Pitching" />
          <Service title="Dsp’s Strategy" />
          <Service title="Playlisting" />
          <Service title="Sync / Publishing" />
          <Service title="Rights Management" />
        </ServiceList>
      </Wrapper>
    </Section>
  );
};

export default Services;
