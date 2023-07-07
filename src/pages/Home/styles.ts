import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  width: max-content;
  position: relative;

  & p {
    font-size: 2rem;
  }

  & h1 {
    font-size: 8rem;
    font-weight: bolder;
    line-height: 6.5rem;
    text-transform: uppercase;
  }

  & h1 span:first-child {
    font-size: 6rem;
  }

  & div {
    position: absolute;
    top: 70px;
    right: 20px;
  }
`
