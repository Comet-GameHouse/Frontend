import { useState } from 'react';
import { Card } from '@components';
import { StarRating } from './StarRating';
import { feedbackCategories } from './data';
import type { FeedbackForm as FeedbackFormType } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FeedbackForm = () => {
  const [formData, setFormData] = useState<FeedbackFormType>({
    rating: 0,
    description: '',
    category: 'overall',
    contactEmail: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FeedbackFormType, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Feedback submitted:', formData);
    setIsSubmitting(false);
    // Here you would typically show a success message and reset form
    setFormData({
      rating: 0,
      description: '',
      category: 'overall',
      contactEmail: '',
    });
  };

  const isFormValid =
    formData.rating > 0 && formData.description.trim().length > 0;

  return (
    <div className="mb-6 sm:mb-8 lg:mb-12">
      <Card
        variant="static-feature"
        className="max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category Selection */}
          <div>
            <label className="block text-white text-sm font-semibold mb-3">
              What would you like to rate?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {feedbackCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleInputChange('category', category.id)}
                  className={`flex items-center p-3 rounded-xl border-2 text-center transition-all duration-300 ${
                    formData.category === category.id
                      ? `bg-${category.color}-500/20 border-${category.color}-500/50 scale-[1.02]`
                      : 'bg-gray-800/30 border-gray-700/30 hover:border-gray-500/30 hover:bg-gray-500/10'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={category.icon}
                    className={`text-${category.color}-400 text-sm block mr-2`}
                  />
                  <span className="text-white text-xs font-medium">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Star Rating */}
          <div>
            <label className="block text-white text-sm font-semibold mb-3">
              How would you rate your experience?
            </label>
            <StarRating
              rating={formData.rating}
              onRatingChange={(rating) => handleInputChange('rating', rating)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-white text-sm font-semibold mb-2">
              Brief Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Tell us what you liked or what we can improve..."
              className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl p-4 text-white placeholder-gray-500 focus:border-purple-500/50 focus:bg-purple-500/10 transition-all duration-300 min-h-[100px] resize-none"
              required
              maxLength={500}
            />
            <div className="text-gray-500 text-xs mt-1 text-right">
              {formData.description.length}/500 characters
            </div>
          </div>

          {/* Contact Email */}
          <div>
            <label className="block text-white text-sm font-semibold mb-2">
              Email (Optional)
            </label>
            <input
              type="email"
              value={formData.contactEmail}
              onChange={(e) =>
                handleInputChange('contactEmail', e.target.value)
              }
              placeholder="We might follow up on your feedback"
              className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl p-4 text-white placeholder-gray-500 focus:border-purple-500/50 focus:bg-purple-500/10 transition-all duration-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full py-3 bg-purple-500 border border-purple-500 rounded-xl text-white font-semibold hover:bg-purple-600 hover:border-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      </Card>
    </div>
  );
};
