export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}
