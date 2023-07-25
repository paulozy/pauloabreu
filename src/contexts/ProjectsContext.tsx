/* eslint-disable @typescript-eslint/no-floating-promises */
import { createContext } from 'react'
import { projects } from '../utils/projects'

export interface Project {
  id: string
  title: string
  description: string
  image: string
  repository: string
  demo: string
}

interface ProjectsProviderProps {
  children: React.ReactNode
}

interface ProjectsContextType {
  projects: Project[]
}

export const ProjectsContext = createContext({} as ProjectsContextType)

export function ProjectsProvider({ children }: ProjectsProviderProps) {
  const allProjects = projects

  return (
    <ProjectsContext.Provider value={{ projects: allProjects }}>
      {children}
    </ProjectsContext.Provider>
  )
}
