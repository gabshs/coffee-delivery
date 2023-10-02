import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/logo.svg'
import CoffeDelivery from '../../assets/coffee-delivery.png'
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
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe onde estiver, a qualquer hora
            </span>
            <div>
              <ul>
                <li>
                  <span>Compra simples e segura</span>
                </li>
                <li>
                  <span>Embalagem mantém o café intacto</span>
                </li>
                <li>
                  <span>Entrega rápida e rastreada</span>
                </li>
                <li>
                  <span>O café chega fresquinho até você</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img src={CoffeDelivery} alt="" />
          </div>
        </HeroContainer>
      </main>
    </>
  )
}
