import styled from 'styled-components';
import CapsText from '@components/CapsText';
import Card from '@components/Card';

const StyledEventCard = styled(Card)`
  background: var(--linear-black-gradient);
  padding: 2.16rem 2rem 5rem 2rem;
  position: relative;

  &:hover {
    background: var(--linear-red-gradient);
  }
`;

const Name = styled.h1`
  font-size: 1.44rem;
  line-height: 1.23em;
  margin: 0.5rem 0 0.85rem 0;
`;

const Category = styled(CapsText)`
  font-size: 0.77rem;
  line-height: 1.85em;
  font-weight: normal;
`;

const Date = styled.span`
  font-size: 0.77rem;
  font-weight: 900;
  color: var(--gray);
  line-height: 1.85em;
  letter-spacing: 0.35em;
  display: block;
  text-transform: uppercase;
`;

const Organizer = styled.span`
  font-size: 0.77rem;
  font-weight: 900;
  color: var(--gray);
  line-height: 1.85em;
  letter-spacing: 0.35em;
  display: block;
  text-transform: uppercase;
`;

const EventCard = ({ className, item: event }) => {
  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new window.Date(event.date));

  return (
    <StyledEventCard className={className} href={event.url}>
      <Category>News</Category>
      <Name>{event.title}</Name>
      <Date>{date}</Date>
      <Organizer>By {event.author}</Organizer>
    </StyledEventCard>
  );
};

export default EventCard;
