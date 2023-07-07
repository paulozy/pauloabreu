import styled from 'styled-components'

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 4rem;

  &:hover svg {
    transition: all 0.2s;
    transform: scale(1.1);
    color: ${(props) => props.theme['violet-400']};
  }
`
