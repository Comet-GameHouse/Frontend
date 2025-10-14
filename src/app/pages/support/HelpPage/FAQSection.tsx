import { useState } from 'react';
import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faqItems, DISCORD_INVITE_URL } from './data';

interface Props {
  searchQuery: string;
}

export const FAQSection = ({ searchQuery }: Props) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const filteredFAQs = faqItems.filter(
    (faq) =>
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  if (filteredFAQs.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 sm:mb-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white font-orbitron">
            Frequently Asked Questions
          </h2>
          <button
            onClick={() => window.open(DISCORD_INVITE_URL, '_blank')}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-indigo-500 border border-indigo-500 rounded-lg text-white text-sm font-semibold hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300"
          >
            <FontAwesomeIcon icon={['fab', 'discord']} />
            Ask on Discord
          </button>
        </div>

        <div className="space-y-3">
          {filteredFAQs.map((faq, index) => (
            <Card
              key={faq.id}
              variant="static-feature"
              className="cursor-pointer hover:border-blue-500/30 transition-all duration-300"
              onClick={() => toggleItem(faq.id)}
              data-aos="fade-up"
              data-aos-delay={250 + index * 50}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-2">
                    {faq.question}
                  </h3>
                  {openItem === faq.id && (
                    <p className="text-gray-400 text-sm leading-relaxed transition-all duration-300">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <FontAwesomeIcon
                  icon={openItem === faq.id ? 'chevron-up' : 'chevron-down'}
                  className="text-gray-400 mt-1 flex-shrink-0 transition-transform duration-300"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
