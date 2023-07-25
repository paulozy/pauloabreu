import { nanoid } from 'nanoid'
import { Project } from '../contexts/ProjectsContext'

export const projects: Project[] = [
  {
    id: nanoid(),
    title: 'DevFinances',
    description: 'Finance control application',
    image:
      'https://user-images.githubusercontent.com/82914908/223159450-339a39ee-e1f4-47b3-89e8-978d11a2ba76.png',
    repository: 'https://github.com/paulozy/dev-finances',
    demo: 'https://devfinances.paulo-abreu.live/',
  },
]
