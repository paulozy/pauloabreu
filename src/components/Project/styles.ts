import styled from 'styled-components'

export const ProjectCard = styled.div`
  max-width: 400px;
  width: 100%;
  height: max-content;

  border-radius: 8px;
  overflow: hidden;

  background: ${(props) => props.theme['card-background']};

  & img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  & a {
    display: inline-block;
    text-decoration: none;
    color: ${(props) => props.theme['cyan-light']};
  }

  & div {
    width: 100%;
    padding: 1rem;

    & h3 {
      margin-top: 1rem;
      font-size: 1.2rem;
    }

    & p {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    & ul {
      margin-top: 1rem;
      list-style: none;

      display: flex;
      align-items: center;
      gap: 1rem;

      & li {
        font-size: 1rem;
        font-weight: 600;
        background: ${(props) => props.theme['cyan-light']};
        color: ${(props) => props.theme['black']};
        padding: 0.5rem;
        border-radius: 5px;
      }
    }

    & div {
      margin-top: 1rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }

  & svg:hover {
    transition: 0.2s;
    transform: scale(1.1);
  }

  /* @media (max-width: 768px) {
    max-width: 300px;
  } */
`
