import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">Home</a>

      <div>
        <a href="#projects">Projects</a>
        <button>Contact</button>
      </div>
    </HeaderContainer>
  )
}
