import { AiFillFileText, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SocialLink } from '../../components/SocialLink'
import { Content, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Content>
        <p>
          Olá 👋 me chamo
          <strong> Paulo Abreu!</strong>
        </p>

        <h1>
          <span>FullStack</span> <br /> <span>Developer</span>
        </h1>

        <div>
          <SocialLink url="https://www.github.com/paulozy">
            <AiFillGithub />
          </SocialLink>
          <SocialLink url="">
            <AiFillLinkedin />
          </SocialLink>

          <SocialLink url="">
            <AiFillFileText />
          </SocialLink>
        </div>
      </Content>
    </HomeContainer>
  )
}
