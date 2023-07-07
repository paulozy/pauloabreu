import { Link } from './styles'

interface SocialLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  url: string
}

export function SocialLink({ children, url }: SocialLinkProps) {
  return (
    <Link href={url} target="_blank">
      {children}
    </Link>
  )
}
