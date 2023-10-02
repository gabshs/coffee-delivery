import styled from 'styled-components'

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
`
