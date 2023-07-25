import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 1120px;
  width: 100vw;
  height: 100vh;

  margin: 0 auto;

  /* overflow-x: hidden; */

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

export const HeroContainer = styled.section`
  width: 100%;

  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1120px) {
    & img {
      width: 50%;
    }
  }

  @media (max-width: 425px) {
    & img {
      display: none;
    }
  }
`

export const MeetContainer = styled.div`
  width: 100%;

  & h1 {
    font-size: 3.5rem;
    font-weight: 700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    background: ${(props) => props.theme['linear-gradient']};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin: 10px 0;
  }

  & p {
    text-transform: initial;
    font-size: 1rem;
    color: ${(props) => props.theme['cyan-light']};

    line-height: 1.3rem;
  }

  & a {
    display: inline-block;
    margin-top: 2rem;
    text-decoration: none;
    text-transform: capitalize;

    color: ${(props) => props.theme['black']};

    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    background: ${(props) => props.theme['linear-gradient']};
    cursor: pointer;
    border: 2px solid transparent;

    &:hover {
      transition: all 0.5s;
      background: transparent;
      color: ${(props) => props.theme['white']};
      border-image: ${(props) => props.theme['border-gradient']};
      border-width: 2px;
      border-style: solid;

      -webkit-border-image: ${(props) => props.theme['border-gradient']};
    }
  }

  @media (max-width: 425px) {
    & h1 {
      font-size: 2.5rem;
      margin-top: 0.1rem;
    }

    & p {
      font-size: 0.9rem;
    }

    & a {
      font-size: 1rem;
      margin-top: 1rem;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.5rem 1rem;

      font-weight: 500;
    }
  }
`

export const AboutContainer = styled.section`
  margin-top: 2rem;
  width: 80%;
  text-align: start;

  color: ${(props) => props.theme['cyan-light']};

  & h2 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  & p {
    margin-top: 1rem;

    font-size: 1rem;
    line-height: 1.5rem;

    border-image: ${(props) => props.theme['border-gradient']};
    border-width: 0 0 0 4px;
    border-style: solid;

    padding-left: 20px;
  }

  @media (max-width: 425px) {
    & h2 {
      font-size: 1.1rem;
    }

    & p {
      font-size: 0.9rem;
      padding-left: 10px;
      line-height: 1.3rem;
      margin-top: 0.5rem;
    }
  }
`

export const SkillsContainer = styled.section`
  margin-top: 5rem;
  width: 80%;
  text-align: start;

  color: ${(props) => props.theme['cyan-light']};

  & h2 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  & div {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;

    border-image: ${(props) => props.theme['border-gradient']};
    border-width: 0 0 0 4px;
    border-style: solid;

    padding-left: 20px;
  }

  @media (max-width: 425px) {
    margin-top: 3rem;

    & h2 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    & div {
      grid-template-columns: repeat(3, 1fr);
      padding-left: 10px;
    }
  }
`

export const ProjectsContainer = styled.section`
  margin-top: 5rem;

  & h2 {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${(props) => props.theme['cyan-light']};

    margin-bottom: 1.2rem;
  }

  @media (max-width: 425px) {
    margin-top: 3rem;

    & h2 {
      font-size: 1.1rem;
    }
  }
`

export const SocialContainer = styled.section`
  margin-top: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.7rem;
    border-radius: 50%;
    background: ${(props) => props.theme['linear-gradient']};

    &:hover {
      transition: all 0.5s ease;
      background: transparent;
      color: ${(props) => props.theme['white']};
    }

    & svg {
      font-size: 1.5rem;
      color: ${(props) => props.theme['black']};

      &:hover {
        transition: all 0.5s ease;
        color: ${(props) => props.theme['cyan-light']};
      }
    }
  }
`

export const FooterContainer = styled.footer`
  margin-top: 5rem;
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme['cyan-light']};

  & p {
    font-size: 0.8rem;
    font-weight: 400;
  }

  & a {
    color: ${(props) => props.theme['cyan-light']};
    text-decoration: none;
    font-weight: 700;

    &:hover {
      transition: all 0.5s ease;
      color: ${(props) => props.theme['white']};
    }
  }
`
