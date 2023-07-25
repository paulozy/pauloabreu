import { ThemeProvider } from 'styled-components'
import { ProjectsProvider } from './contexts/ProjectsContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <ProjectsProvider>
        <Home />
      </ProjectsProvider>
    </ThemeProvider>
  )
}
