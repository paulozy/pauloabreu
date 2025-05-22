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

  @media (max-width: 768px) {
    max-width: 300px;

    & img {
      height: 150px;
    }

    & div {
      padding: 0.7rem;

      & h3 {
        font-size: 1rem;
      }

      & p {
        font-size: 0.95rem;
      }

      & ul {
        gap: 0.7rem;

        & li {
          font-size: 0.95rem;
          padding: 0.4rem;
        }
      }
    }
  }

  @media (max-width: 425px) {
    max-width: 100%;
    min-width: 0;

    & img {
      height: 120px;
    }

    & div {
      padding: 0.5rem;

      & h3 {
        font-size: 0.95rem;
      }

      & p {
        font-size: 0.9rem;
      }

      & ul {
        gap: 0.4rem;

        & li {
          font-size: 0.85rem;
          padding: 0.3rem;
        }
      }
    }
  }
`
