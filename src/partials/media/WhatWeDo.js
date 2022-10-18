import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import Image from 'next/image';
import Breakpoints from '@css/breakpoints';
import ChatLight from '@svg/media/chat-light.svg';
import { useAnimateIn } from '@zil/util/animations';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  color: var(--white);
  padding: 7.5rem 5.11rem 7.5rem 5.11rem;
  position: relative;
  overflow: hidden;

  ${Breakpoints.tabletDown} {
    padding: 4.44rem 1rem 4.44rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: var(--size-xxxl);
  text-align: center;
  color: white;
  margin-bottom: 5.3rem;
`;

const ChatGroup = styled.div`
  margin-bottom: 3rem;
`;

const ChatLine = styled.div`
  display: flex;
  margin: 0 auto 1rem auto;

  ${Breakpoints.laptopUp} {
    width: 45rem;
  }
`;

const ChatMessage = styled.span`
  display: inline-block;
  border-radius: 1rem;
  font-size: 1.66rem;
  padding: 1.25rem 1.5rem;

  ${Breakpoints.tabletDown} {
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  ${Breakpoints.phoneOnly} {
    font-size: 0.9rem;
  }
`;

const ZilMessage = styled(ChatMessage)`
  border: 1px solid #717171;
`;

const GuestMessage = styled(ChatMessage)`
  background-color: white;
  color: black;
  margin-left: 28rem;

  ${Breakpoints.tabletDown} {
    margin-left: auto;
  }
`;


const UpperChatLight = styled(ChatLight)`
  position: absolute;
  left: 0;
  top: 0;
  width: 60vw;
  transform: translateX(-50%);

  ${Breakpoints.tabletDown} {
    width: 118vw;
    opacity: 0.6;
  }
`;

const LowerChatLight = styled(ChatLight)`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 60vw;
  transform: translateX(50%);

  ${Breakpoints.tabletDown} {
    width: 118vw;
    opacity: 0.6;
  }
`;

const WhatWeDo = () => {
  const titleRef = useRef();
  const chatGroup1Ref = useRef();
  const chatGroup2Ref = useRef();
  const chatGroup3Ref = useRef();
  const chatLineRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  useAnimateIn(titleRef);

  useEffect(() => {
    const anims = [
      [chatGroup1Ref, chatLineRefs.slice(0, 4)],
      [chatGroup2Ref, chatLineRefs.slice(4, 9)],
      [chatGroup3Ref, chatLineRefs.slice(9, 10)],
    ].map(([groupRef, groupLineRefs]) => {
      return gsap.from(
        groupLineRefs.map((ref) => ref.current),
        {
          scrollTrigger: {
            trigger: groupRef.current,
            start: 'top 50%',
          },
          opacity: 0,
          yPercent: 30,
          duration: 0.5,
          stagger: 0.35,
        }
      );
    });

    return () => anims.forEach((anim) => anim.kill());
  });

  return (
    <Wrapper>
      <UpperChatLight />
      <LowerChatLight />
      <Title ref={titleRef}>What We Do?</Title>
      <ChatGroup ref={chatGroup1Ref}>
        <ChatLine ref={chatLineRefs[0]}>
          <ZilMessage>
            Collaboration opportunities 🤝
          </ZilMessage>
        </ChatLine>
        <ChatLine ref={chatLineRefs[1]}>
          <ZilMessage>
            Connection with labels  ✍️
          </ZilMessage>
        </ChatLine>
        <ChatLine ref={chatLineRefs[2]}>
          <ZilMessage>
            Legal administration  📄
          </ZilMessage>
        </ChatLine>
        <ChatLine ref={chatLineRefs[3]}>
          <GuestMessage>
           Sounds good!️
          </GuestMessage>
        </ChatLine>
      </ChatGroup>
      <ChatGroup ref={chatGroup2Ref}>
        <ChatLine ref={chatLineRefs[4]}>
          <ZilMessage>Also,</ZilMessage>
        </ChatLine>
        <ChatLine ref={chatLineRefs[5]}>
          <ZilMessage>
            Advanced payments  💵️
          </ZilMessage>
        </ChatLine>
        <ChatLine ref={chatLineRefs[6]}>
          <ZilMessage>
            Music publishing  📻️
          </ZilMessage>
        </ChatLine>
        <ChatLine ref={chatLineRefs[7]}>
          <ZilMessage>
            Plus all Zil Global solutions! 📢️
          </ZilMessage>
        </ChatLine>
        <ChatLine ref={chatLineRefs[8]}>
          <GuestMessage>
            Holy S%#t!️
          </GuestMessage>
        </ChatLine>
      </ChatGroup>
      <ChatGroup ref={chatGroup3Ref}>
        <ChatLine ref={chatLineRefs[9]}>
          <ZilMessage>
            Yup️
          </ZilMessage>
        </ChatLine>
      </ChatGroup>
    </Wrapper>
  );
};

export default WhatWeDo;
