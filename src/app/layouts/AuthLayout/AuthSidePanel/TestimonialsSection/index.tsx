import { TESTIMONIALS } from './data';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialsSection = () => {
  return (
    <div className="hidden lg:block space-y-3 lg:space-y-4">
      <h3 className="text-lg lg:text-xl font-bold text-white font-orbitron" data-aos="fade-right" data-aos-delay="500">
        What Players Say
      </h3>
      <div className="space-y-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
        ))}
      </div>
    </div>
  );
};