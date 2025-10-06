import AOS from 'aos'
import 'aos/dist/aos.css'

export const initAOS = () => {
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: -999999
  })
}