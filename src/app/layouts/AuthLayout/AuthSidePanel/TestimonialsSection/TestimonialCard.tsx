import type { Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export const TestimonialCard = ({
  testimonial,
  index,
}: TestimonialCardProps) => {
  return (
    <div
      className="bg-blue-500/10 rounded-xl p-3 lg:p-4 border border-blue-500/20"
      data-aos="fade-right"
      data-aos-delay={500 + (index + 1) * 50}
    >
      <p className="text-gray-200 text-sm italic">"{testimonial.text}"</p>
      <div className="mt-2">
        <div className="text-blue-300 font-semibold text-sm">
          {testimonial.author}
        </div>
        <div className="text-gray-400 text-xs">{testimonial.role}</div>
      </div>
    </div>
  );
};
