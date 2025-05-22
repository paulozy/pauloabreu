import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    color: ${(props) => props.theme['white']};
    text-decoration: none;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme['white']};
      animation-duration: 0.5s;
    }
  }

  & button {
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

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 1rem;

    & div {
      gap: 1rem;
    }
  }

  @media (max-width: 425px) {
    height: 50px;
    padding: 0 0.5rem;

    & a {
      font-size: 0.8rem;
    }

    & button {
      font-size: 0.8rem;
      padding: 0.4rem 0.7rem;
    }

    & div {
      gap: 0.5rem;
    }
  }
`
