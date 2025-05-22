import {
  BiLogoAws,
  BiLogoDocker,
  BiLogoGoLang,
  BiLogoJava,
  BiLogoLinkedin,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoTypescript
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
import ResumeFilePtBr from '/paulo-abreu.pdf'

export function Home() {
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

          <a href={ResumeFilePtBr} download>
            Resume
          </a>
        </MeetContainer>

        <img src={DeveloperImage} alt="Developer" className="hero-image" />
      </HeroContainer>

      <AboutContainer>
        <h2>About me</h2>
        <p>
          Specialist in Backend Development with Node.js and Golang <br />
          Backend developer for +3 years, mainly focused on developing software and solutions with Node.js (Javascript/Typescript). I have a degree in Computer Networks. <br />

          My main specialty is Node.js, using some of the market's leading frameworks, such as Nest.js, Express.js and Fastify.js. I use these tools to develop API's, serverless functions (AWS Lambdas), background services such as queues, some of the technologies used being: Amazon SQS and RabbitMQ.
        </p>
      </AboutContainer>

      <ProjectsContainer id="projects">
        <h2>Projects</h2>
        <Carousel />
      </ProjectsContainer>

      <SkillsContainer>
        <h2>Skills</h2>

        <div className="skills-icons">
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
        <a href="https://www.linkedin.com/in/paulo-abreu-santana/">
          <BiLogoLinkedin size={50} />
        </a>

        <a href="https://www.github.com/paulozy">
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
