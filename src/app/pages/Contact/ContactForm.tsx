import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Button, Select } from '@components';
import { supportCategories } from './SupportCategories/data';
import type { ContactFormData } from './types';

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
    urgency: 'normal',
    game: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    // Reset form or show success message
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 sm:p-8"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h2 className="text-2xl font-bold text-white font-orbitron mb-6 flex items-center gap-3">
        <FontAwesomeIcon icon="edit" className="text-cyan-400" />
        Send us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Your Name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Enter your full name"
            required
            icon="user"
          />
          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="your@email.com"
            required
            icon="envelope"
          />
        </div>

        {/* Subject & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Subject"
            type="text"
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            placeholder="Brief description of your issue"
            required
            icon="tag"
          />
          <div>
            <Select
              label="Select Category"
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              options={supportCategories.map((category) => ({
                value: category.id,
                label: category.name,
              }))}
              required
            />
          </div>
        </div>

        {/* Game & Urgency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Game (Optional)"
            type="text"
            value={formData.game}
            onChange={(e) => handleChange('game', e.target.value)}
            placeholder="Which game is this about?"
            icon="gamepad"
          />
          <div>
            <Select
              value={formData.urgency}
              label="Urgency"
              onChange={(e) =>
                handleChange(
                  'urgency',
                  e.target.value as 'low' | 'normal' | 'high'
                )
              }
              options={[
                { value: 'low', label: 'Low - General inquiry' },
                { value: 'normal', label: 'Normal - Need help' },
                { value: 'high', label: 'High - Urgent issue' },
              ]}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-400 text-sm font-medium mb-2">
            Message
          </label>
          <Input
            value={formData.message}
            asTextarea
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="Please describe your issue in detail. Include any error messages, steps to reproduce, and what you were doing when the problem occurred."
            rows={6}
            required
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <FontAwesomeIcon icon="spinner" className="animate-spin mr-2" />
              Sending Message...
            </>
          ) : (
            <>
              <FontAwesomeIcon icon="paper-plane" className="mr-2" />
              Send Message
            </>
          )}
        </Button>

        <p className="text-gray-500 text-xs text-center">
          By submitting this form, you agree to our Terms of Service and Privacy
          Policy. We typically respond within 2-4 hours during business hours.
        </p>
      </form>
    </div>
  );
};
