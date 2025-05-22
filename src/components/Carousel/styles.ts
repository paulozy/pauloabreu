import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const SwiperContainer = styled(Swiper)`
  border-image: ${(props) => props.theme['border-gradient']};
  border-width: 0 0 0 4px;
  border-style: solid;

  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 10px;
  }

  @media (max-width: 425px) {
    padding-left: 5px;

    & .swiper-button-prev,
    & .swiper-button-next {
      display: none;
    }
  }
`
