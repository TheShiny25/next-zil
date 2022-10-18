import { useRef } from 'react';
import styled from 'styled-components';
import Breakpoints from '@css/breakpoints';
import CardsSlider from '@components/CardsSlider';
import EventCard from '@components/EventCard';
import { useAnimateIn } from '@zil/util/animations';
import { useGet } from '@zil/util/request';

const StyledLatestNews = styled.section`
  padding: 8.33rem 0 8.33rem 0;

  ${Breakpoints.tabletDown} {
    padding: 2.22rem 0;
    overflow: hidden;
  }
`;

const Title = styled.h1`
  font-size: var(--size-xxxl);
  margin: 0 0 3.77rem 9rem;

  ${Breakpoints.tabletDown} {
    margin: 0 0 1.55rem 2.22rem;
  }
`;

const LatestNewsData = ({ newsItems }) => {
  const titleRef = useRef();
  const sliderRef = useRef();

  useAnimateIn(titleRef);
  useAnimateIn(sliderRef);

  return (
    <StyledLatestNews>
      <Title ref={titleRef}>Latest News</Title>
      <CardsSlider cards={newsItems} model={EventCard} ref={sliderRef} autoplay />
    </StyledLatestNews>
  );
};

const LatestNews = () => {
  const newsItems = useGet('news', (json) => json.newsItems);
  const orderedNews = newsItems?.sort((a, b) => new Date(b.date) - new Date(a.date));
  return orderedNews ? <LatestNewsData newsItems={orderedNews} /> : null;
};

export default LatestNews;
