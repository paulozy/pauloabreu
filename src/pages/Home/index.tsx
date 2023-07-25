import {
  BiLogoAws,
  BiLogoDocker,
  BiLogoGmail,
  BiLogoGoLang,
  BiLogoJava,
  BiLogoLinkedin,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoTypescript,
} from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'
import { SiNestjs, SiRedis } from 'react-icons/si'
import { Carousel } from '../../components/Carousel'
import { Header } from '../../components/Header'
import {
  AboutContainer,
  FooterContainer,
  HeroContainer,
  HomeContainer,
  MeetContainer,
  ProjectsContainer,
  SkillsContainer,
  SocialContainer,
} from './styles'
import DeveloperImage from '/developer.svg'
import ResumeFileEnUs from '/paulo-ricardo-english.pdf'
import ResumeFilePtBr from '/paulo-ricardo-ptbr.pdf'

export function Home() {
  const getResumeFileByBrowserLang = () => {
    const language = navigator.language
    const languagePrefix = language.split('-')[0]

    if (languagePrefix === 'pt') {
      return ResumeFilePtBr
    }

    return ResumeFileEnUs
  }

  return (
    <HomeContainer>
      <Header />

      <HeroContainer>
        <MeetContainer>
          <span>FullStack Developer</span>
          <h1>Paulo Abreu</h1>
          <p>
            FullStack Developer, passionate about technology <br />
            and always in search of new knowledge
          </p>

          <a href={getResumeFileByBrowserLang()} download>
            Resume
          </a>
        </MeetContainer>

        <img src={DeveloperImage} alt="Developer" />
      </HeroContainer>

      <AboutContainer>
        <h2>About me</h2>

        <p>
          I am a highly skilled professional in the backend development area,
          with a robust and diverse experience in technologies such as Node.js,
          TypeScript, AWS, Microservices and Docker. My professional journey has
          been marked by the constant acquisition and improvement of skills in
          software development. Through active participation in a variety of
          projects, I was able to accumulate a rich experience in designing and
          implementing scalable and efficient solutions.
        </p>
      </AboutContainer>

      <ProjectsContainer>
        <h2>Projects</h2>
        <Carousel />
      </ProjectsContainer>

      <SkillsContainer>
        <h2>Skills</h2>

        <div>
          <BiLogoNodejs size={90} />
          <BiLogoGoLang size={90} />
          <BiLogoJava size={90} />
          <BiLogoSpringBoot size={90} />
          <BiLogoReact size={90} />
          <BiLogoDocker size={90} />
          <BiLogoTypescript size={90} />
          <BiLogoAws size={90} />
          <SiNestjs size={90} />
          <BiLogoMongodb size={90} />
          <BiLogoPostgresql size={90} />
          <SiRedis size={90} />
        </div>
      </SkillsContainer>

      <SocialContainer>
        <a href="">
          <BiLogoGmail size={50} />
        </a>

        <a href="">
          <BiLogoLinkedin size={50} />
        </a>

        <a href="">
          <FiGithub size={50} />
        </a>
      </SocialContainer>

      <FooterContainer>
        <p>
          Made with 💜 by{' '}
          <a href="" target="_blank">
            Paulo Abreu
          </a>
        </p>
      </FooterContainer>
    </HomeContainer>
  )
}
