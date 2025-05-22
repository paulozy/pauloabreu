import { useContext, useEffect, useState } from 'react'
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

  // Responsive slidesPerView
  const getSlidesPerView = () => (window.innerWidth >= 768 ? 3 : 1)
  const getShowPagination = () => window.innerWidth < 768

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView())
  const [showPagination, setShowPagination] = useState(getShowPagination())

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView())
      setShowPagination(getShowPagination())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <SwiperContainer
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={slidesPerView}
      navigation
      scrollbar={{ draggable: showPagination }}
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
