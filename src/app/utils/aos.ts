import AOS from 'aos'
import 'aos/dist/aos.css'

export const initAOS = () => {
  AOS.init({
    duration: 400,
    easing: 'ease-out-cubic',
    once: false,
    offset: -999999
  })
}