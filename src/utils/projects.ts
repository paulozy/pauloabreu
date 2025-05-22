import { nanoid } from 'nanoid'
import { Project } from '../contexts/ProjectsContext'

export const projects: Project[] = [
  {
    id: nanoid(),
    title: 'FinancialResumes',
    description: 'Finance Control Application',
    image:
      'https://private-user-images.githubusercontent.com/82914908/446795738-dd008acd-1dc5-4025-9ff1-85315dc70392.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc5NTcyNDcsIm5iZiI6MTc0Nzk1Njk0NywicGF0aCI6Ii84MjkxNDkwOC80NDY3OTU3MzgtZGQwMDhhY2QtMWRjNS00MDI1LTlmZjEtODUzMTVkYzcwMzkyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTIyVDIzMzU0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI4NWUwNTU1MzIyMmVmYjFlZjgzNWVhNGRlMjFkODI2Y2ZmY2E1OWEwMDgwMWM3NWM2MTlmNTU3OWY0NTIxZjQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.PDaAXrnTkgwhGjLPhXtw0y2xrmmjq2Tq4MifTphqY3Q',
    repository: 'https://github.com/paulozy/legendary-chainsaw',
    demo: 'https://www.resumosfinanceiros.online/',
  },
]
