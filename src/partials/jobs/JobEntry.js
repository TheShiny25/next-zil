import useCollapse from 'react-collapsed';
import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import CrossIcon from '@svg/icons/cross.svg';
import BubbleIcon from '@svg/icons/bubble.svg';
import ClockIcon from '@svg/icons/clock.svg';

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;

  ${({ isExpanded }) => isExpanded && '&,'}
  &:hover {
    --job-entry-title-color: var(--red);
  }

  ${breakpoints.phoneOnly} {
    margin-bottom: 0.5rem;
  }
`;

const Header = styled.header`
  display: flex;
  padding: 1.1rem 1.2rem 1.1rem 1.61rem;
  border-radius: calc(5rem / 18);
  outline: none;

  ${({ isExpanded }) => isExpanded && '&,'}
  &:hover {
    background: var(--ultra-light-gray);
  }

  > * {
    flex-basis: 0;
    flex-grow: 1;
  }

  ${breakpoints.phoneOnly} {
    position: relative;
    flex-wrap: wrap;
    padding: 0.66rem 5vw 0.78rem 5vw;
  }
`;

const Title = styled.h1`
  color: var(--job-entry-title-color, var(--black));
  font-weight: 500;

  ${breakpoints.phoneOnly} {
    flex-basis: 100%;
    margin-bottom: 0.25rem;
  }
`;

const Feature = styled.div.attrs(({ children, icon }) => ({
  children: (
    <>
      {icon}
      {children}
    </>
  ),
}))`
  color: var(--gray);

  > svg {
    display: inline-block;
    vertical-align: bottom;
    width: 1rem;
    height: 1rem;
    margin-right: 0.2rem;
  }

  ${breakpoints.phoneOnly} {
    white-space: nowrap;
    flex-grow: 0;
    font-size: 0.8rem;
    margin-right: 1rem;

    > svg {
      margin-right: 0;
    }
  }
`;

const LanguageRequirements = ({ children }) => <Feature icon={<BubbleIcon />}>{children}</Feature>;

const TimeSpan = ({ children }) => <Feature icon={<ClockIcon />}>{children}</Feature>;

const StatusIcon = styled.span.attrs({ children: <CrossIcon /> })`
  color: ${({ isExpanded }) => (isExpanded ? 'var(--black)' : 'var(--job-entry-title-color)')};
  flex-grow: 0;
  transform: ${({ isExpanded }) => (isExpanded ? 'none' : 'rotate(45deg)')};
  transition: transform 180ms;

  ${breakpoints.phoneOnly} {
    position: absolute;
    right: 5vw;
    top: 0.78rem;
  }
`;

const JobDescription = styled.div`
  background: var(--ultra-light-gray);
  padding: 1rem 5.89rem 1.65rem 1.65rem;
  line-height: 1.5em;

  ${breakpoints.phoneOnly} {
    padding: 0.66rem 5vw 0.78rem 5vw;
  }
`;

const DescriptionTitle = styled.h3`
  font-weight: bold;
  font-size: 98%;
`;

const DescriptionSection = styled.section`
  margin-bottom: 2rem;
`;

const Description = ({ title, text }) => (
  <DescriptionSection>
    <DescriptionTitle>{title}</DescriptionTitle>
    <p>{text}</p>
  </DescriptionSection>
);

const ApplyLink = styled.a`
  color: var(--red);
`;

const JobEntry = ({ id, name, lang, time, descriptions, link }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <StyledArticle isExpanded={isExpanded}>
      <Header {...getToggleProps()} isExpanded={isExpanded}>
        <Title>{name}</Title>
        <LanguageRequirements>{lang}</LanguageRequirements>
        <TimeSpan>{time}</TimeSpan>
        <StatusIcon isExpanded={isExpanded} />
      </Header>
      <div {...getCollapseProps()}>
        <JobDescription>
          {descriptions.map((description) => (
            <Description
              key={id}
              title={description.title}
              text={description.text.split('\n').map((str) => (
                <p key={str}>{str}</p>
              ))}
            />
          ))}
          <p>
            Does this sound like you? You can{' '}
            <ApplyLink href={link} target="_blank" rel="noreferrer">
              apply here
            </ApplyLink>
            .
          </p>
        </JobDescription>
      </div>
    </StyledArticle>
  );
};

export default JobEntry;
