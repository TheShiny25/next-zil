import { useRef } from 'react';
import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import DiversificationImage from '@svg/network/diversification.svg';
import NetworksImage from '@svg/network/networks.svg';
import DealsImage from '@svg/network/deals.svg';
import InsuranceImage from '@svg/network/insurance.svg';
import PaymentsImage from '@svg/network/payments.svg';
import LibraryImage from '@svg/network/library.svg';
import { useAnimateIn } from '@zil/util/animations';
import Reason from './Reason';

const reasons = [
  {
    id: 'diversification',
    title: 'Diversification is the key',
    description: 'Are you operating multiple channels? we will link them to numerous MCNs, your company gets blinded, and you get all reports unified on our dashboard.',
    graphic: <DiversificationImage />,
  },
  {
    id: 'networks',
    title: <>Fully&nbsp;managed networks</>,
    description: 'Avoid unfair demonetizations joining our managed networks instead of regular affiliated CMS.',
    graphic: <NetworksImage />,
  },
  {
    id: 'deals',
    title: <>Get&nbsp;impossible deals</>,
    description: 'Getting good terms with MCNs is not easy unless you manage enough channels; luckly, that’s not a problem for you! Join our partnered networks with pre-agreed terms.',
    graphic: <DealsImage />,
  },
  {
    id: 'insurance',
    title: 'Assets insurance',
    description: 'In the worst scenario, we keep with you. We partially cover your revenues in case your channel gets terminated out of your control.',
    graphic: <InsuranceImage />,
  },
  {
    id: 'payments',
    title: 'Advanced payments',
    description: 'Money shouldn’t stop your projects; get your advanced monthly payment based on your latest revenues with 0% interest. ',
    graphic: <PaymentsImage />,
  },
  {
    id: 'library',
    title: <>Quality music&nbsp;library</>,
    description: 'Don\'t pay for thousands of bad songs library; instead, use our partnered record labels catalog, including the three major labels and top independents like Confession, Disco:wax, Lowly, Mind of a Genius, and more.',
    graphic: <LibraryImage />,
  },
];

const Wrapper = styled.div`
  width: 70vw;
  margin: auto;

  ${breakpoints.tabletDown} {
    width: 80vw;
  }
`;

const Title = styled.h1`
  font-size: var(--size-xl);
  text-align: center;
  padding: 11rem 0;

  ${breakpoints.phoneOnly} {
    padding: 5rem 0;
  }
`;

const WhyUs = () => {
  const titleRef = useRef();
  const reasonRefs = useRef([]);

  useAnimateIn(titleRef);
  useAnimateIn(reasonRefs.current, { triggerElement: 'each' });

  return (
    <Wrapper>
      <Title ref={titleRef}>Why you should work with us</Title>
      {reasons.map((reason, index) => (
        <Reason
          key={`reason-${reason.id}`}
          {...reason}
          isSwapped={index % 2 === 0}
          // eslint-disable-next-line no-return-assign
          ref={(el) => (reasonRefs.current[index] = el)}
        />
      ))}
    </Wrapper>
  );
};

export default WhyUs;
