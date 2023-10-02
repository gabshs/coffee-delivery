import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/logo.svg'
import { BadgeLocation, HeaderContainer, HeroContainer } from './styles'

export function Home() {
  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="" />
        <nav>
          <BadgeLocation>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </BadgeLocation>
          <a href="#">
            <ShoppingCart size={22} weight="fill" />
          </a>
        </nav>
      </HeaderContainer>
      <main>
        <HeroContainer>
        </HeroContainer>
      </main>
    </>
  )
}
