import { useContext } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Scrollbar } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import { Project } from '../Project'
import { SwiperContainer } from './styles'

export function Carousel() {
  const { projects } = useContext(ProjectsContext)

  //get view width
  const WINDOW_WIDTH = window.innerWidth
  const slidesPerView = WINDOW_WIDTH >= 768 ? 3 : 1
  const showPagination = WINDOW_WIDTH < 768

  return (
    <SwiperContainer
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={slidesPerView}
      navigation
      scrollbar={{ draggable: showPagination }}
      onSlideChange={() => console}
      onSwiper={() => console}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <Project
            title={project.title}
            description={project.description}
            image={project.image}
            repository={project.repository}
            demo={project.demo}
          />
        </SwiperSlide>
      ))}
    </SwiperContainer>
  )
}
