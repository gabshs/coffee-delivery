import styled from 'styled-components'
import HeroBackground from '../../assets/background-hero.png'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      text-decoration: none;
      padding: 0.5rem;
      background: ${(props) => props.theme['yellow-100']};
      border-radius: 8px;

      svg {
        color: ${(props) => props.theme['yellow-900']};
      }
    }
  }
`

export const BadgeLocation = styled.div`
  background: ${(props) => props.theme['purple-100']};
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  span {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['purple-900']};
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10rem 12rem;

  position: relative;

  &::before {
    content: '';
    background-image: url(${HeroBackground});
    background-size: cover;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.75;
  }
`
