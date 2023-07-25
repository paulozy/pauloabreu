import { FaGithub } from 'react-icons/fa'
import { RiPagesLine } from 'react-icons/ri'
import { ProjectCard } from './styles'

export interface ProjectProps {
  title: string
  description: string
  image: string
  repository: string
  demo: string
}

export function Project({
  title,
  description,
  image,
  repository,
  demo,
}: ProjectProps) {
  return (
    <ProjectCard>
      <img src={image} alt="" />

      <div>
        <h3>{title}</h3>
        <p>{description}</p>

        <div>
          <a href={repository} target="_blank">
            <FaGithub size={35} />
          </a>

          <a href={demo} target="_blank">
            <RiPagesLine size={35} />
          </a>
        </div>
      </div>
    </ProjectCard>
  )
}
