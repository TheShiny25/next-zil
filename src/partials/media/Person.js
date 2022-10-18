import styled from 'styled-components';
import Card from '@components/Card';
import Image from '@components/Image';
import Breakpoints from '@css/breakpoints';

// Displacement constants
const DX = 0.6;
const DY = 1.3;

const NAME_STYLES = [
  { rot: -10.23, l: '12%', r: 'auto', t: '15%', b: 'auto' },
  { rot: 12.43, l: '12%', r: 'auto', t: 'auto', b: '15%' },
  { rot: 12.43, l: 'auto', r: '8%', t: '15%', b: 'auto' },
  { rot: -13.08, l: '12%', r: 'auto', t: 'auto', b: '15%' },
];

const PersonCard = styled(Card)`
  display: block;

  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-top: calc(126.9% + ${DY * 2}rem);
  }

  ${Breakpoints.laptopUp} {
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid var(--red);
      border-radius: 2.22rem;
      width: calc(98% - ${DX * 2}rem);
      height: calc(98% - ${DY * 2}rem);
      z-index: 10;
      opacity: 0;
      transition: transform 350ms, opacity 350ms;
    }

    &:hover {
      .person__info {
        transform: translate(-${DX / 2}rem, ${DY / 2}rem);
      }

      &::after {
        opacity: 1;
        transform: translate(calc(-50% + ${DX}rem), calc(-50% - ${DY / 2}rem));
      }
    }
  }
`;

const Name = styled.span`
  display: inline-block;
  position: absolute;
  z-index: 5;
  padding: 0.05rem 0.75rem 0.15rem 0.75rem;
  font-family: 'Nanum Pen Script', cursive;
  font-size: 1.27rem;
  text-align: center;
  text-transform: uppercase;
  min-width: 5em;
  left: ${({ styleN }) => NAME_STYLES[styleN].l};
  right: ${({ styleN }) => NAME_STYLES[styleN].r};
  top: ${({ styleN }) => NAME_STYLES[styleN].t};
  bottom: ${({ styleN }) => NAME_STYLES[styleN].b};
  transform: rotate(${({ styleN }) => NAME_STYLES[styleN].rot}deg);

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  &::before {
    background: black;
    transform: rotate(-13.05deg) translateX(1%);
  }

  &::after {
    background: var(--red);
  }

  ${Breakpoints.tabletDown} {
    transform: scale(0.65) rotate(${({ styleN }) => NAME_STYLES[styleN].rot}deg) translate(5%, 25%);
    transform-origin: ${({ styleN }) => (styleN === 2 ? '75% 0' : '0 0')};
  }
`;

const Photo = styled(Image)`
  position: absolute;
  width: calc(98% - ${DX * 2}rem);
  height: calc(98% - ${DY * 2}rem);
  left: ${DX}rem;
  top: ${DY}rem;
  box-sizing: border-box;
  border-radius: 1.66rem;
`;

const Info = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: transform 350ms;
`;

const Person = ({ name, image, link, nameStyleN, sizes, ...rest }) => (
  <PersonCard href={link} target="_blank" {...rest}>
    <Info className="person__info">
      <Photo className="person__photo" src={image} alt={name} sizes={sizes} />
      <Name styleN={nameStyleN}>{name}</Name>
    </Info>
  </PersonCard>
);

export default Person;
