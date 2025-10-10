import { ContactMethodCard } from './ContactMethodCard';
import { contactMethods } from './data';

export const ContactMethods = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="100">
      <h2 className="text-2xl sm:text-3xl font-bold text-white font-orbitron text-center mb-8">
        How Can We Help You?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {contactMethods.map((method, index) => (
          <ContactMethodCard key={index} method={method} index={index} />
        ))}
      </div>
    </div>
  );
};
